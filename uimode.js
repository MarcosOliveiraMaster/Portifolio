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
