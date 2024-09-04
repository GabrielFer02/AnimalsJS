import initAnimationNumbers from "./animation-numbers.js";

export default function initAnimalsFetch() {
  async function fetchAnimalsInfo(url) {
    const response = await fetch(url);
    const animalsJson = await response.json();
    console.log(animalsJson);
    animalsJson.forEach((animal) => {
      const div = createAnimalRegion(animal);
      document.querySelector(".numeros-grid").appendChild(div);
    });
    initAnimationNumbers();
  }

  function createAnimalRegion(animal) {
    const animalDiv = document.createElement("div");

    animalDiv.classList.add("numeros-animal");
    animalDiv.innerHTML = `<h3>${animal.animal}</h3>
    <span data-number>${animal.number}</span>`;

    return animalDiv;
  }

  fetchAnimalsInfo("../../animalsapi.json");
}
