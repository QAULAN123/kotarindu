const navbarNav = document.querySelector('.navbar_nav');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', function () {
   navbarNav.classList.toggle('active');
});

document.addEventListener('click', function(e){
   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
   }
});