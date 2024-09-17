export default function initModal() {
  const buttomOpen = document.querySelector("[data-modal='open']");
  const buttomClose = document.querySelector("[data-modal='close']");
  const containerModal = document.querySelector("[data-modal='container']");

  function actionModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickOutModal(event) {
    if (event.target === this) {
      actionModal(event);
    }
  }

  if (buttomOpen && buttomClose && containerModal) {
    buttomOpen.addEventListener("click", actionModal);
    buttomClose.addEventListener("click", actionModal);
    containerModal.addEventListener("click", clickOutModal);
  }
}
