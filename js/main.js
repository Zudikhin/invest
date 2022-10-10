$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
      $(this).toggleClass("active");
      $(".nav_mobile_drop").toggleClass("active");
    });

    $(".time_block_form_open").click(function() {
      $(".time_block_form").addClass("active");
    });

    $(".time_block_form_close").click(function() {
      $(".time_block_form").removeClass("active");
    });

    $('.idea_slider').slick({
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });


});