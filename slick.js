if(jQuery('.carousel_1').length) {
  jQuery('.carousel_1').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 770,
      settings: {
        centerMode: true,
          centerPadding: '40px',
        slidesToShow: 3 
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '200px',
        slidesToShow: 1
      }
    }],

    
  });
}