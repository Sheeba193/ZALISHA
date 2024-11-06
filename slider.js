// let currentSlide = 0;
// const slides = document.querySelectorAll('.section1, .section2, .section3, .minor-section2');
// const totalSlides = slides.length;

// // Function to show slide based on index
// function showSlide(index) {
//     currentSlide = (index + totalSlides) % totalSlides;
//     const offset = -currentSlide * 100;
//     document.querySelector('.slider-container').style.transform = `translateY(${offset}vh)`;
// }

// // Add event listener for scroll event
// window.addEventListener('wheel', (event) => {
//     if (event.deltaY > 0) {
//         // Scroll down
//         showSlide(currentSlide + 1);
//     } else {
//         // Scroll up
//         showSlide(currentSlide - 1);
//     }
// });
