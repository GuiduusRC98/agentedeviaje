   // Función para alternar la visualización del menú de navegación cuando se hace clic en el ícono de hamburguesa
   function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  }

  // Agrega un escuchador de eventos de clic al ícono de hamburguesa para llamar a la función toggleMenu()
  const hamburgerIcon = document.querySelector('.hamburger');
  hamburgerIcon.addEventListener('click', toggleMenu);