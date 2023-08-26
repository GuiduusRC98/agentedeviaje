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

function enviarPorWhatsApp() {
    const fechaRetiro = document.getElementById('fechaRetiro').value;
    const lugarRetiro = document.getElementById('lugarRetiro').value;
    const horaRetiro = document.getElementById('horaRetiro').value;
    const fechaDevolucion = document.getElementById('fechaDevolucion').value;
    const horaDevolucion = document.getElementById('horaDevolucion').value;
    const lugarDevolucion = document.getElementById('lugarDevolucion').value;
    const totalPeople = document.getElementById('totalPeople').value;
  
    const mensajeWhatsApp = `Reserva de vehículo:
  Fecha de retiro: ${fechaRetiro}
  Lugar de retiro: ${lugarRetiro}
  Hora de retiro: ${horaRetiro}
  Fecha de devolución: ${fechaDevolucion}
  Hora de devolución: ${horaDevolucion}
  Lugar de devolución: ${lugarDevolucion}
  Cantidad de personas: ${totalPeople}`;
  
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