/**
 * Badge Scroll Tracker
 * Trackt ob Benutzer die Seite besucht UND bis zum Ende gescrollt hat
 * Speichert Fortschritt in localStorage
 */

(function() {
    'use strict';
    
    // Aktuellen Tag aus URL ermitteln (tag-1.html → 1)
    const path = window.location.pathname;
    const match = path.match(/tag-(\d+)\.html/);
    if (!match) return; // Nicht auf einer Tag-Seite
    
    const day = parseInt(match[1], 10);
    const storageKey = `tag${day}_progress`;
    
    // Fortschritt laden oder initialisieren
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
    function saveProgress(progress) {
        try {
            localStorage.setItem(storageKey, JSON.stringify(progress));
        } catch (e) {
            console.warn('Konnte Fortschritt nicht speichern:', e);
        }
    }
    
    // Prüfen ob Benutzer weit genug gescrollt hat (95% der Seite)
    function hasScrolledToBottom() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        
        // 95% der Seite gesehen
        return scrollTop + clientHeight >= scrollHeight * 0.95;
    }
    
    // Visuelles Feedback anzeigen
    function showScrollComplete() {
        // Prüfen ob bereits eine Benachrichtigung existiert
        if (document.getElementById('scroll-complete-toast')) return;
        
        const toast = document.createElement('div');
        toast.id = 'scroll-complete-toast';
        toast.innerHTML = `
            <div style="
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: var(--success, #10b981);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%);
                z-index: 1000;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: slideUp 0.3s ease;
            ">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Super! Du hast alles gelesen. Badge kann jetzt gesammelt werden!
            </div>
        `;
        
        // Animation CSS hinzufügen falls nicht vorhanden
        if (!document.getElementById('scroll-anim-styles')) {
            const style = document.createElement('style');
            style.id = 'scroll-anim-styles';
            style.textContent = `
                @keyframes slideUp {
                    from { transform: translateX(-50%) translateY(100%); opacity: 0; }
                    to { transform: translateX(-50%) translateY(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(toast);
        
        // Nach 4 Sekunden ausblenden
        setTimeout(() => {
            toast.style.animation = 'slideUp 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
    
    // Initialisierung
    function init() {
        const progress = getProgress();
        
        // Als besucht markieren
        if (!progress.visited) {
            progress.visited = true;
            saveProgress(progress);
        }
        
        // Scroll-Listener
        let hasTriggered = false;
        
        function checkScroll() {
            if (hasTriggered) return;
            
            if (hasScrolledToBottom()) {
                hasTriggered = true;
                
                if (!progress.scrolled) {
                    progress.scrolled = true;
                    saveProgress(progress);
                    showScrollComplete();
                }
                
                // Listener entfernen, nicht mehr benötigt
                window.removeEventListener('scroll', checkScroll);
            }
        }
        
        // Throttled scroll listener
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    checkScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Initial check (falls Seite kurz ist)
        checkScroll();
    }
    
    // Starten wenn DOM bereit
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
