import clickOut from "./clickout.js";

export default function dropDownMenuAction() {
  const menuList = document.querySelectorAll("[data-dropdown]");
  const events = ["click", "touchstart"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    clickOut(this, events);
  }

  menuList.forEach((menu) => {
    events.forEach((actionEvent) => {
      menu.addEventListener(actionEvent, handleClick);
    })
  })
}

