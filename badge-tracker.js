/**
 * Badge Scroll Tracker v2
 * Trackt ob Benutzer die Seite besucht UND bis zum Ende gescrollt hat
 * Speichert Fortschritt in localStorage
 */

(function() {
    'use strict';
    
    // Aktuellen Tag aus URL ermitteln (tag-1.html → 1)
    const path = window.location.pathname;
    const match = path.match(/tag-(\d+)\.html/);
    if (!match) return;
    
    const day = parseInt(match[1], 10);
    const storageKey = `tag${day}_progress`;
    let hasTriggered = false;
    let progress = { visited: false, scrolled: false };
    
    // Fortschritt laden
    function getProgress() {
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Konnte Fortschritt nicht laden:', e);
        }
        return { visited: false, scrolled: false };
    }
    
    // Fortschritt speichern
    function saveProgress() {
        try {
            localStorage.setItem(storageKey, JSON.stringify(progress));
            console.log(`[BadgeTracker] Tag ${day} Fortschritt gespeichert:`, progress);
        } catch (e) {
            console.warn('Konnte Fortschritt nicht speichern:', e);
        }
    }
    
    // Prüfen ob Benutzer weit genug gescrollt hat (95% der Seite)
    function hasScrolledToBottom() {
        // Verschiedene Methoden für Cross-Browser-Kompatibilität
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const scrollHeight = Math.max(
            document.body.scrollHeight || 0,
            document.documentElement.scrollHeight || 0,
            document.body.offsetHeight || 0,
            document.documentElement.offsetHeight || 0
        );
        const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
        
        const scrolled = scrollTop + clientHeight;
        const threshold = scrollHeight * 0.95;
        
        // Debug-Info
        if (window.location.hash === '#debug') {
            console.log(`[BadgeTracker] scrollTop: ${scrollTop}, clientHeight: ${clientHeight}, scrollHeight: ${scrollHeight}`);
            console.log(`[BadgeTracker] scrolled: ${scrolled}, threshold: ${threshold}, reached: ${scrolled >= threshold}`);
        }
        
        return scrolled >= threshold;
    }
    
    // Visuelles Feedback anzeigen
    function showScrollComplete() {
        if (document.getElementById('scroll-complete-toast')) return;
        
        const toast = document.createElement('div');
        toast.id = 'scroll-complete-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.innerHTML = `
            <div style="
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 15%), 0 10px 10px -5px rgb(0 0 0 / 10%);
                z-index: 9999;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                max-width: 90vw;
                text-align: center;
            ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Super! Du hast alles gelesen.<br>Jetzt zurück zur Übersicht und Badge sammeln!</span>
            </div>
        `;
        
        // Animation CSS
        if (!document.getElementById('scroll-anim-styles')) {
            const style = document.createElement('style');
            style.id = 'scroll-anim-styles';
            style.textContent = `
                @keyframes slideUp {
                    from { transform: translateX(-50%) translateY(100%); opacity: 0; }
                    to { transform: translateX(-50%) translateY(0); opacity: 1; }
                }
                @keyframes slideDown {
                    from { transform: translateX(-50%) translateY(0); opacity: 1; }
                    to { transform: translateX(-50%) translateY(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(toast);
        
        // Nach 5 Sekunden ausblenden
        setTimeout(() => {
            const t = document.getElementById('scroll-complete-toast');
            if (t) {
                t.style.animation = 'slideDown 0.3s ease forwards';
                setTimeout(() => t.remove(), 300);
            }
        }, 5000);
    }
    
    // Scroll-Check durchführen
    function checkScroll() {
        if (hasTriggered) return;
        
        if (hasScrolledToBottom()) {
            hasTriggered = true;
            
            if (!progress.scrolled) {
                progress.scrolled = true;
                saveProgress();
                showScrollComplete();
            }
            
            // Listener entfernen
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('touchmove', onScroll);
            window.removeEventListener('resize', onScroll);
        }
    }
    
    // Throttled scroll handler
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                checkScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Initialisierung
    function init() {
        progress = getProgress();
        
        // Als besucht markieren
        if (!progress.visited) {
            progress.visited = true;
            saveProgress();
        }
        
        // Event Listener
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('touchmove', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        
        // Initial check (falls Seite kurz ist oder bereits gescrollt)
        setTimeout(checkScroll, 100);
        
        // Debug-Info in Konsole
        console.log(`[BadgeTracker] Tag ${day} initialisiert. Status:`, progress);
    }
    
    // Starten
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
