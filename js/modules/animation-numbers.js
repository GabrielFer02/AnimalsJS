export default function initAnimationNumbers() {
  function animationNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    if (numbers.length) {
      numbers.forEach((number) => {
        const value = +number.innerText;
        const increment = Math.floor(value / 100);

        let count = 0;
        const timer = setInterval(() => {
          count = count + increment;
          number.innerText = count;
          if (count > value) {
            number.innerText = value;
            clearInterval(timer);
          }
        }, 10)
      })
    }
  }

  function mutationAction(mutationEvent) {
    if (mutationEvent[0].target.classList.contains("ativo")) {
      animationNumbers();
    }
  }

  const section = document.querySelector("section.numeros");
  const mutation = new MutationObserver(mutationAction);

  mutation.observe(section, { attributes: true });
}

