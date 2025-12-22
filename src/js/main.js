/**
 * Natalia Website - Main JavaScript
 * Advanced Motion Design System
 *
 * NOTE: scroll-animations.js is loaded separately and provides window.ScrollAnimations API
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all modules
  initScrollProgress();
  initParallax();
  initCounters();
  initMobileMenu();
  initDropdowns();
  initLottieAnimations();
  initCarousels();
  initSmoothScroll();
  initMagneticButtons();
});

/* ============================================
   SCROLL PROGRESS INDICATOR
   ============================================ */
function initScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.prepend(progressBar);

  window.addEventListener(
    "scroll",
    function () {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / windowHeight;
      progressBar.style.transform = `scaleX(${progress})`;
    },
    { passive: true },
  );
}

/* ============================================
   PARALLAX EFFECT
   ============================================ */
function initParallax() {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  if (parallaxElements.length === 0) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;

    parallaxElements.forEach(function (el) {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const offset = (scrollY - elementTop) * speed;

      // Only apply if element is in viewport range
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.style.transform = `translateY(${offset}px)`;
      }
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );
}

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.dataset.counter, 10);
  const duration = parseInt(element.dataset.counterDuration, 10) || 2000;
  const suffix = element.dataset.counterSuffix || "";
  const prefix = element.dataset.counterPrefix || "";

  let startTime = null;
  const startValue = 0;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const currentValue = Math.floor(
      startValue + (target - startValue) * easedProgress,
    );

    element.textContent =
      prefix + currentValue.toLocaleString("fr-FR") + suffix;
    element.classList.add("is-visible");

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

/* ============================================
   MOBILE MENU TOGGLE (Enhanced with focus management and scroll lock)
   NOTE: Uses enhanced mobile-menu.js module if available
   ============================================ */
function initMobileMenu() {
  // Use the enhanced mobile menu module if available
  if (
    typeof window.MobileMenu !== "undefined" &&
    typeof window.MobileMenu.init === "function"
  ) {
    window.MobileMenu.init();
    return;
  }

  // Fallback to basic implementation if module not loaded
  console.warn(
    "Enhanced mobile menu module not loaded, using basic implementation",
  );

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  if (!menuToggle || !menu) return;

  const iconOpen = menuToggle.querySelector(".menu-icon-open");
  const iconClose = menuToggle.querySelector(".menu-icon-close");

  function openMenu() {
    menu.classList.remove("menu-hidden");
    menu.classList.add("menu-visible");
    menuToggle.setAttribute("aria-expanded", "true");

    if (iconOpen && iconClose) {
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
    }
  }

  function closeMenu() {
    menu.classList.remove("menu-visible");
    menu.classList.add("menu-hidden");
    menuToggle.setAttribute("aria-expanded", "false");

    if (iconOpen && iconClose) {
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = menu.classList.contains("menu-visible");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      if (menu.classList.contains("menu-visible")) {
        closeMenu();
      }
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("menu-visible")) {
      closeMenu();
    }
  });
}

/* ============================================
   DROPDOWN TOGGLES (Mobile)
   ============================================ */
function initDropdowns() {
  const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const dropdown = toggle.nextElementSibling;
      const icon = toggle.querySelector("svg");

      if (dropdown && dropdown.hasAttribute("data-dropdown")) {
        const isHidden = dropdown.classList.contains("hidden");

        // Animate dropdown
        if (isHidden) {
          dropdown.classList.remove("hidden");
          dropdown.style.maxHeight = "0";
          dropdown.style.overflow = "hidden";
          dropdown.style.transition = "max-height 0.3s ease";
          requestAnimationFrame(function () {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
          });
        } else {
          dropdown.style.maxHeight = "0";
          setTimeout(function () {
            dropdown.classList.add("hidden");
            dropdown.style.maxHeight = "";
            dropdown.style.overflow = "";
          }, 300);
        }

        if (icon) {
          icon.style.transition = "transform 0.3s ease";
          icon.classList.toggle("rotate-180");
        }
      }
    });
  });
}

/* ============================================
   LOTTIE ANIMATIONS
   ============================================ */
