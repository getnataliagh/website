use std::collections::HashMap;
use std::fs;
use std::path::Path;
use std::process::Command;

const SRC_DIR: &str = "src";
const DIST_DIR: &str = "dist";
const LOCALES_DIR: &str = "locales";
const BASE_URL: &str = "https://getnatalia.com";

fn main() {
    // Use current working directory as project root
    let project_root = std::env::current_dir()
        .expect("Failed to get current directory");

    println!("Building i18n site from: {:?}", project_root);

    // 1. Discover EJS pages dynamically
    let pages = discover_pages(&project_root);
    println!("Discovered {} pages: {:?}", pages.len(), pages);

    // 2. Parse slug mappings from slugs.js
    let slugs = parse_slugs(&project_root);
    println!("Parsed {} slug mappings", slugs.len());

    // 3. Build for each locale
    let locales = vec!["fr", "en"];

    for locale in &locales {
        println!("\n=== Building locale: {} ===", locale);
        build_locale(&project_root, locale, &pages, &slugs);
    }

    // 4. Copy static files to dist root
    println!("\n=== Copying static files ===");
    copy_static_to_dist(&project_root);

    // 5. Generate multilingual sitemap
    println!("\n=== Generating sitemap ===");
    generate_sitemap(&project_root, &pages, &slugs);

    // 6. Generate Netlify redirects for old URLs
    println!("\n=== Generating Netlify redirects ===");
    generate_redirects(&project_root, &pages, &slugs);

    println!("\n=== Build complete! ===");
}

/// Copy static files (robots.txt, favicon.ico, etc.) to dist root
fn copy_static_to_dist(project_root: &Path) {
    let static_dir = project_root.join("static");
    let dist_dir = project_root.join(DIST_DIR);

    if !static_dir.exists() {
        println!("No static directory found, skipping");
        return;
    }

    // Copy specific root files
    let root_files = ["robots.txt", "favicon.ico"];
    for file in &root_files {
        let src = static_dir.join(file);
        if src.exists() {
            let dest = dist_dir.join(file);
            fs::copy(&src, &dest).expect(&format!("Failed to copy {}", file));
            println!("Copied {} to dist/", file);
        }
    }

    // Copy assets directory if it exists
    let assets_src = static_dir.join("assets");
    if assets_src.exists() {
        let assets_dest = dist_dir.join("assets");
        copy_dir_recursive(&assets_src, &assets_dest);
        println!("Copied assets/ to dist/assets/");
    }
}

/// Discover all .ejs pages in src/ (excluding includes and partials)
fn discover_pages(project_root: &Path) -> Vec<String> {
    let src_dir = project_root.join(SRC_DIR);

    fs::read_dir(&src_dir)
        .expect("Failed to read src directory")
        .filter_map(|entry| entry.ok())
        .filter(|entry| {
            let path = entry.path();
            let filename = path.file_name().unwrap().to_str().unwrap();

            // Only .ejs files, not starting with _ (partials)
            path.extension().map_or(false, |ext| ext == "ejs")
                && !filename.starts_with('_')
        })
        .map(|entry| {
            entry
                .path()
                .file_stem()
                .unwrap()
                .to_str()
                .unwrap()
                .to_string()
        })
        .collect()
}

/// Parse slug mappings from locales/slugs.js
fn parse_slugs(project_root: &Path) -> HashMap<String, String> {
    let slugs_file = project_root.join(LOCALES_DIR).join("slugs.js");
    let content = fs::read_to_string(&slugs_file).expect("Failed to read slugs.js");

    let mut slugs = HashMap::new();

    // Simple regex-like parsing for 'fr-slug': 'en-slug' patterns
    for line in content.lines() {
        let line = line.trim();

        // Skip comments and empty lines
        if line.is_empty() || line.starts_with("//") || line.starts_with("/*") {
            continue;
        }

        // Match patterns like: 'key': 'value', or "key": "value",
        if let Some(colon_pos) = line.find(':') {
            let key_part = &line[..colon_pos];
            let value_part = &line[colon_pos + 1..];

            let key = extract_quoted_string(key_part);
            let value = extract_quoted_string(value_part);

            if let (Some(k), Some(v)) = (key, value) {
                slugs.insert(k, v);
            }
        }
    }

    slugs
}

/// Extract string between quotes
fn extract_quoted_string(s: &str) -> Option<String> {
    let s = s.trim();

    // Try single quotes
    if let (Some(start), Some(end)) = (s.find('\''), s.rfind('\'')) {
        if start < end {
            return Some(s[start + 1..end].to_string());
        }
    }

    // Try double quotes
    if let (Some(start), Some(end)) = (s.find('"'), s.rfind('"')) {
        if start < end {
            return Some(s[start + 1..end].to_string());
        }
    }

    None
}

