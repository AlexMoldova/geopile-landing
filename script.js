// Geopile Landing Page - Conversion Scripts

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = window.innerWidth <= 768 ? 0 : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== Form Submission with Conversion Tracking =====
const leadForm = document.getElementById('leadForm');

if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        // Track Lead conversion
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Geopile Landing Form',
                content_category: 'Foundation Inquiry',
                value: 1,
                currency: 'EUR'
            });
        }
        
        // The form will redirect to multumim.html naturally
        // because of action="multumim.html" method="GET"
    });
}

// ===== Scroll-triggered animations =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to cards
document.querySelectorAll('.service-card, .why-item, .step, .project-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Phone input formatting =====
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Romanian phone formatting
        if (value.startsWith('40')) {
            // International format
            value = '+' + value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7, 10);
        } else if (value.startsWith('07') || value.startsWith('00')) {
            value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7, 10);
        }
        
        e.target.value = value;
    });
}

// ===== Show sticky CTA after scrolling =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Track scroll depth for Facebook
    if (typeof fbq !== 'undefined') {
        const scrollPercent = Math.round((currentScroll / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent >= 50 && !window._fbqScroll50) {
            window._fbqScroll50 = true;
            fbq('trackCustom', 'Scroll50');
        }
        if (scrollPercent >= 90 && !window._fbqScroll90) {
            window._fbqScroll90 = true;
            fbq('trackCustom', 'Scroll90');
        }
    }
    
    lastScroll = currentScroll;
});

// ===== Time-based urgency banner =====
(function() {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() >= 1 && now.getDay() <= 6;
    
    // If within working hours, show "available now" indicator
    if (isWeekday && hour >= 8 && hour < 18) {
        const heroBadge = document.querySelector('.hero-badge');
        if (heroBadge) {
            heroBadge.innerHTML = '🟢 Disponibili acum — Sună și primești ofertă astăzi!';
        }
    }
})();
