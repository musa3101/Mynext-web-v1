// --- 1. Reveal Animations ---
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => observer.observe(reveal));
    
    // --- 2. Header Entrance ---
    setTimeout(() => {
        const nav = document.getElementById('nav-container');
        const left = document.getElementById('nav-left');
        const center = document.getElementById('nav-logo');
        const right = document.getElementById('nav-right');

        if (nav) nav.classList.remove('opacity-0');
        if (left) left.classList.replace('-translate-x-[150%]', 'translate-x-0');
        if (center) center.classList.replace('-translate-y-[150%]', 'translate-y-0');
        if (right) right.classList.replace('translate-x-[150%]', 'translate-x-0');
    }, 800);

    // --- 3. Process Reveal: Bento Horizon ---
    const processTrigger = document.getElementById('process-trigger');
    const pItems = [
        document.getElementById('card-1'),
        document.getElementById('card-2'),
        document.getElementById('card-3')
    ];

    // Reveal cards once they enter the viewport
    const processObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            // Slide in from left, staggered via CSS transition-delay
            pItems.forEach((item) => {
                if (!item) return;
                item.classList.add('in-view');
            });
        } else {
            // Instantly reset (no transition) so replay is smooth
            pItems.forEach((item) => {
                if (!item) return;
                const delay = item.style.transitionDelay;
                item.style.transitionDelay = '0s';
                item.style.transition = 'none';
                item.classList.remove('in-view');
                // Re-enable transitions after the frame has painted
                setTimeout(() => {
                    item.style.transition = '';
                    item.style.transitionDelay = delay;
                }, 50);
            });
        }
    }, { threshold: 0.25 });

    if (processTrigger) processObserver.observe(processTrigger);

    // --- Scroll-driven sequential glow on process cards (looping) ---
    let glowTimeouts = [];
    let lastLitIndex = -1;
    let glowLoopActive = false;

    function clearGlow() {
        glowTimeouts.forEach(t => clearTimeout(t));
        glowTimeouts = [];
        pItems.forEach(c => c && c.classList.remove('card-lit'));
        lastLitIndex = -1;
        glowLoopActive = false;
    }

    function runGlowSequence() {
        if (glowLoopActive) return;
        glowLoopActive = true;
        pItems.forEach(c => c && c.classList.remove('card-lit'));
        lastLitIndex = -1;

        pItems.forEach((card, i) => {
            const t = setTimeout(() => {
                if (!card) return;
                // Remove previous
                if (i > 0 && pItems[i - 1]) pItems[i - 1].classList.remove('card-lit');
                card.classList.add('card-lit');
                lastLitIndex = i;
                // After last card, fade it out
                if (i === pItems.length - 1) {
                    const endT = setTimeout(() => {
                        card.classList.remove('card-lit');
                        glowLoopActive = false;
                    }, 900);
                    glowTimeouts.push(endT);
                }
            }, i * 900);
            glowTimeouts.push(t);
        });
    }

    // Trigger glow when process section is in view on scroll
    let glowObserverActive = false;
    const glowObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !glowLoopActive) {
            runGlowSequence();
        } else if (!entry.isIntersecting) {
            clearGlow();
        }
    }, { threshold: 0.3 });
    if (processTrigger) glowObserver.observe(processTrigger);

    // --- 5. Planes Modal (Coming Soon) ---
    const openPlanesModalBtn = document.getElementById('open-planes-modal');
    const planesModal = document.getElementById('planes-modal');
    const planesModalCard = document.getElementById('planes-modal-card');
    const closePlanesModalBtn = document.getElementById('close-planes-modal-btn');
    const closePlanesModalBg = document.getElementById('close-planes-modal-bg');

    function openModal() {
        if (!planesModal || !planesModalCard) return;
        planesModal.classList.remove('pointer-events-none', 'opacity-0');
        planesModalCard.classList.remove('scale-90');
        planesModalCard.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!planesModal || !planesModalCard) return;
        planesModal.classList.add('pointer-events-none', 'opacity-0');
        planesModalCard.classList.remove('scale-100');
        planesModalCard.classList.add('scale-90');
        document.body.style.overflow = '';
    }

    if (openPlanesModalBtn) {
        openPlanesModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    if (closePlanesModalBtn) closePlanesModalBtn.addEventListener('click', closeModal);
    if (closePlanesModalBg) closePlanesModalBg.addEventListener('click', closeModal);
});

// --- 4. Scroll Control ---
let lastScrollY = window.scrollY;
const nav = document.getElementById('nav-container');
const navL = document.getElementById('nav-left');
const navC = document.getElementById('nav-logo');
const navR = document.getElementById('nav-right');

function setNavAtTop() {
    nav.classList.remove('opacity-0', 'nav-compact');
    nav.classList.add('nav-at-top');
    // Show all elements fully
    navL.classList.replace('-translate-x-[150%]', 'translate-x-0');
    navC.classList.replace('-translate-y-[150%]', 'translate-y-0');
    navR.classList.replace('translate-x-[150%]', 'translate-x-0');
    navL.style.opacity = '1';
    navR.style.opacity = '1';
}

function setNavCompact() {
    // Show capsule but subtle — don't fly elements in, just fade the capsule
    nav.classList.remove('opacity-0', 'nav-at-top');
    nav.classList.add('nav-compact');
    // Keep menu items visible but slightly dimmed
    navL.classList.replace('-translate-x-[150%]', 'translate-x-0');
    navC.classList.replace('-translate-y-[150%]', 'translate-y-0');
    navR.classList.replace('translate-x-[150%]', 'translate-x-0');
}

function hideNav() {
    nav.classList.add('opacity-0');
    nav.classList.remove('nav-compact', 'nav-at-top');
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY < 80) {
        // At the top — full header
        setNavAtTop();
    } else if (isScrollingDown) {
        // Scrolling down — hide
        hideNav();
    } else {
        // Scrolling up mid-page — show compact, non-intrusive capsule
        setNavCompact();
    }

    lastScrollY = currentScrollY;
}, { passive: true });
