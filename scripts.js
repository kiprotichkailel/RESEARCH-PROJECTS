// script.js

// Smooth Scroll Function for Navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Optional: Add Active Link Highlighting on Scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', function () {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Optional: Scroll to Top Button (Appears after scrolling down)
window.onscroll = function () {
    let scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
