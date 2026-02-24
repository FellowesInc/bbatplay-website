$(window).on('load', function () {

// Setting up custom media queries
const mediaQuerymax992 = window.matchMedia('(max-width: 991.98px)');

if (mediaQuerymax992.matches) {
  //Opens and closes the Navbar on Mobile
  document.querySelectorAll("nav").forEach(function (nav) {
    const toggler = nav.querySelector(".navbar-toggler");
    const collapse = nav.querySelector(".collapse");

    if (!toggler || !collapse) return;

    // Toggle on button click
    toggler.addEventListener("click", function (e) {
      e.stopPropagation();
      collapse.classList.toggle("show");
    });

    // Prevent clicks inside menu from closing it
    collapse.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    // Close when clicking outside
    document.addEventListener("click", function () {
      collapse.classList.remove("show");
    });

    // Close on scroll
    window.addEventListener("scroll", function () {
      collapse.classList.remove("show");
    });
  });

  // Keep Products Dropdown Open on Mobile
  const productToggle = document.querySelector('#explore-link .dropdown-toggle');
  const productMenu = document.querySelector('#explore-link .dropdown-menu');

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