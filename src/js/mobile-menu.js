/**
 * Mobile Menu Module - Enhanced Vanilla JS
 *
 * Features:
 * - Open/close state management with toggle
 * - Body scroll lock/restore with position preservation
 * - Focus management and focus trap
 * - Multiple close triggers (ESC, backdrop, nav links)
 * - Clean event listener management with cleanup
 *
 * Usage: Call initMobileMenu() from main.js
 */

(function() {
  'use strict';

  // State
  let isOpen = false;
  let lastFocusedElement = null;
  let scrollPosition = 0;
  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;

  // DOM References
  let menuToggle = null;
  let menu = null;
  let iconOpen = null;
  let iconClose = null;
  let menuItems = null;

  // Event listener references for cleanup
  const eventListeners = [];

  /**
   * Store an event listener reference for later cleanup
   */
  function registerEventListener(element, event, handler, options) {
    element.addEventListener(event, handler, options);
    eventListeners.push({ element: element, event: event, handler: handler, options: options });
  }

  /**
   * Remove all registered event listeners
   */
  function cleanup() {
    eventListeners.forEach(function(listener) {
      listener.element.removeEventListener(listener.event, listener.handler, listener.options);
    });
    eventListeners.length = 0;
  }

  /**
   * Lock body scroll and store current scroll position
   */
  function lockBodyScroll() {
    // Store current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Apply overflow hidden and maintain scroll position
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }

  /**
   * Restore body scroll to previous position
   */
  function restoreBodyScroll() {
    // Remove overflow hidden
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  }

  /**
   * Get all focusable elements within the menu
   */
  function updateFocusableElements() {
    if (!menu) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    focusableElements = Array.from(menu.querySelectorAll(focusableSelectors));

    if (focusableElements.length > 0) {
      firstFocusableElement = focusableElements[0];
      lastFocusableElement = focusableElements[focusableElements.length - 1];
    }
  }

  /**
   * Handle Tab key navigation to trap focus within menu
   */
  function handleFocusTrap(e) {
    // Only trap focus when menu is open
    if (!isOpen) return;

    // Check if Tab key was pressed
    if (e.key !== 'Tab') return;

    // If no focusable elements, prevent default
    if (focusableElements.length === 0) {
      e.preventDefault();
      return;
    }

    // Shift + Tab (backwards)
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement || document.activeElement === menuToggle) {
        e.preventDefault();
        lastFocusableElement.focus();
      }
    }
    // Tab (forwards)
    else {
      if (document.activeElement === lastFocusableElement) {
        e.preventDefault();
        // Focus on close button if it exists, otherwise first element
        if (menuToggle) {
          menuToggle.focus();
        } else {
          firstFocusableElement.focus();
        }
      }
    }
  }

  /**
   * Open the mobile menu
   */
  function openMenu() {
    if (isOpen) return;

    // Store the currently focused element
    lastFocusedElement = document.activeElement;

    // Update state
    isOpen = true;

    // Lock body scroll
    lockBodyScroll();

    // Update DOM
    menu.classList.remove('menu-hidden');
    menu.classList.add('menu-visible');
    menuToggle.setAttribute('aria-expanded', 'true');

    // Update burger/close icons
    if (iconOpen && iconClose) {
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
    }

    // Update focusable elements and set focus
    updateFocusableElements();

    // Focus first focusable element in menu after animation
    setTimeout(function() {
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }, 100);
  }

  /**
   * Close the mobile menu
   */
  function closeMenu() {
    if (!isOpen) return;

    // Update state
    isOpen = false;

    // Restore body scroll
    restoreBodyScroll();

    // Update DOM
    menu.classList.remove('menu-visible');
    menu.classList.add('menu-hidden');
    menuToggle.setAttribute('aria-expanded', 'false');

    // Update burger/close icons
    if (iconOpen && iconClose) {
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }

    // Restore focus to trigger element
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  /**
   * Toggle menu open/closed
   */
  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /**
   * Handle click on menu toggle button
   */
  function handleToggleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  }

  /**
   * Handle clicks outside the menu to close it
   */
  function handleOutsideClick(e) {
    // Only process if menu is open
    if (!isOpen) return;

    // Check if click is outside menu and toggle button
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  }

  /**
   * Handle escape key to close menu
   */
  function handleEscapeKey(e) {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  }

  /**
   * Handle clicks on navigation links to close menu
   */
  function handleNavLinkClick(e) {
    // Close menu when a navigation link is clicked
    // This is useful for same-page anchor links
    const isAnchorLink = e.currentTarget.getAttribute('href') &&
                        e.currentTarget.getAttribute('href').startsWith('#');

    // Close menu for all links, but especially important for anchor links
    closeMenu();
  }

  /**
   * Initialize the mobile menu
   */
  function initMobileMenu() {
    // Get DOM references
    menuToggle = document.querySelector('[data-menu-toggle]');
    menu = document.querySelector('[data-menu]');

    // Exit if required elements don't exist
    if (!menuToggle || !menu) {
      console.warn('Mobile menu: Required elements not found');
      return;
    }

    // Get icon references
    iconOpen = menuToggle.querySelector('.menu-icon-open');
    iconClose = menuToggle.querySelector('.menu-icon-close');

    // Get all menu items (links and buttons inside menu)
    menuItems = menu.querySelectorAll('a, button');

    // Set initial state
    menu.classList.add('menu-hidden');
    menuToggle.setAttribute('aria-expanded', 'false');

    // Register event listeners

    // Toggle button click
    registerEventListener(menuToggle, 'click', handleToggleClick);

    // Close on outside click
    registerEventListener(document, 'click', handleOutsideClick);

    // Close on escape key
    registerEventListener(document, 'keydown', handleEscapeKey);

    // Focus trap
    registerEventListener(document, 'keydown', handleFocusTrap);

    // Close when clicking navigation links
    menuItems.forEach(function(item) {
      registerEventListener(item, 'click', handleNavLinkClick);
    });

    // Handle window resize - close menu if screen becomes large
    registerEventListener(window, 'resize', function() {
      // Close menu if viewport is large (lg breakpoint: 1024px)
      if (window.innerWidth >= 1024 && isOpen) {
        closeMenu();
      }
    });

    console.log('Mobile menu initialized successfully');
  }

  /**
   * Destroy the mobile menu and cleanup
   */
  function destroyMobileMenu() {
    // Close menu if open
    if (isOpen) {
      closeMenu();
    }

    // Remove all event listeners
    cleanup();

    // Reset state
    isOpen = false;
    lastFocusedElement = null;
    scrollPosition = 0;
    focusableElements = [];
    firstFocusableElement = null;
    lastFocusableElement = null;

    // Clear DOM references
    menuToggle = null;
    menu = null;
    iconOpen = null;
    iconClose = null;
    menuItems = null;

    console.log('Mobile menu destroyed');
  }

  // Export functions for global access
  window.MobileMenu = {
    init: initMobileMenu,
    destroy: destroyMobileMenu,
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu,
    isOpen: function() { return isOpen; }
  };

  // Auto-initialize on DOMContentLoaded if not already initialized
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof window.NataliaApp !== 'undefined' && !window.NataliaApp.mobileMenuInitialized) {
        initMobileMenu();
        window.NataliaApp.mobileMenuInitialized = true;
      }
    });
  }

})();
