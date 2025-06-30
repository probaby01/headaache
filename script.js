alert("hello there welcome to my profile")
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.body.prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

// Project card hover effects
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-5px)';
        project.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = '';
        project.style.boxShadow = '';
    });
});

// Skills animation
const skillCards = document.querySelectorAll('.tool-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const meter = card.querySelector('.skill-level');
        meter.style.transition = 'width 0.5s ease-out';
    });
});

// Form validation for contact form (if applicable)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add validation logic here
        alert('Thank you for your message!');
    });
}
