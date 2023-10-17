const slides = document.querySelector(".slide-container").querySelectorAll("img");
let current = 0;
const showSlide = (i) => {
  slides.forEach((slide) => {
    slide.classList.remove("show");
  });
  slides[i].classList.add("show");
};
showSlide(current);
setInterval(() => {
  current === slides.length - 1 ? (current = 0) : current++;
  showSlide(current);
}, 5000);