$('.multiple-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.single-item').slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: true
  });

  $(document).ready(function(){
    $('.nav-mobile').click(function(){
      $('.nav').toggleClass('open');
    });
  });