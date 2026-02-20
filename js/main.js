/* ============================================
   iDry Restorations - Main JavaScript
   Called by components.js after header/footer load.
   ============================================ */

/* --- Google Ads Conversion Tracking ---
   Uses event delegation on document so it works for both
   static page content and dynamically injected header/footer. */
(function () {
    'use strict';

    function reportCallConversion(url) {
        if (typeof gtag !== 'function') return;
        gtag('event', 'conversion', {
            'send_to': 'AW-351342156/XdPbCKun7_sbEMycxKcB',
            'value': 1.0,
            'currency': 'NZD',
            'event_callback': function () {
                if (url) window.location = url;
            }
        });
    }

    function reportServiceM8Conversion(url) {
        if (typeof gtag !== 'function') {
            if (url) window.open(url, '_blank');
            return;
        }
        gtag('event', 'conversion', {
            'send_to': 'AW-351342156/XdPbCKun7_sbEMycxKcB',
            'value': 1.0,
            'currency': 'NZD'
        });
        gtag('event', 'servicem8_booking_click', {
            'event_category': 'engagement',
            'event_label': url
        });
        if (url) window.open(url, '_blank');
    }

    document.addEventListener('click', function (e) {
        var link = e.target.closest('a');
        if (!link) return;
        var href = link.getAttribute('href') || '';

        // Click-to-call tracking
        if (href.indexOf('tel:') === 0) {
            reportCallConversion(href);
        }

        // ServiceM8 booking button tracking
        if (href.indexOf('servicem8.com') !== -1) {
            e.preventDefault();
            reportServiceM8Conversion(href);
        }
    });
})();

window.idryInit = function () {
    'use strict';

    // --- Mobile Menu Toggle ---
    var mobileToggle = document.getElementById('mobileToggle');
    var mainNav = document.getElementById('mainNav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
    }

    // --- Mobile Dropdown Toggle ---
    var dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(function (item) {
        var link = item.querySelector('.nav-link');
        if (!link) return;

        link.addEventListener('click', function (e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                item.classList.toggle('open');
            }
        });
    });

    // --- Header Scroll Effect ---
    var header = document.getElementById('header');

    function handleHeaderScroll() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // --- Sticky Call Bar ---
    var stickyCallBar = document.getElementById('stickyCallBar');

    function handleStickyBar() {
        if (!stickyCallBar) return;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY > 400) {
            stickyCallBar.classList.add('visible');
        } else {
            stickyCallBar.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleStickyBar, { passive: true });

    // --- FAQ Accordion ---
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var button = item.querySelector('.faq-question');
        if (!button) return;

        button.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            faqItems.forEach(function (faq) {
                faq.classList.remove('active');
                var btn = faq.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerOffset = header ? header.offsetHeight : 0;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (mainNav && mainNav.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // --- Close mobile menu on resize to desktop ---
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024 && mainNav && mainNav.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // --- Initial calls ---
    handleHeaderScroll();
    handleStickyBar();
};
