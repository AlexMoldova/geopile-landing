// Geopile Landing — Conversion Scripts (concria style)

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== Form Submission Tracking =====
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', function() {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Geopile Landing Form',
                content_category: 'Foundation Inquiry',
                value: 1,
                currency: 'EUR'
            });
        }
    });
}

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
    const hour = now.getUTCHours() + 3; // Romania is UTC+3
    const day = now.getUTCDay();
    const isWorkday = day >= 1 && day <= 6;
    if (isWorkday && hour >= 8 && hour < 18) {
        const badge = document.querySelector('.hero-badge');
        if (badge) badge.innerHTML = '🟢 Disponibili acum — Sună și primești ofertă astăzi!';
    }
})();
