/**
 * Natalia Website - Scroll Animations Module
 * Handles all scroll-based interactions and animations
 *
 * Features:
 * - IntersectionObserver for scroll animations
 * - Header scroll state management
 * - Card glow mouse tracking effect
 * - Performance-optimized with requestAnimationFrame
 */

(function() {
  'use strict';

  // Module state
  let scrollObserver = null;
  let headerScrollListener = null;
  let cardGlowListeners = [];

  /**
   * Initialize all scroll animation features
   */
  function init() {
    // Check for browser support
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, scroll animations disabled');
      return;
    }

    initIntersectionObserver();
    initHeaderScrollState();
    initCardGlowEffect();
  }

  /**
   * IntersectionObserver for scroll-triggered animations
   * Watches for elements entering the viewport and adds .is-visible class
   */
  function initIntersectionObserver() {
    // Select all elements that should animate on scroll
    const animatedElements = [
      ...document.querySelectorAll('.animate-on-scroll'),
      ...document.querySelectorAll('.animate-on-scroll--left'),
      ...document.querySelectorAll('.animate-on-scroll--right'),
      ...document.querySelectorAll('.animate-on-scroll--scale'),
      ...document.querySelectorAll('[data-stagger]'),
      ...document.querySelectorAll('[data-stagger-left]'),
      ...document.querySelectorAll('[data-stagger-scale]'),
      ...document.querySelectorAll('[data-animate]')
    ];

    if (animatedElements.length === 0) {
      return;
    }

    // Observer configuration
    // threshold: 0.1 - trigger when 10% of element is visible
    // rootMargin: -50px bottom - trigger slightly before element enters viewport
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    // Create the observer
    scrollObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smooth animation triggering
          requestAnimationFrame(function() {
            entry.target.classList.add('is-visible');

            // Legacy support for older class name
            if (entry.target.classList.contains('animate-on-scroll')) {
              entry.target.classList.add('visible');
            }
          });

          // Unobserve after animation (one-time animation)
          // Unless element has data-animate-repeat attribute
          if (!entry.target.hasAttribute('data-animate-repeat')) {
            scrollObserver.unobserve(entry.target);
          }
        } else if (entry.target.hasAttribute('data-animate-repeat')) {
          // For repeating animations, remove class when out of view
          entry.target.classList.remove('is-visible');
          if (entry.target.classList.contains('animate-on-scroll')) {
            entry.target.classList.remove('visible');
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(function(element) {
      scrollObserver.observe(element);
    });
  }

  /**
   * Header scroll state management
   * Adds .header-scrolled class to header when scrolled past threshold
   */
  function initHeaderScrollState() {
    const header = document.getElementById('main-header');

    if (!header) {
      return;
    }

    const scrollThreshold = 50;
    let ticking = false;

    function updateHeaderState() {
      const scrollY = window.pageYOffset || window.scrollY;

      if (scrollY > scrollThreshold) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }

      ticking = false;
    }

    // Create the scroll listener with requestAnimationFrame throttling
    headerScrollListener = function() {
      if (!ticking) {
        requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    };

    // Add the listener with passive flag for better scroll performance
    window.addEventListener('scroll', headerScrollListener, { passive: true });

    // Run once on init to set initial state
    updateHeaderState();
  }

  /**
   * Card glow mouse tracking effect
   * Updates CSS custom properties for card glow position based on mouse movement
   * Supports multiple card variants: .card-glow, .card-glow-blue, .card-glow-purple, .card--glow
   */
  function initCardGlowEffect() {
    const glowCards = [
      ...document.querySelectorAll('.card-glow'),
      ...document.querySelectorAll('.card-glow-blue'),
      ...document.querySelectorAll('.card-glow-purple'),
      ...document.querySelectorAll('.card--glow')
    ];

    if (glowCards.length === 0) {
      return;
    }

    glowCards.forEach(function(card) {
      // Create the mousemove handler for this card
      const mouseMoveHandler = function(event) {
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(function() {
          const rect = card.getBoundingClientRect();

          // Calculate mouse position relative to card
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          // Update CSS custom properties
          card.style.setProperty('--mouse-x', x + 'px');
          card.style.setProperty('--mouse-y', y + 'px');
        });
      };

      // Store the handler for cleanup
      cardGlowListeners.push({
        element: card,
        handler: mouseMoveHandler
      });

      // Add the listener
      card.addEventListener('mousemove', mouseMoveHandler, { passive: true });
    });
  }

  /**
   * Cleanup function to remove all event listeners
   * Useful for SPA navigation or dynamic content updates
   */
  function cleanup() {
    // Disconnect IntersectionObserver
    if (scrollObserver) {
      scrollObserver.disconnect();
      scrollObserver = null;
    }

    // Remove header scroll listener
    if (headerScrollListener) {
      window.removeEventListener('scroll', headerScrollListener);
      headerScrollListener = null;
    }

    // Remove card glow listeners
    cardGlowListeners.forEach(function(item) {
      item.element.removeEventListener('mousemove', item.handler);
    });
    cardGlowListeners = [];
  }

  /**
   * Reinitialize all scroll animations
   * Useful after dynamic content is loaded
   */
  function reinit() {
    cleanup();
    init();
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded
    init();
  }

  // Export public API
  window.ScrollAnimations = {
    init: init,
    cleanup: cleanup,
    reinit: reinit
  };

})();
