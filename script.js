// Geopile Landing — Conversion Scripts

// ===== MODAL FORM =====
function openForm() {
    var modal = document.getElementById('modalForm');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (typeof fbq !== 'undefined') fbq('track', 'Lead');
    }
}

function closeForm() {
    var modal = document.getElementById('modalForm');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close on ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeForm();
});

// ===== Smooth Scroll (for nav links to sections) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target && !target.classList.contains('modal-overlay')) {
            e.preventDefault();
            const header = document.querySelector('.header');
            const headerH = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
    });
});

// ===== Form Submission Tracking =====
document.querySelectorAll('form[action="multumim.html"]').forEach(form => {
    form.addEventListener('submit', function() {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Geopile Landing Form',
                content_category: 'Foundation Inquiry',
                value: 1,
                currency: 'EUR'
            });
        }
    });
});

// ===== Scroll Animations =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.adv-card, .service-card, .step, .project-card, .app-item, .spec-row').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ===== Scroll Depth Tracking =====
window.addEventListener('scroll', () => {
    if (typeof fbq === 'undefined') return;
    const p = Math.round((window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (p >= 50 && !window._fbq50) { window._fbq50 = true; fbq('trackCustom', 'Scroll50'); }
    if (p >= 90 && !window._fbq90) { window._fbq90 = true; fbq('trackCustom', 'Scroll90'); }
});

// ===== Working Hours Badge =====
(function() {
    const now = new Date();
    const hour = now.getUTCHours() + 3;
    const day = now.getUTCDay();
    const isWorkday = day >= 1 && day <= 6;
    if (isWorkday && hour >= 8 && hour < 18) {
        const badge = document.querySelector('.hero-badge');
        if (badge) badge.innerHTML = '🟢 Disponibili acum — Sună și primești ofertă astăzi!';
    }
})();
