document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Theme Toggle with Local Storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Fade-in Animation on Scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    fadeElements.forEach(el => observer.observe(el));

    // Carousel Functionality
    let index = 0;
    const track = document.querySelector(".carousel-track");
    document.getElementById("prev").addEventListener("click", () => {
        index = Math.max(index - 1, 0);
        track.style.transform = `translateX(-${index * 320}px)`;
    });
    document.getElementById("next").addEventListener("click", () => {
        index = Math.min(index + 1, track.children.length - 1);
        track.style.transform = `translateX(-${index * 320}px)`;
    });
});
