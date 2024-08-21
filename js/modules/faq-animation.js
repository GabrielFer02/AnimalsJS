export default function activeFaq() {
  const listaFaq = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";

  if (listaFaq.length) {
    listaFaq[0].classList.add(activeClass);
    listaFaq[0].nextElementSibling.classList.add(activeClass);

    function ativaFaq() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    listaFaq.forEach((item) => {
      item.addEventListener("click", ativaFaq);
    });
  }
}
