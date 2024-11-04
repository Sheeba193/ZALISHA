// JavaScript for sliding effect
const slider = document.querySelector('.testimonial-cards');
let currentIndex = 0;
const totalCards = document.querySelectorAll('.testimonial-card').length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalCards;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000); // Change slide every 3 seconds