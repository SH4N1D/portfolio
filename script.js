// JavaScript for Project Carousel
const carousel = document.querySelector('.projects-carousel');
let isDragging = false, startX, startScrollLeft;

// Mouse events for dragging
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Touch events for mobile devices
carousel.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
  startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  carousel.scrollLeft = startScrollLeft - (e.touches[0].pageX - startX);
});

carousel.addEventListener('touchend', () => {
  isDragging = false;
});