function initLottieAnimations() {
  if (typeof lottie === "undefined") return;

  const containers = document.querySelectorAll("[data-lottie]");

  containers.forEach(function (container) {
    const animationPath = container.dataset.lottie;
    const loop = container.dataset.loop !== "false";
    const autoplay = container.dataset.autoplay !== "false";
    const playOnScroll = container.dataset.lottieScroll === "true";

    if (animationPath) {
      const animation = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: loop,
        autoplay: playOnScroll ? false : autoplay,
        path: animationPath,
      });

      // Play on scroll option
      if (playOnScroll) {
        const observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                animation.play();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 },
        );

        observer.observe(container);
      }
    }
  });
}

/* ============================================
   SWIPER CAROUSELS
   ============================================ */
function initCarousels() {
  if (typeof Swiper === "undefined") return;

  // Partners Carousel with animation
  const partnersCarousel = document.querySelector('[data-carousel="partners"]');
  if (partnersCarousel) {
    new Swiper(partnersCarousel, {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      },
    });
  }

  // Testimonials Carousel
  const testimonialsCarousel = document.querySelector(
    '[data-carousel="testimonials"]',
  );
  if (testimonialsCarousel) {
    new Swiper(testimonialsCarousel, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          effect: "slide",
        },
        1024: {
          slidesPerView: 3,
          effect: "slide",
        },
      },
    });
  }

  // Generic Carousel
  const genericCarousels = document.querySelectorAll(
    '[data-carousel="generic"]',
  );
  genericCarousels.forEach(function (carousel) {
    new Swiper(carousel, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      pagination: {
        el: carousel.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: carousel.querySelector(".swiper-button-next"),
        prevEl: carousel.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  });
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/* ============================================
   MAGNETIC BUTTONS (subtle hover effect)
   ============================================ */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll("[data-magnetic]");

  magneticElements.forEach(function (el) {
    el.addEventListener("mousemove", function (e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const strength = parseFloat(el.dataset.magnetic) || 0.3;

      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    el.addEventListener("mouseleave", function () {
      el.style.transition = "transform 0.3s ease";
      el.style.transform = "translate(0, 0)";

      setTimeout(function () {
        el.style.transition = "";
      }, 300);
    });
  });
}

/* ============================================
   FORM VALIDATION (for contact forms)
   ============================================ */
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach(function (input) {
    // Reset state
    input.classList.remove("input-error");

    if (!input.value.trim()) {
      input.classList.add("input-error");
      shakeElement(input);
      isValid = false;
    }

    // Email validation
    if (input.type === "email" && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        input.classList.add("input-error");
        shakeElement(input);
        isValid = false;
      }
    }
  });

  return isValid;
}

function shakeElement(element) {
  element.style.animation = "none";
  element.offsetHeight; // Trigger reflow
  element.style.animation = "shake 0.5s ease";
}

/* ============================================
   TEXT TYPING EFFECT
   ============================================ */
function typeText(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

/* ============================================
   CURSOR TRAIL EFFECT (optional)
   ============================================ */
function initCursorTrail() {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(92, 57, 238, 0.3);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: multiply;
  `;
  document.body.appendChild(trail);

  document.addEventListener("mousemove", function (e) {
    trail.style.left = e.clientX - 10 + "px";
    trail.style.top = e.clientY - 10 + "px";
  });
}

/* ============================================
   REVEAL ON SCROLL (alternative method)
   ============================================ */
function revealOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const defaults = {
    threshold: 0.1,
    rootMargin: "0px",
    animation: "fade-up",
  };
  const settings = { ...defaults, ...options };

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-animate", settings.animation);
          requestAnimationFrame(function () {
            entry.target.classList.add("is-visible");
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: settings.threshold,
      rootMargin: settings.rootMargin,
    },
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

/* ============================================
   EXPORT FOR GLOBAL ACCESS
   ============================================ */
window.NataliaApp = {
  initScrollProgress: initScrollProgress,
  initParallax: initParallax,
  initCounters: initCounters,
  initMobileMenu: initMobileMenu,
  initDropdowns: initDropdowns,
  initLottieAnimations: initLottieAnimations,
  initCarousels: initCarousels,
  initSmoothScroll: initSmoothScroll,
  initMagneticButtons: initMagneticButtons,
  validateForm: validateForm,
  typeText: typeText,
  revealOnScroll: revealOnScroll,
};
