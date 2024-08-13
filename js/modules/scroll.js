export default function scroll() {
  const internalLink = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

  if (internalLink.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const section = document.querySelector(event.currentTarget.getAttribute("href"));
      // section.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // })
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }

    internalLink.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}