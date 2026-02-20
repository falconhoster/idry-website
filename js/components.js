/* ============================================
   iDry Restorations - Component Loader
   Embeds shared header & footer into any page.
   Works from file:// and any server.

   To edit header/footer markup, update the
   strings below. Reference copies are kept in
   components/header.html and components/footer.html.
   ============================================ */

(function () {
    'use strict';

    /* ---------- SVG icon shorthand ---------- */
    var iconPin = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
    var iconClock = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    var iconPhone = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
    var iconPhone18 = iconPhone.replace(/width="16"/g, 'width="18"').replace(/height="16"/g, 'height="18"');
    var iconPhone20 = iconPhone.replace(/width="16"/g, 'width="20"').replace(/height="16"/g, 'height="20"');
    var iconPhone22 = iconPhone.replace(/width="16"/g, 'width="22"').replace(/height="16"/g, 'height="22"');
    var iconFb = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
    var iconFb20 = iconFb.replace(/width="16"/g, 'width="20"').replace(/height="16"/g, 'height="20"');
    var iconIg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
    var iconIg20 = iconIg.replace(/width="16"/g, 'width="20"').replace(/height="16"/g, 'height="20"');
    var iconMail = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
    var iconChevron = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>';

    /* ---------- Resolve asset base path ---------- */
    var base = document.documentElement.getAttribute('data-root') || '';

    /* ---------- HEADER HTML ---------- */
    var headerHTML = ''
        + '<div class="top-bar">'
        +   '<div class="container top-bar-inner">'
        +     '<div class="top-bar-left">'
        +       '<span class="top-bar-item">' + iconPin + ' 180 Fred Taylor Drive, Whenuapai, Auckland</span>'
        +       '<span class="top-bar-item">' + iconClock + ' 24/7 Emergency Service</span>'
        +     '</div>'
        +     '<div class="top-bar-right">'
        +       '<a href="tel:0800452199" class="top-bar-phone">' + iconPhone + ' 0800 452 199</a>'
        +       '<div class="top-bar-social">'
        +         '<a href="https://www.facebook.com/idryrestorations" target="_blank" rel="noopener" aria-label="Facebook">' + iconFb + '</a>'
        +         '<a href="https://www.instagram.com/idryrestorations" target="_blank" rel="noopener" aria-label="Instagram">' + iconIg + '</a>'
        +       '</div>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<header class="header" id="header">'
        +   '<div class="container header-inner">'
        +     '<a href="/" class="logo">'
        +       '<img src="' + base + 'assets/images/logos/high-def-logo-01.png" alt="iDry Restorations Logo" width="200" height="62" loading="eager">'
        +     '</a>'
        +     '<nav class="nav" id="mainNav">'
        +       '<ul class="nav-list">'
        +         '<li><a href="/" class="nav-link">Home</a></li>'
        +         '<li class="has-dropdown">'
        +           '<a href="#services" class="nav-link">Services ' + iconChevron + '</a>'
        +           '<ul class="dropdown">'
        +             '<li><a href="/flood-restoration-auckland">Flood Restoration</a></li>'
        +             '<li><a href="/fire-restoration">Fire Restoration</a></li>'
        +             '<li><a href="/mould-remediation">Mould Remediation</a></li>'
        +             '<li><a href="/meth-contamination">Meth Contamination</a></li>'
        +             '<li><a href="/biohazard-cleaning">Biohazard Cleaning</a></li>'
        +           '</ul>'
        +         '</li>'
        +         '<li><a href="/areas-we-serve" class="nav-link">Areas We Serve</a></li>'
        +         '<li><a href="/about" class="nav-link">About</a></li>'
        +         '<li><a href="/blog" class="nav-link">Blog</a></li>'
        +         '<li><a href="/case-studies" class="nav-link">Case Studies</a></li>'
        +         '<li><a href="/contact" class="nav-link">Contact</a></li>'
        +       '</ul>'
        +     '</nav>'
        +     '<a href="tel:0800452199" class="header-cta">' + iconPhone18 + ' Call Now</a>'
        +     '<button class="mobile-toggle" id="mobileToggle" aria-label="Toggle menu">'
        +       '<span></span><span></span><span></span>'
        +     '</button>'
        +   '</div>'
        + '</header>';

    /* ---------- FOOTER HTML ---------- */
    var footerHTML = ''
        + '<footer class="footer">'
        +   '<div class="container">'
        +     '<div class="footer-grid">'
        +       '<div class="footer-col footer-about">'
        +         '<img src="' + base + 'assets/images/logos/Logo-white500.png" alt="iDry Restorations" width="180" height="56" loading="lazy" class="footer-logo">'
        +         '<p>Auckland\'s trusted restoration experts. We provide 24/7 emergency flood, fire, mould, and meth restoration services across the greater Auckland region.</p>'
        +         '<div class="footer-social">'
        +           '<a href="https://www.facebook.com/idryrestorations" target="_blank" rel="noopener" aria-label="Facebook">' + iconFb20 + '</a>'
        +           '<a href="https://www.instagram.com/idryrestorations" target="_blank" rel="noopener" aria-label="Instagram">' + iconIg20 + '</a>'
        +         '</div>'
        +       '</div>'
        +       '<div class="footer-col">'
        +         '<h4>Core Services</h4>'
        +         '<ul>'
        +           '<li><a href="/flood-restoration-auckland">Flood Restoration</a></li>'
        +           '<li><a href="/fire-restoration">Fire Restoration</a></li>'
        +           '<li><a href="/mould-remediation">Mould Remediation</a></li>'
        +           '<li><a href="/meth-contamination">Meth Contamination</a></li>'
        +           '<li><a href="/biohazard-cleaning">Biohazard Cleaning</a></li>'
        +         '</ul>'
        +       '</div>'
        +       '<div class="footer-col">'
        +         '<h4>Quick Links</h4>'
        +         '<ul>'
        +           '<li><a href="/about">About Us</a></li>'
        +           '<li><a href="/areas-we-serve">Areas We Serve</a></li>'
        +           '<li><a href="/blog">Blog</a></li>'
        +           '<li><a href="/case-studies">Case Studies</a></li>'
        +           '<li><a href="/contact">Contact</a></li>'
        +           '<li><a href="/privacy-policy">Privacy Policy</a></li>'
        +           '<li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>'
        +         '</ul>'
        +       '</div>'
        +       '<div class="footer-col footer-contact">'
        +         '<h4>Contact Us</h4>'
        +         '<ul>'
        +           '<li>' + iconPin + ' 180 Fred Taylor Drive, Whenuapai, Auckland 0610</li>'
        +           '<li>' + iconPhone + ' <a href="tel:0800452199">0800 452 199</a></li>'
        +           '<li>' + iconMail + ' <a href="mailto:info@idryrestorations.co.nz">info@idryrestorations.co.nz</a></li>'
        +         '</ul>'
        +       '</div>'
        +     '</div>'
        +     '<div class="footer-bottom">'
        +       '<p>&copy; 2019 &ndash; 2026 iDry Restorations. All Rights Reserved.</p>'
        +     '</div>'
        +   '</div>'
        + '</footer>'
        + '<div class="sticky-call-bar" id="stickyCallBar">'
        +   '<a href="tel:0800452199" class="sticky-call-link">'
        +     iconPhone22
        +     ' <span>Call Now &ndash; 0800 452 199</span>'
        +   '</a>'
        + '</div>';

    /* ---------- Inject into page ---------- */
    function inject() {
        var h = document.getElementById('site-header');
        var f = document.getElementById('site-footer');
        if (h) h.innerHTML = headerHTML;
        if (f) f.innerHTML = footerHTML;

        highlightCurrentNav();

        if (typeof window.idryInit === 'function') {
            window.idryInit();
        }
    }

    function highlightCurrentNav() {
        var path = window.location.pathname;
        var links = document.querySelectorAll('.nav-link');
        links.forEach(function (link) {
            var href = link.getAttribute('href');
            if (!href) return;
            link.classList.remove('active');
            if (href === path || (href === '/' && (path === '/' || path === '/index.html' || path.endsWith('/IdryNewWebsite/index.html') || path.endsWith('/IdryNewWebsite/')))) {
                link.classList.add('active');
            } else if (href !== '/' && href !== '#services' && path.startsWith(href + '/')) {
                link.classList.add('active');
            }
        });
    }

    /* Run after DOM is ready */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }

})();
