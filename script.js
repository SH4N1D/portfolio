document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Apply saved theme from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }

    // Toggle Theme
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });

    // Add hover effect to project cards
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
