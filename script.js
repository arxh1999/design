document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const mainNav = document.querySelector('.main-nav');
  
    menuButton.addEventListener('click', function() {
      mainNav.classList.toggle('show');
    });
  });