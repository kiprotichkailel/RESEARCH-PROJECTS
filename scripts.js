// Function to smoothly scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Scroll-to-top functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    toggleScrollTopButton();
};

function toggleScrollTopButton() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Form submission (example placeholder functionality)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        form.reset();
    });
}
