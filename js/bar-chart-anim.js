document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".hi-bar");

  bars.forEach(bar => {
    const value = parseInt(bar.getAttribute("data-value")) || 0;
    const text = bar.querySelector(".hi-bar-text");

    // Si el valor < 10, aplica clase para texto fuera
    if (value < 10) bar.classList.add("low-value");

    // Animar ancho
    requestAnimationFrame(() => {
      bar.style.width = value + "%";
    });

    // Animar número
    let current = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    function animateNum(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const num = Math.floor(progress * value);
      text.textContent = num;

      if (progress < 1) {
        requestAnimationFrame(animateNum);
      } else {
        text.textContent = value; // asegurar número final exacto
      }
    }

    requestAnimationFrame(animateNum);
  });
});
