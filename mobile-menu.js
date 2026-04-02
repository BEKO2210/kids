/**
 * Mobile Menu Toggle
 * Funktioniert auf allen Seiten mit .navbar-menu-btn und .navbar-nav
 */

(function() {
    'use strict';
    
    const menuBtn = document.querySelector('.navbar-menu-btn');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (!menuBtn || !navbarNav) return;
    
    // Hamburger Icon
    const hamburgerIcon = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    `;
    
    // X Icon (Close)
    const closeIcon = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    `;
    
    // Toggle Funktion
    function toggleMenu() {
        const isOpen = navbarNav.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menuBtn.innerHTML = isOpen ? closeIcon : hamburgerIcon;
    }
    
    // Menü schließen
    function closeMenu() {
        navbarNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = hamburgerIcon;
    }
    
    // Klick auf Menü-Button
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Menü schließen wenn auf Link geklickt wird
    navbarNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
    
    // Menü schließen wenn außerhalb geklickt wird
    document.addEventListener('click', function(e) {
        if (!navbarNav.contains(e.target) && !menuBtn.contains(e.target) && navbarNav.classList.contains('is-open')) {
            closeMenu();
        }
    });
    
    // ESC-Taste schließt Menü
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbarNav.classList.contains('is-open')) {
            closeMenu();
        }
    });
    
    // Initialisiere Icon
    menuBtn.innerHTML = hamburgerIcon;
})();
