const swiper = new Swiper('.swiper', {
//   // Optional parameters
  direction: 'horizontal',
  loop: true,

//   // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  simulateTouch: true,
  grabCursor: true,


  slideToClickedSlide: true,

  // zoom: {
  //   maxRatio: 2,
  //   minRatio: 1,
  // },

//   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});