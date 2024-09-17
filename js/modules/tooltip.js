export default function actionTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  if (tooltips.length) {
    function createTooltip(element) {
      const tooltipBox = document.createElement("div");
      const textElement = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = textElement;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    const mouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 10}px`;
        this.tooltipBox.style.left = `${event.pageX + 10}px`;
      },
    };

    const mouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", mouseLeave);
        this.element.removeEventListener("mousemove", mouseMove);
      },
    };

    function moveOnMouse(event) {
      const tooltipBox = createTooltip(this);
      tooltipBox.style.top = event.pageY + "px";
      tooltipBox.style.left = event.pageX + "px";

      mouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", mouseMove);

      mouseLeave.tooltipBox = tooltipBox;
      mouseLeave.element = this;
      this.addEventListener("mouseleave", mouseLeave);
    }

    tooltips.forEach((item) => {
      item.addEventListener("mouseover", moveOnMouse);
    });
  }
}
