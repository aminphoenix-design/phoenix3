// Esperamos que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  
  // Funcionalidad del botón "Comienza tu viaje"
  const botonViaje = document.querySelector('.boton');
  const revelacion = document.querySelector('.revelacion');
  const cerrarRevelacion = document.querySelector('#cerrar-revelacion');

  // Cuando se hace clic en "Comienza tu viaje"
  if (botonViaje) {
    botonViaje.addEventListener('click', function() {
      // Mostrar la revelación al usuario
      revelacion.style.display = 'flex';
      setTimeout(() => {
        revelacion.style.display = 'none';
      }, 5000);  // Se oculta después de 5 segundos
    });
  }

  // Funcionalidad para cerrar la revelación
  if (cerrarRevelacion) {
    cerrarRevelacion.addEventListener('click', function() {
      revelacion.style.display = 'none';
    });
  }

  // Función para el formulario del Ritual
  const formularioRitual = document.querySelector('form');
  if (formularioRitual) {
    formularioRitual.addEventListener('submit', function(event) {
      event.preventDefault();  // Evita que se recargue la página

      const nombre = document.getElementById('nombre').value;
      const invocacion = document.getElementById('invocacion').value;
      
      if (nombre && invocacion) {
        alert(`Ritual realizado por: ${nombre}\nInvocación: ${invocacion}`);
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  }

});
