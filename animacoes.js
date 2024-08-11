function activeList() {
  const listaAnimais = document.querySelectorAll(".js-listaAnimais li")
  const listaDescricao = document.querySelectorAll(".js-listaDescricao section");

  if (listaAnimais.length && listaDescricao.length) {
    listaDescricao[0].classList.add("ativo");

    function ativaDescricao(index) {
      listaDescricao.forEach((item) => {
        item.classList.remove("ativo");
      });

      listaDescricao[index].classList.add("ativo");
    }

    listaAnimais.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativaDescricao(index);
      })
    });
  }
}

activeList();


function activeFaq() {
  const listaFaq = document.querySelectorAll(".js-faq dt")
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

activeFaq();

function scroll() {
  const internalLink = document.querySelectorAll("a[href^='#']");

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

scroll();

function sectionNavigation() {
  const section = document.querySelectorAll(".js-scroll");

  if (section.length) {
    function animaScroll() {
      section.forEach((item) => {
        if ((item.getBoundingClientRect().top - (window.innerHeight * 0.6)) < 0) {
          item.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll)
  }
}

sectionNavigation();
