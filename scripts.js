// Inicialización de AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init(); // Inicia las animaciones de desplazamiento al cargar la página
});

// Función para mostrar una notificación emergente (revelación)
function mostrarRevelacion(mensaje) {
  document.getElementById('mensaje-revelacion').textContent = mensaje;
  document.getElementById('revelacion').style.display = 'flex';
}

// Cerrar la notificación emergente
document.getElementById('cerrar-revelacion')?.addEventListener('click', function () {
  document.getElementById('revelacion').style.display = 'none';
});

// Función para manejar la invocación (comentarios del formulario)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('ritualForm');
  const invocacionesDiv = document.getElementById('invocaciones');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();  // Evita que la página se recargue al enviar el formulario

      // Recoger los datos del formulario
      const nombre = document.getElementById('nombre').value;
      const pilar = document.getElementById('pilar').value;
      const mensaje = document.getElementById('mensaje').value;

      // Crear el nuevo mensaje de invocación
      const nuevaInvocacion = document.createElement('div');
      nuevaInvocacion.classList.add('invocacion');
      nuevaInvocacion.innerHTML = `
        <p><strong>${nombre}</strong> invocó el pilar de <strong>${pilar}</strong>:</p>
        <p>"${mensaje}"</p>
      `;

      // Agregarlo al div de invocaciones
      invocacionesDiv.appendChild(nuevaInvocacion);

      // Limpiar el formulario
      form.reset();
    });
  }

  // Agregar un evento de clic a un enlace para mostrar una notificación de revelación
  document.querySelectorAll('a').forEach((elemento) => {
    elemento.addEventListener('click', function () {
      mostrarRevelacion('¡La profecía se revela! El destino está cerca...');
    });
  });
});
