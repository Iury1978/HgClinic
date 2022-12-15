const headerBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__close");

const closeBurger = (event) => {
  const target = event.target;
  if (target.closest(".burger__close") || event.code === "Escape") {
    burger.classList.remove("burger_active");
    window.removeEventListener("keydown", closeBurger);
    document.body.style.cssText = ``;
  }
};

const openBurger = () => {
  burger.classList.add("burger_active");
  window.addEventListener("keydown", closeBurger);
  document.body.style.cssText = `
     overflow: hidden;
      position: fixed;
    `;
};

headerBurger.addEventListener("click", openBurger);

burgerClose.addEventListener("click", closeBurger);
