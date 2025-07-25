document.querySelectorAll(".btn-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const detalhes = button.nextElementSibling;
    const isVisible = detalhes.style.display === "block";
    
    detalhes.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Ver mais" : "Ver menos";
  });
});
