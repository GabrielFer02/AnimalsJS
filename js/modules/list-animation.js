export default function activeList() {
  const listaAnimais = document.querySelectorAll("[data-tab='menu'] li")
  const listaDescricao = document.querySelectorAll("[data-tab='listaDescricao'] section");

  if (listaAnimais.length && listaDescricao.length) {
    listaDescricao[0].classList.add("ativo");

    function ativaDescricao(index) {
      listaDescricao.forEach((item) => {
        item.classList.remove("ativo");
      });
      
      listaDescricao[index].classList.add("ativo", listaDescricao[index].dataset.anime);
    }

    listaAnimais.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativaDescricao(index);
      })
    });
  }
}