$(window).on('load', function () {
// Setting up custom media queries
const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');

if (mediaQuery1200.matches) {
    // Custom Footer JS Begins

    let headerIndex;
    let menuIndex;
    let footerToggle = document.getElementsByClassName('footer-menu-heading');
    let footerMenu = document.getElementsByClassName('footer-list-menu');

    for (headerIndex = 0; headerIndex < footerToggle.length; headerIndex++) {
        footerToggle[headerIndex].setAttribute('aria-expanded', true);
    }

    for (menuIndex = 0; menuIndex < footerMenu.length; menuIndex++) {
        footerMenu[menuIndex].classList.add('show');
    }

}
});
// Custom Global Navigation JS End