/// Build site for a specific locale
fn build_locale(
    project_root: &Path,
    locale: &str,
    pages: &[String],
    slugs: &HashMap<String, String>,
) {
    // Create temporary build directory for this locale
    let temp_dir = project_root.join("temp").join(locale);
    let dist_locale_dir = project_root.join(DIST_DIR).join(locale);

    // Clean and create directories
    if temp_dir.exists() {
        fs::remove_dir_all(&temp_dir).expect("Failed to clean temp directory");
    }
    fs::create_dir_all(&temp_dir).expect("Failed to create temp directory");
    fs::create_dir_all(&dist_locale_dir).expect("Failed to create dist locale directory");

    // Copy includes directory
    let src_includes = project_root.join(SRC_DIR).join("includes");
    let temp_includes = temp_dir.join("includes");
    copy_dir_recursive(&src_includes, &temp_includes);

    // Copy css directory if it exists
    let src_css = project_root.join(SRC_DIR).join("css");
    if src_css.exists() {
        let temp_css = temp_dir.join("css");
        copy_dir_recursive(&src_css, &temp_css);
    }

    // Copy js directory if it exists
    let src_js = project_root.join(SRC_DIR).join("js");
    if src_js.exists() {
        let temp_js = temp_dir.join("js");
        copy_dir_recursive(&src_js, &temp_js);
    }

    // Copy style.scss
    let src_style = project_root.join(SRC_DIR).join("style.scss");
    if src_style.exists() {
        fs::copy(&src_style, temp_dir.join("style.scss")).expect("Failed to copy style.scss");
    }

    // Create symlink to static directory for asset resolution
    // temp/fr/ needs ../static to resolve to static/ (go up to temp/, then to static/)
    // So we create a symlink at temp/static -> ../static
    let temp_static_link = project_root.join("temp").join("static");
    if !temp_static_link.exists() {
        std::os::unix::fs::symlink(
            project_root.join("static"),
            &temp_static_link
        ).expect("Failed to create static symlink");
    }

    // Copy pages with slug translation for English
    for page in pages {
        let src_file = project_root.join(SRC_DIR).join(format!("{}.ejs", page));

        let dest_filename = if locale == "en" {
            // Translate slug for English
            slugs.get(page).cloned().unwrap_or_else(|| page.clone())
        } else {
            page.clone()
        };

        let dest_file = temp_dir.join(format!("{}.ejs", dest_filename));

        // Read and modify the file content
        let content = fs::read_to_string(&src_file).expect("Failed to read EJS file");

        // Inject locale information at the top of the file
        let modified_content = inject_locale_info(&content, page, locale);

        fs::write(&dest_file, modified_content).expect("Failed to write EJS file");
    }

    // Generate .ejsrc.js for this locale with helper functions
    let ejsrc_content = format!(
        r#"const locales = require('./locales');
module.exports = {{
  locals: {{
    ...locales.getLocale('{}'),
    // Helper functions available in EJS templates
    getAlternateUrls: locales.getAlternateUrls,
    getPageMeta: locales.getPageMeta,
    getEnglishSlug: locales.getEnglishSlug,
    getFrenchSlug: locales.getFrenchSlug,
  }},
}};
"#,
        locale
    );
    fs::write(project_root.join(".ejsrc.js"), &ejsrc_content).expect("Failed to write .ejsrc.js");

    // Build with Parcel
    let public_url = format!("/{}/", locale);

    println!("Running Parcel build for {}...", locale);

    let status = Command::new("npx")
        .args([
            "parcel",
            "build",
            &format!("temp/{}/*.ejs", locale),
            "--dist-dir",
            &dist_locale_dir.to_string_lossy(),
            "--public-url",
            &public_url,
            "--no-cache",
        ])
        .current_dir(project_root)
        .status()
        .expect("Failed to run Parcel");

    if !status.success() {
        panic!("Parcel build failed for locale: {}", locale);
    }

    println!("Build complete for {}", locale);
}

/// Inject locale information into EJS file
fn inject_locale_info(content: &str, slug_fr: &str, _locale: &str) -> String {
    // Add locale setup at the beginning of the file, after <!DOCTYPE html>
    // Use helper functions passed through locals (no require needed)
    let locale_setup = format!(
        r#"<%
// i18n setup
locals.currentSlugFr = '{}';
locals.currentSlug = locals.lang === 'en' ? (locals.getEnglishSlug('{}') || '{}') : '{}';
locals.alternates = locals.getAlternateUrls('{}');
locals.pageMeta = locals.getPageMeta('{}', locals.lang);
locals.currentUrl = locals.currentSlug === 'index' ? locals.prefix + '/' : locals.prefix + '/' + locals.currentSlug;
%>
"#,
        slug_fr, slug_fr, slug_fr, slug_fr, slug_fr, slug_fr
    );

    // Insert after <!DOCTYPE html> if present
    if let Some(pos) = content.find("<!DOCTYPE html>") {
        let end_pos = pos + "<!DOCTYPE html>".len();
        format!(
            "{}\n{}\n{}",
            &content[..end_pos],
            locale_setup,
            &content[end_pos..]
        )
    } else {
        format!("{}\n{}", locale_setup, content)
    }
}

