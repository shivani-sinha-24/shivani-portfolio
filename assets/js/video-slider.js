/**
 * Portfolio details slider
 */
new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },  
    navigation: {
      nextEl: '.swiper-button-next', // Selector for the next arrow
      prevEl: '.swiper-button-prev'  // Selector for the previous arrow
    },
    // Add the following options to pause on hover
    on: {
        init: function () {
          this.el.addEventListener('mouseenter', function () {
            this.autoplay.stop();
          }.bind(this));
          this.el.addEventListener('mouseleave', function () {
            this.autoplay.start();
          }.bind(this));
        }
      }
});