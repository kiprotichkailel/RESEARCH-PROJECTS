// Scroll to Section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Collapsible Sections
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((button) => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
