document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date("2025-03-01T00:00:00"); // Data inicial
  const counterElement = document.getElementById("counter");

  function updateCounter() {
    const now = new Date(); // Data atual
    const diff = now - startDate; // Diferença em milissegundos

    // Conversões de tempo
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

    // Atualiza o contador no HTML
    counterElement.innerHTML = `
      <span>${months}</span>
      <span>${days}</span>
      <span>${hours}</span>
      <span>${minutes}</span>
      <span>${seconds}</span>
    `;
  }

  // Atualiza o contador a cada segundo
  setInterval(updateCounter, 1000);
  updateCounter(); // Atualiza imediatamente ao carregar
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // Posição vertical aleatória
    heart.style.top = Math.random() * 0 + "vh";

    // Opacidade aleatória
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    // Tamanho aleatório
    const size = Math.random() * 40 + 40 + "px";
    heart.style.width = size;
    heart.style.height = size;

    container.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Cria um coração a cada 300ms
  setInterval(createHeart, 200);
});
