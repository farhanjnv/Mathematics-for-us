document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('#main-nav ul');

  menuIcon.addEventListener('click', function () {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('active');
  });
});
