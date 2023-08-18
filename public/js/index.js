const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click',  () => {
  mobileNav.classList.toggle('hide');
})