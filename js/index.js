"use strict";

const sliderCont = document.querySelector(".reviews-cont");
const slides = document.querySelectorAll(".slider");
const dotContainer = document.querySelector(".dots");
let curSlide = 0;
let maxSlide = slides.length;
// sliderCont.style.overflow = "visible";
// sliderCont.style.maxWidth = "100rem";
// console.log(slides);

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
const activeDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach(dot => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activeDot(0);

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

let touchStartX = null;
let touchEndX = null;

sliderCont.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
});

sliderCont.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX !== null && touchEndX !== null) {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
      // A swipe to the right has occurred
      //   console.log("Swipe right detected");
      prevSlide();
    }

    // Reset the values for the next swipe
    touchStartX = null;
    touchEndX = null;
  }
}

let touchStartX2 = null;
let touchEndX2 = null;

sliderCont.addEventListener("touchstart", e => {
  touchStartX2 = e.touches[0].clientX;
});

sliderCont.addEventListener("touchend", e => {
  touchEndX2 = e.changedTouches[0].clientX;
  handleSwipe2();
});

function handleSwipe2() {
  if (touchStartX2 !== null && touchEndX2 !== null) {
    const swipeDistance = touchStartX2 - touchEndX2;
    if (swipeDistance > 50) {
      // A swipe to the left has occurred
      //   console.log("Swipe left detected");
      nextSlide();
    }

    // Reset the values for the next swipe
    touchStartX2 = null;
    touchEndX2 = null;
  }
}

const mobileNav = document.querySelector(".nav-mb ");
const mobileNavCont = document.querySelector(".mobile-nav ");

let hamBtn = document.querySelector(".hamburger-btn");
hamBtn.addEventListener("click", function () {
  if (
    mobileNavCont.classList.contains("hide") &&
    mobileNav.classList.contains("hide")
  ) {
    hamBtn.src = "../images/icon-close.svg";
  } else {
    hamBtn.src = "../images/icon-hamburger.svg";
  }
  mobileNavCont.classList.toggle("hide");

  mobileNav.classList.toggle("hide");
});
