// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  // Función para alternar la visualización del menú de navegación cuando se hace clic en el ícono de hamburguesa
  function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  }

  // Agregar un escuchador de eventos de clic al ícono de hamburguesa para llamar a la función toggleMenu()
  const hamburgerIcon = document.querySelector('.hamburger');
  hamburgerIcon.addEventListener('click', toggleMenu);
});



function enviarPorWhatsAppCrucero() {
  const fechadeViaje = document.getElementById('fechadeViaje').value;
  const anodeViaje = document.getElementById('anodeViaje').value;
  const totalAdults = parseInt(document.getElementById('totalAdults').value);
  const totalChildren = parseInt(document.getElementById('totalChildren').value);  
  const totalPerson = Number(totalChildren + totalAdults);

  const mensajeWhatsApp = `Cotizacion de crucero: Año de viaje:\n ${anodeViaje}  \nMes de viaje: ${fechadeViaje}.\nSomos en total ${totalPerson} , ${totalChildren} menores y ${totalAdults} adultos`;

  const encodedMensaje = encodeURIComponent(mensajeWhatsApp);
  const whatsappURL = `https://api.whatsapp.com/send?phone=+5493416483029&text=${encodedMensaje}`;

  window.open(whatsappURL, '_blank');
}
function enviarPorWhatsAppUniversal() {
  const fechaviaje = document.getElementById('fechaviaje').value;
  const cantNoches = document.getElementById('cantNoches').value;
  const totalAdults = parseInt(document.getElementById('totalAdults').value);
  const totalChildren = parseInt(document.getElementById('totalChildren').value);  
  const totalPerson = Number(totalChildren + totalAdults);

  const mensajeWhatsApp = `Cotizacion de paquete Universal: \nFecha de viaje: ${fechaviaje}, viajamos por ${cantNoches} noche/s. \nSomos en total ${totalPerson} personas, ${totalChildren} menor/es y ${totalAdults} adulto/s`;

  const encodedMensaje = encodeURIComponent(mensajeWhatsApp);
  const whatsappURL = `https://api.whatsapp.com/send?phone=+5493416483029&text=${encodedMensaje}`;

  window.open(whatsappURL, '_blank');
}
function enviarPorWhatsAppDisney() {
  const fechaviaje = document.getElementById('fechaviaje').value;
  const cantNoches = document.getElementById('cantNoches').value;
  const totalAdults = parseInt(document.getElementById('totalAdults').value);
  const totalChildren = parseInt(document.getElementById('totalChildren').value);  
  const totalPerson = Number(totalChildren + totalAdults);

  const mensajeWhatsApp = `Cotizacion de paquete Disney: \nFecha de viaje: ${fechaviaje}, viajamos por ${cantNoches} noche/s. \nSomos en total ${totalPerson} personas, ${totalChildren} menor/es y ${totalAdults} adulto/s`;

  const encodedMensaje = encodeURIComponent(mensajeWhatsApp);
  const whatsappURL = `https://api.whatsapp.com/send?phone=+5493416483029&text=${encodedMensaje}`;

  window.open(whatsappURL, '_blank');
}
function enviarPorWhatsApp() {
    const fechaRetiro = document.getElementById('fechaRetiro').value;
    const lugarRetiro = document.getElementById('lugarRetiro').value;
    const horaRetiro = document.getElementById('horaRetiro').value;
    const fechaDevolucion = document.getElementById('fechaDevolucion').value;
    const horaDevolucion = document.getElementById('horaDevolucion').value;
    const lugarDevolucion = document.getElementById('lugarDevolucion').value;
    const totalPeople = document.getElementById('totalPeople').value;
  
    const mensajeWhatsApp = `Reserva de vehículo:\n
  \tFecha de retiro: ${fechaRetiro}\n
  \tLugar de retiro: ${lugarRetiro}\n
  \tHora de retiro: ${horaRetiro}\n
  \tFecha de devolución: ${fechaDevolucion}\n
  \tHora de devolución: ${horaDevolucion}\n
  \tLugar de devolución: ${lugarDevolucion}\n
  \tCantidad de personas: ${totalPeople}`;
  
    const encodedMensaje = encodeURIComponent(mensajeWhatsApp);
    const whatsappURL = `https://api.whatsapp.com/send?phone=+5493416483029&text=${encodedMensaje}`;
  
    window.open(whatsappURL, '_blank');
}
  
function increaseValuePeople() {
    var value = parseInt(document.getElementById('totalPeople').value, 20);
    value = isNaN(value) ? 0 : value;
    if (value < 20) {
      value++;
    }
    document.getElementById('totalPeople').value = value;
  }
  
  function decreaseValuePeople() {
    var value = parseInt(document.getElementById('totalPeople').value, 20);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById('totalPeople').value = value;
  }  

  /* TOTAL ADULTO */
  function increaseValueAdult() {
    var value = parseInt(document.getElementById('totalAdults').value, 20);
    value = isNaN(value) ? 0 : value;
    if (value < 20) {
      value++;
    }
    document.getElementById('totalAdults').value = value;
  }
  
  function decreaseValueAdult() {
    var value = parseInt(document.getElementById('totalAdults').value, 20);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById('totalAdults').value = value;
  }  

  /* TOTAL MENORES */
  function increaseValueChildren() {
    var value = parseInt(document.getElementById('totalChildren').value, 20);
    value = isNaN(value) ? 0 : value;
    if (value < 20) {
      value++;
    }
    document.getElementById('totalChildren').value = value;
  }
  
  function decreaseValueChildren() {
    var value = parseInt(document.getElementById('totalChildren').value, 20);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById('totalChildren').value = value;
  }  