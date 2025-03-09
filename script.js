// JavaScript for Portfolio Functionality

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = body.classList.contains('dark-mode') ? 'sun' : 'moon';
  themeToggle.innerHTML = <i class="fas fa-${icon} text-white"></i>;
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Initialize Theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun text-white"></i>';
}

// Project Details Modal
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTechnologies = document.getElementById('modalTechnologies');

const projects = [
  {
    title: "Customer Segmentation",
    description: "Used K-Means clustering to segment customers based on purchasing behavior.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
  },
  {
    title: "Movie Recommendation System",
    description: "Built a content-based recommendation system using cosine similarity.",
    technologies: ["Python", "Scikit-learn", "NLP", "Pandas"]
  },
  {
    title: "Exploratory Data Analysis",
    description: "Performed EDA on the Titanic dataset to uncover insights.",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"]
  }
];

// Add Event Listeners to Project Buttons
document.querySelectorAll('.view-project-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTechnologies.innerHTML = project.technologies.map(tech => <li>${tech}</li>).join('');
    projectModal.show();
  });
});
