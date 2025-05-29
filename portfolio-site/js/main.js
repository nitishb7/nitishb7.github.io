// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Simple scroll reveal/fade-in effect
const revealElements = document.querySelectorAll('.project-card, .about-img, .about-content, .resume-section, .contact-form, .contact-info');
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Optional: Add fade-in CSS
// .visible { opacity: 1; transform: none; transition: opacity 0.7s, transform 0.7s; }
// .project-card, .about-img, .about-content, .resume-section, .contact-form, .contact-info { opacity: 0; transform: translateY(30px); }

// Portfolio filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}); 