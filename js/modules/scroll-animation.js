import initAnimationNumbers from "./animation-numbers.js";

export default function sectionNavigation() {
  const section = document.querySelectorAll("[data-anime='scroll']");

  if (section.length) {
    function animaScroll() {
      section.forEach((item) => {
        if ((item.getBoundingClientRect().top - (window.innerHeight * 0.6)) < 0) {
          if (!item.classList.contains("ativo")) {
            item.classList.add("ativo");
            if (item.classList.contains("ativo") && item.classList.contains("numeros")) {
              initAnimationNumbers();
            }
          }
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll)
  }
}