$(document).ready(function () {
  $(".hot-news-slider").owlCarousel({
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
