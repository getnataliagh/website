/**
 * Locales index - Exports all locales and helper functions
 */
const fr = require('./fr');
const en = require('./en');
const slugs = require('./slugs');

const locales = { fr, en };
const defaultLocale = 'fr';
const supportedLocales = ['fr', 'en'];

// Inverse slug mapping: EN slug -> FR slug
const slugsEnToFr = Object.fromEntries(
  Object.entries(slugs).map(([frSlug, enSlug]) => [enSlug, frSlug])
);

/**
 * Get locale data by language code
 * @param {string} lang - Language code ('fr' or 'en')
 * @returns {object} Locale data
 */
function getLocale(lang) {
  return locales[lang] || locales[defaultLocale];
}

/**
 * Get the English slug for a French slug
 * @param {string} frSlug - French slug
 * @returns {string} English slug
 */
function getEnglishSlug(frSlug) {
  return slugs[frSlug] || frSlug;
}

/**
 * Get the French slug for an English slug
 * @param {string} enSlug - English slug
 * @returns {string} French slug
 */
function getFrenchSlug(enSlug) {
  return slugsEnToFr[enSlug] || enSlug;
}

/**
 * Get alternate URLs for hreflang tags
 * @param {string} currentSlugFr - Current page slug in French
 * @param {string} currentLang - Current language code
 * @returns {Array} Array of alternate URL objects
 */
function getAlternateUrls(currentSlugFr) {
  const slugEn = getEnglishSlug(currentSlugFr);
  const frUrl = currentSlugFr === 'index' ? '/fr/' : `/fr/${currentSlugFr}`;
  const enUrl = slugEn === 'index' ? '/en/' : `/en/${slugEn}`;

  return [
    {
      lang: 'fr',
      hreflang: 'fr-FR',
      url: frUrl,
      fullUrl: `https://getnatalia.com${frUrl}`,
    },
    {
      lang: 'en',
      hreflang: 'en-US',
      url: enUrl,
      fullUrl: `https://getnatalia.com${enUrl}`,
    },
  ];
}

/**
 * Get page metadata (title, description) for a specific page and locale
 * @param {string} slugFr - Page slug in French
 * @param {string} lang - Language code
 * @returns {object} Page metadata
 */
function getPageMeta(slugFr, lang) {
  const locale = getLocale(lang);
  const slugKey = lang === 'en' ? getEnglishSlug(slugFr) : slugFr;
  return locale.pages[slugKey] || locale.pages[slugFr] || {
    title: locale.site.title,
    description: locale.site.description,
  };
}

/**
 * Build the full locals object for a page
 * @param {string} slugFr - Page slug in French
 * @param {string} lang - Language code
 * @returns {object} Full locals object for EJS
 */
function buildLocals(slugFr, lang) {
  const locale = getLocale(lang);
  const pageMeta = getPageMeta(slugFr, lang);
  const alternates = getAlternateUrls(slugFr);
  const currentSlug = lang === 'en' ? getEnglishSlug(slugFr) : slugFr;
  const currentUrl = currentSlug === 'index'
    ? `${locale.prefix}/`
    : `${locale.prefix}/${currentSlug}`;

  return {
    ...locale,
    currentSlug,
    currentSlugFr: slugFr,
    currentUrl,
    alternates,
    pageMeta,
    pageTitle: pageMeta.title,
    pageDescription: pageMeta.description,
  };
}

module.exports = {
  locales,
  defaultLocale,
  supportedLocales,
  slugs,
  slugsEnToFr,
  getLocale,
  getEnglishSlug,
  getFrenchSlug,
  getAlternateUrls,
  getPageMeta,
  buildLocals,
  // Direct exports for convenience
  fr,
  en,
};