/// Recursively copy a directory
fn copy_dir_recursive(src: &Path, dest: &Path) {
    fs::create_dir_all(dest).expect("Failed to create directory");

    for entry in fs::read_dir(src).expect("Failed to read directory") {
        let entry = entry.expect("Failed to read entry");
        let src_path = entry.path();
        let dest_path = dest.join(entry.file_name());

        if src_path.is_dir() {
            copy_dir_recursive(&src_path, &dest_path);
        } else {
            fs::copy(&src_path, &dest_path).expect("Failed to copy file");
        }
    }
}

/// Generate multilingual sitemap
fn generate_sitemap(project_root: &Path, pages: &[String], slugs: &HashMap<String, String>) {
    let mut sitemap = String::from(
        r#"<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
"#,
    );

    for page in pages {
        let fr_url = if page == "index" {
            "/fr/".to_string()
        } else {
            format!("/fr/{}", page)
        };

        let en_slug = slugs.get(page).cloned().unwrap_or_else(|| page.clone());
        let en_url = if en_slug == "index" {
            "/en/".to_string()
        } else {
            format!("/en/{}", en_slug)
        };

        // French URL entry
        sitemap.push_str(&format!(
            r#"  <url>
    <loc>{}{}</loc>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="{}{}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="{}{}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="{}{}"/>
  </url>
"#,
            BASE_URL, fr_url, BASE_URL, fr_url, BASE_URL, en_url, BASE_URL, fr_url
        ));

        // English URL entry
        sitemap.push_str(&format!(
            r#"  <url>
    <loc>{}{}</loc>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="{}{}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="{}{}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="{}{}"/>
  </url>
"#,
            BASE_URL, en_url, BASE_URL, fr_url, BASE_URL, en_url, BASE_URL, fr_url
        ));
    }

    sitemap.push_str("</urlset>\n");

    let sitemap_path = project_root.join(DIST_DIR).join("sitemap.xml");
    fs::write(&sitemap_path, &sitemap).expect("Failed to write sitemap");

    println!("Sitemap generated at {:?}", sitemap_path);
}

/// Generate Netlify redirects for old URLs and language detection
fn generate_redirects(project_root: &Path, pages: &[String], slugs: &HashMap<String, String>) {
    let mut redirects = String::new();

    // Language detection on root
    redirects.push_str(
        r#"# Language detection on root
[[redirects]]
  from = "/"
  to = "/en/"
  status = 302
  conditions = {Language = ["en"]}

[[redirects]]
  from = "/"
  to = "/fr/"
  status = 302

"#,
    );

    // Redirects for old French URLs (without /fr/ prefix) -> new URLs with /fr/
    redirects.push_str("# Redirects for old French URLs\n");
    for page in pages {
        if page != "index" {
            redirects.push_str(&format!(
                r#"[[redirects]]
  from = "/{}"
  to = "/fr/{}"
  status = 301

"#,
                page, page
            ));
        }
    }

    // Clean URLs for both locales
    redirects.push_str(
        r#"# Clean URLs
[[redirects]]
  from = "/fr/*"
  to = "/fr/:splat.html"
  status = 200

[[redirects]]
  from = "/en/*"
  to = "/en/:splat.html"
  status = 200

# 404 handling
[[redirects]]
  from = "/fr/*"
  to = "/fr/404.html"
  status = 404

[[redirects]]
  from = "/en/*"
  to = "/en/404.html"
  status = 404
"#,
    );

    // Append to existing netlify.toml or create new one
    let netlify_toml_path = project_root.join("netlify.toml");
    let existing_content = fs::read_to_string(&netlify_toml_path).unwrap_or_default();

    // Check if we need to replace the redirects section
    let new_content = if existing_content.contains("[[redirects]]") {
        // Remove existing redirects and add new ones
        let lines: Vec<&str> = existing_content.lines().collect();
        let mut result = String::new();
        let mut in_redirects = false;

        for line in lines {
            if line.starts_with("[[redirects]]") || line.starts_with("# Language detection")
                || line.starts_with("# Redirects for old")
                || line.starts_with("# Clean URLs")
                || line.starts_with("# 404 handling")
            {
                in_redirects = true;
                continue;
            }

            if in_redirects && (line.starts_with('[') && !line.starts_with("[[redirects]]")) {
                in_redirects = false;
            }

            if !in_redirects {
                result.push_str(line);
                result.push('\n');
            }
        }

        format!("{}\n{}", result.trim_end(), redirects)
    } else {
        format!("{}\n{}", existing_content, redirects)
    };

    // For now, just write the redirects to a separate file
    let redirects_path = project_root.join("netlify-redirects.toml");
    fs::write(&redirects_path, &redirects).expect("Failed to write redirects");

    println!(
        "Netlify redirects generated at {:?} (merge manually into netlify.toml)",
        redirects_path
    );
}
