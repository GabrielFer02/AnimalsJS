import clickOut from "./clickout.js";

export default function dropDownMenuAction() {
  const menuList = document.querySelectorAll("[data-dropdown]");

function handleClick(event) {
  event.preventDefault();
  this.classList.add("active");
  clickOut(this);
}

const actions = ["click", "touchstart"];
menuList.forEach((menu) => {
  actions.forEach((action) => {
    menu.addEventListener(action, handleClick);
  })
})
}

