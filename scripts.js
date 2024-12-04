// Select all collapsible buttons
const collapsibles = document.querySelectorAll(".collapsible");

// Add click event listener to toggle visibility
collapsibles.forEach((button) => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
