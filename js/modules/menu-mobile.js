import clickOut from "./clickout.js";

export default function initMenuMobile() {
  const menuButtom = document.querySelector("[data-menu='buttom']")
  const menuList = document.querySelector("[data-menu='list-items']")
  const events = ["click", "touchstart"];
  const className = "active";

  if (menuButtom) {
    function openMenu() {
      menuButtom.classList.add(className);
      menuList.classList.add(className);
      clickOut(menuList, events, () => {
        menuList.classList.remove(className);
        menuButtom.classList.remove(className);

      });
    }

    events.forEach((actionEvent) => {
      menuButtom.addEventListener(actionEvent, openMenu);
    })
  }
}