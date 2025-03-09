// JavaScript for Dynamic Features

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Set Initial Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Project Details Modal
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTechnologies = document.getElementById('modal-technologies');

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

document.querySelectorAll('.view-project-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTechnologies.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
