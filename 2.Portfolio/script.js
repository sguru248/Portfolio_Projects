////////////////////////////////////////////////////////////////////////////

////_____Building a slider Component____()_____/////

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let curSlide = 0;
const maxSlide = slides.length;

const dotContainer = document.querySelector(".dots");

//__Creating Function__//
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide); //currenSlide=1 : (-100%,0%,100%,200%)
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
//Create Dots
const createDots = function () {
  slides.forEach(function (s, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot " data-slide="${i}"></button> `
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const init = function () {
  //Dots
  createDots();
  //ActivateDots
  activateDot(0);
  //beginning
  goToSlide(0); //(0%,100%,200%,300%)
};

//__Initiate__//
init();

//__Event Handler__//
//Next Slide
btnRight.addEventListener("click", nextSlide);
//Previous Slide
btnLeft.addEventListener("click", prevSlide);

//Implimenting Event for Key Button
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

//(Using Event Delegation)Implimenting Dots Slide

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot"));
  const { slide } = e.target.dataset; // Here We are destructuring ( we are reading from the object so we use{})

  goToSlide(slide);
  activateDot(slide);
});

//////////////////////////////////////////////////////

//Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

////////////////////////////////////////////////////////////////////////////
