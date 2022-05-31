$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    autoplay: true,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
