const headerBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__close");

const closeBurger = (event) => {
  const target = event.target;
  if (target.closest(".burger__close") || event.code === "Escape") {
    burger.classList.remove("burger_active");
  }
};

const openBurger = () => {
  burger.classList.add("burger_active");
  window.addEventListener("keydown", closeBurger);
};

headerBurger.addEventListener("click", openBurger);

burgerClose.addEventListener("click", closeBurger);
