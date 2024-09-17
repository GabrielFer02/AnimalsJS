export default function sectionNavigation() {
  const section = document.querySelectorAll("[data-anime='scroll']");

  function animaScroll() {
    section.forEach((item) => {
      if (item.getBoundingClientRect().top - window.innerHeight * 0.6 < 0) {
        if (!item.classList.contains("ativo")) {
          item.classList.add("ativo");
        }
      }
    });
  }

  if (section.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
