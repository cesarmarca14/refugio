const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let counter = 0;
const totalSlides = slides.length;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % totalSlides;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
