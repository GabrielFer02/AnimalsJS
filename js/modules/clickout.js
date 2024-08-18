export default function clickOut(element, events) {
  const html = document.documentElement;
  const attribute = "data-event";

  if (!element.hasAttribute(attribute)) {
    events.forEach((actionEvent) => {
      html.addEventListener(actionEvent, verifyClickOut);
    })
    element.setAttribute(attribute, "");
  }

  function verifyClickOut(event) {
    if (!element.contains(event.target)) {
      events.forEach((actionEvent) => {
        html.removeEventListener(actionEvent, verifyClickOut);
      })
      element.removeAttribute(attribute);
      element.classList.remove("active");
    }
  }
}