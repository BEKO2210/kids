/* ========================================
   KI-Meisterkurs - Interactivity
   ======================================== */

const BADGES = {
    1: { icon: '🥉', name: 'KI-Entdecker' },
    2: { icon: '🥈', name: 'Prompt-Meister' },
    3: { icon: '🎨', name: 'Kreativ-Genie' },
    4: { icon: '⚙️', name: 'Problemlöser' },
    5: { icon: '🥇', name: 'KI-Experte' }
};

let unlockedBadges = new Set();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    loadTheme();
    updateProgressBar();
    generateStars();
});

// Theme Management
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('ki-meisterkurs-theme', themeName);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.theme-btn.${themeName}`).classList.add('active');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('ki-meisterkurs-theme') || 'space';
    setTheme(savedTheme);
}

// Progress Management
function loadProgress() {
    const saved = localStorage.getItem('ki-meisterkurs-badges');
    if (saved) {
        unlockedBadges = new Set(JSON.parse(saved));
        unlockedBadges.forEach(day => {
            updateBadgeVisuals(day);
        });
    }
}

function saveProgress() {
    localStorage.setItem('ki-meisterkurs-badges', JSON.stringify([...unlockedBadges]));
}

function collectBadge(day) {
    if (unlockedBadges.has(day)) return;
    
    unlockedBadges.add(day);
    saveProgress();
    updateBadgeVisuals(day);
    updateProgressBar();
    
    // Visual feedback
    const card = document.querySelector(`.day-card[data-day="${day}"]`);
    card.style.transform = 'scale(1.05)';
    setTimeout(() => card.style.transform = '', 300);
    
    // Confetti for every badge
    createConfetti();
    
    // Special celebration for all badges
    if (unlockedBadges.size === 5) {
        setTimeout(() => {
            createConfetti(100);
            showCompletionMessage();
        }, 500);
    }
}

function updateBadgeVisuals(day) {
    const badgeEl = document.getElementById(`badge-${day}`);
    if (badgeEl) {
        badgeEl.textContent = BADGES[day].icon;
    }
    
    const card = document.querySelector(`.day-card[data-day="${day}"]`);
    if (card) {
        card.classList.add('unlocked');
    }
    
    const btn = card?.querySelector('.collect-btn');
    if (btn) {
        btn.disabled = true;
        btn.textContent = `${BADGES[day].icon} ${BADGES[day].name} freigeschaltet!`;
    }
    
    // Update hero badges
    const heroBadges = document.querySelectorAll('.badge-mini');
    if (heroBadges[day - 1]) {
        heroBadges[day - 1].classList.add('unlocked');
    }
}

function updateProgressBar() {
    const progress = (unlockedBadges.size / 5) * 100;
    const bar = document.getElementById('progressBar');
    const text = document.getElementById('progressText');
    
    bar.style.width = `${progress}%`;
    text.textContent = `${unlockedBadges.size} / 5 Badges`;
    
    if (unlockedBadges.size === 5) {
        text.textContent = '🏆 Alle Badges gesammelt!';
        bar.style.background = 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #ef4444 100%)';
    }
}

function toggleDay(day) {
    const details = document.getElementById(`details-${day}`);
    const isOpen = details.classList.contains('open');
    
    // Close all others
    document.querySelectorAll('.day-details').forEach(el => {
        el.classList.remove('open');
    });
    
    // Open clicked if it was closed
    if (!isOpen) {
        details.classList.add('open');
    }
}

function scrollToCourse() {
    document.getElementById('course').scrollIntoView({ behavior: 'smooth' });
}

// Confetti Effect
function createConfetti(amount = 30) {
    const colors = ['#6366f1', '#f472b6', '#22d3ee', '#fbbf24', '#4ade80', '#ef4444'];
    const container = document.getElementById('confetti');
    
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        piece.style.width = (Math.random() * 10 + 5) + 'px';
        piece.style.height = piece.style.width;
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        piece.style.opacity = Math.random();
        
        container.appendChild(piece);
        
        setTimeout(() => piece.remove(), 4000);
    }
}

function showCompletionMessage() {
    const msg = document.createElement('div');
    msg.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #6366f1 0%, #f472b6 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 20px;
            font-size: 1.5rem;
            font-weight: 700;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: popIn 0.5s ease;
        ">
            🎉 Herzlichen Glückwunsch! 🎉<br>
            <span style="font-size: 1rem; font-weight: 400;">
                Du bist jetzt offizieller KI-Experte!
            </span>
        </div>
    `;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
}

// Starfield Generation
function generateStars() {
    const starsContainer = document.getElementById('stars');
    // Already has base stars in CSS, this adds dynamic twinkling stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        star.style.animationDelay = Math.random() * 5 + 's';
        starsContainer.appendChild(star);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '5') {
        const day = parseInt(e.key);
        const card = document.querySelector(`.day-card[data-day="${day}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            toggleDay(day);
        }
    }
});
