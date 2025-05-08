// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar las animaciones AOS (Animate On Scroll)
  AOS.init();

  // Mostrar la notificación emergente cuando se haga clic en el botón
  const boton = document.querySelector(".boton");
  const revelacion = document.querySelector(".revelacion");
  const cerrarRevelacion = document.querySelector("#cerrar-revelacion");

  // Evento para abrir la notificación emergente
  boton.addEventListener("click", function () {
    revelacion.style.display = "flex"; // Mostrar la ventana emergente
  });

  // Evento para cerrar la notificación emergente
  cerrarRevelacion.addEventListener("click", function () {
    revelacion.style.display = "none"; // Ocultar la ventana emergente
  });

  // Función para manejar el formulario de invocación
  const formulario = document.querySelector("#ritual form");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los valores del formulario
    const nombre = document.querySelector("#nombre").value;
    const invocacion = document.querySelector("#invocacion").value;

    // Crear una nueva invocación reciente y agregarla a la lista
    const invocacionesRecientes = document.querySelector("#invocaciones");
    const nuevaInvocacion = document.createElement("div");
    nuevaInvocacion.classList.add("invocacion");
    nuevaInvocacion.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Invocación:</strong> ${invocacion}</p>
    `;
    invocacionesRecientes.appendChild(nuevaInvocacion);

    // Limpiar el formulario después de enviarlo
    formulario.reset();
  });
});

