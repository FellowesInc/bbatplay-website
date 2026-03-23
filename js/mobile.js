$(window).on('load', function () {

// Setting up custom media queries
const mediaQuerymax992 = window.matchMedia('(max-width: 991.98px)');

if (mediaQuerymax992.matches) {
  // Keep Products Dropdown Open on Mobile
  const productToggle = document.querySelector('.nav-item.dropdown .dropdown-toggle');
  const productMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');

  if (productToggle && productMenu) {

    // Force open initially
    productMenu.classList.add('show');
    productToggle.classList.add('show');
    productToggle.setAttribute('aria-expanded', 'true');

    // If Bootstrap tries to hide it, immediately reopen it
    productToggle.addEventListener('hide.bs.dropdown', function (e) {
      e.preventDefault();
    });

  }
}
// Custom Mobile Navigation JS End
});