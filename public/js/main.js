$(document).ready(function(){
    $('#popular-course, #new-course').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

     /*********************************************
  *  Navbar Responsive
  /*********************************************/
  $(".mobile-navbar").removeClass("hidden");
  $(".mobile-navbar").hide();

  $(".navbar-toggle").on("click", function() {
    $(".mobile-navbar").toggle("slide");
    $("#toggle-icon").toggleClass("fa-times");
  });

  $(window).click(function() {
    $(".mobile-navbar").hide("slide");
    $("#toggle-icon").addClass("fa-bars-staggered");
    $("#toggle-icon").removeClass("fa-times");
  });

  $(".navbar-toggle").on("click", function(event) {
    event.stopPropagation();
  });

  $(".mobile-navbar").on("click", function(event) {
    event.stopPropagation();
  });

});
 