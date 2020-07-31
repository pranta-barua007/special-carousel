jQuery("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    rewind: true,
    margin: 0.5,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
  });