   // Función para alternar la visualización del menú de navegación cuando se hace clic en el ícono de hamburguesa
   function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  }

  // Agrega un escuchador de eventos de clic al ícono de hamburguesa para llamar a la función toggleMenu()
  const hamburgerIcon = document.querySelector('.hamburger');
  hamburgerIcon.addEventListener('click', toggleMenu);


  function increaseValue() {
    var value = parseInt(document.getElementById('totalChildren').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
      value++;
    }
    document.getElementById('totalChildren').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('totalChildren').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById('totalChildren').value = value;
  }

  function increaseValueAdult() {
    var value = parseInt(document.getElementById('totalAdults').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
      value++;
    }
    document.getElementById('totalAdults').value = value;
  }
  
  function decreaseValueAdult() {
    var value = parseInt(document.getElementById('totalAdults').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById('totalAdults').value = value;
  }

  function increaseValueDias() {
    var value = parseInt(document.getElementById('cantDias').value, 10);
    value = isNaN(value) ? 3 : value;
    if (value < 10) {
      value++;
    }
    document.getElementById('cantDias').value = value;
  }
  
  function decreaseValueDias() {
    var value = parseInt(document.getElementById('cantDias').value, 10);
    value = isNaN(value) ? 3 : value;
    if (value > 3) {
      value--;
    }
    document.getElementById('cantDias').value = value;
  }