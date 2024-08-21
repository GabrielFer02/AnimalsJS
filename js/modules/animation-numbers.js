export default function initAnimationNumbers() {
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
