document.addEventListener("DOMContentLoaded", function() {
    const linkUsuarios = document.querySelector(".link-usuarios");
    const seccionUsuarios = document.getElementById("usuarios");
    
    linkUsuarios.addEventListener("click", function(event) {
      event.preventDefault(); // Evita que se siga el enlace
      seccionUsuarios.style.display = "block"; // Mostramos la sección de usuarios
    });
  });