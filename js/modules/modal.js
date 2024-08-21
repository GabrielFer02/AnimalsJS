export default function initModal() {
  const buttomOpen = document.querySelector("[data-modal='open']");
  const buttomClose = document.querySelector("[data-modal='close']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (buttomOpen && buttomClose && containerModal) {
    function actionModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    buttomOpen.addEventListener("click", actionModal);
    buttomClose.addEventListener("click", actionModal);

    function clickOutModal(event) {
      if (event.target === this) {
        actionModal(event);
      }
    }

    containerModal.addEventListener("click", clickOutModal);
  }
}
