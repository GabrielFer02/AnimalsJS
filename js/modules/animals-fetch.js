import initAnimationNumbers from "./animation-numbers.js";

export default function initAnimalsFetch() {
  function createAnimalRegion(animal) {
    const animalDiv = document.createElement("div");

    animalDiv.classList.add("numeros-animal");
    animalDiv.innerHTML = `<h3>${animal.animal}</h3>
    <span data-number>${animal.number}</span>`;

    return animalDiv;
  }

  async function fetchAnimalsInfo(url) {
    try {
      const response = await fetch(url);
      const animalsJson = await response.json();

      animalsJson.forEach((animal) => {
        const div = createAnimalRegion(animal);
        document.querySelector(".numeros-grid").appendChild(div);
      });
      initAnimationNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimalsInfo("../../animalsapi.json");
}
