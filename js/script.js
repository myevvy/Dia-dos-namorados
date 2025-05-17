document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // Tamanho aleatório
    const size = Math.random() * 40 + 40 + "px";
    heart.style.width = size;
    heart.style.height = size;

    // Opacidade aleatória
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    // Sempre começa de baixo
    heart.style.top = "100vh";

    container.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 200);

  const button = document.querySelector(".btn");
  const dateInput = document.querySelector(".data");

  button.addEventListener("click", () => {
    const datecorrect = "2025-03-01";
    if (!dateInput.value) {
      alert("Por favor, selecione uma data antes de continuar.");
    } else if (dateInput.value === datecorrect) {
      window.location.href = "pagina.html";
    } else {
      alert("Data incorreta. Por favor, insira a data correta.");
    }
  });
});
