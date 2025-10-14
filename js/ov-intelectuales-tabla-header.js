document.addEventListener("DOMContentLoaded", () => {
  const accordionBody = document.querySelector(".accordion-body");
  if (!accordionBody) return;

  // Función principal
  function updateTbRowHeads() {
    const allRowHeads = Array.from(accordionBody.querySelectorAll(".tb-row-head"));
    const openAccordions = Array.from(accordionBody.querySelectorAll(".accordion-child-body.open"));

    console.log(`[accordion debug] tb-row-head: ${allRowHeads.length}, open accordions: ${openAccordions.length}`);

    // Oculta todos los headers
    allRowHeads.forEach(h => {
      h.classList.remove("ct-visible-grid");
      h.classList.add("ct-hidden");
      h.style.display = ""; // limpiar posibles inline styles previos
    });

    // Muestra solo el primer tb-row-head dentro del primer accordion abierto
    if (openAccordions.length > 0) {
      const firstOpen = openAccordions[0];
      const firstHead = firstOpen.querySelector(".tb-row-head");
      if (firstHead) {
        firstHead.classList.remove("ct-hidden");
        firstHead.classList.add("ct-visible-grid");
        firstHead.style.display = "grid";
      }
    }
  }

  // Ejecución inicial
  updateTbRowHeads();

  // Recalcular cuando se hace click en cualquier header
  accordionBody.querySelectorAll(".accordion-child-header").forEach(btn => {
    btn.addEventListener("click", () => {
      setTimeout(updateTbRowHeads, 0);
    });
  });

  // Observa cambios en clases o estructura del acordeón
  const observer = new MutationObserver(mutations => {
    const needsUpdate = mutations.some(m =>
      m.type === "attributes" && m.attributeName === "class" ||
      m.type === "childList"
    );
    if (needsUpdate) {
      clearTimeout(window.__accordion_update_timeout);
      window.__accordion_update_timeout = setTimeout(updateTbRowHeads, 20);
    }
  });

  observer.observe(accordionBody, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["class"]
  });
});
