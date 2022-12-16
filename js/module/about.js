const show = (aboutBtnMore, aboutDescriptionMore) => {
  if (aboutBtnMore.classList.contains("collapsing")) return;

  aboutDescriptionMore.style.display = "block";
  // записываем высоту aboutDescriptionMore
  const height = aboutDescriptionMore.offsetHeight;
  // обнуляем высоту(для анимации)
  aboutDescriptionMore.style.height = 0;
  // что бы не вываливался  блок  прописываем скрытие
  aboutDescriptionMore.style.overflow = "hidden";
  // дописываем стиль
  aboutDescriptionMore.style.transition = "height 0.3s ease-in-out";
  //  это нужно для нбольшого сброса внутри расчетов браузера
  aboutDescriptionMore.offsetHeight;
  //  и прописываем полученную высоту
  aboutDescriptionMore.style.height = `${height}px`;

  aboutBtnMore.classList.add("collapsing");

  aboutBtnMore.style.display = "none";
  setTimeout(() => {
    aboutBtnMore.classList.remove("collapsing");
  }, 300);
};

const hide = (aboutBtnMore, aboutDescriptionMore) => {
  // проверуа насчет каких то коллизий
  if (aboutBtnMore.classList.contains("collapsing")) return;

  aboutDescriptionMore.style.height = `${aboutDescriptionMore.offsetHeight}px`;
  aboutDescriptionMore.offsetHeight;
  aboutDescriptionMore.style.height = 0;
  aboutDescriptionMore.style.overflow = "hidden";
  aboutDescriptionMore.style.transition = "height 0.3s ease-in-out";
  aboutBtnMore.classList.add("collapsing");

  setTimeout(() => {
    aboutBtnMore.style.display = "block";
    aboutDescriptionMore.style.display = "";
    aboutDescriptionMore.style.height = "";
    aboutDescriptionMore.style.overflow = "";
    aboutDescriptionMore.style.transition = "";
    aboutDescriptionMore.offsetHeight;
    aboutBtnMore.classList.remove("collapsing");
  }, 300);
};

function accodrion() {
  const aboutBtnMore = document.querySelector(".about__btn-more");
  const aboutDescriptionMore = document.querySelector(
    ".about__description-more"
  );
  const aboutBtnMoreHide = document.querySelector(".about__btn-more-hide");

  aboutBtnMore.addEventListener("click", () => {
    // aboutDescriptionMore.style.display = "block";
    // aboutBtnMore.style.display = "none";
    show(aboutBtnMore, aboutDescriptionMore);
  });

  aboutBtnMoreHide.addEventListener("click", () => {
    // aboutDescriptionMore.style.display = "none";
    // aboutBtnMore.style.display = "block";
    hide(aboutBtnMore, aboutDescriptionMore);
  });
}
accodrion();
