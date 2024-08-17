export default function clickOut(element) {
  const html = document.documentElement;
  const attribute = "data-event";
  const actions = ["click", "touchstart"];
  
  if (!element.hasAttribute(attribute)) {
    actions.forEach((action) => {
      html.addEventListener(action, verifyClickOut);
    })
    element.setAttribute(attribute, "");
  }

  function verifyClickOut(event) {
    if (!element.contains(event.target)) {
      actions.forEach((action) => {
        html.removeEventListener(action, verifyClickOut);
      })
      element.removeAttribute(attribute);
      element.classList.remove("active");
    }
  }
}