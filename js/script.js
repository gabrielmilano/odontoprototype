// ========================================
// DRA. JENIFER DREHER - JAVASCRIPT
// ========================================

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (mobileNav && mobileNav.classList.contains('active') &&
        !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Fechar menu ao clicar em link
mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Header transparente no topo
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Scroll animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.service-card, .contact-item, .feature, .horarios-row, .cta-card').forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
