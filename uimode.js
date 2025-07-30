alert("Script vinculado com sucesso!"); // Alerta ao carregar a página

const button = document.getElementById("toggle-theme");
const body = document.body;

button.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    button.textContent = "Modo Escuro";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    button.textContent = "Modo Claro";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("toggle-theme");
  const label = document.getElementById("mode-label");
  const body = document.body;

  // Inicia com modo claro ou escuro
  body.classList.add("light-mode");
  label.textContent = "Modo Claro";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      label.textContent = "Modo Escuro";
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      label.textContent = "Modo Claro";
    }
  });
});
