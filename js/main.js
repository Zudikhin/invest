$(document).ready(function () {
    "use strict";

    $(".header_block_left_btn").click(function() {
      $(this).toggleClass("active");
      $(".drop_down").toggleClass("active");
      $(".modal_contacts").removeClass("active");
    });

    $(document).mouseup(function(e) {
      var container = $(".header_block_right_qr_big");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(container).removeClass("active");
      }
    });

    $(".modal_contacts_back").click(function() {
      $(".modal_contacts").removeClass("active");
    });

    $(".drop_down_nav_contact").click(function() {
      $(".modal_contacts").addClass("active");
    });

    $(".unicorn_block_left_btns_qr").click(function() {
      if ($(window).width() < 1200) {
        $(".modal_back").removeClass("active");
        $(".modal_qr").removeClass("active");
      } else {
        $(".unicorn_block_left_btns_qr_big").addClass("active");
        $(".unicorn_block_left_btns_qr").addClass("hide");
      }
      
    });

    $(".header_block_right_qr").click(function() {
      $(".header_block_right_qr_big").addClass("active");
    });

    $(".time_block_form_open").click(function() {
      $(".time_block_form").addClass("active");
    });

    $(".time_block_form_close").click(function() {
      $(".time_block_form").removeClass("active");
    });

    $(".under_footer_block_open").click(function() {
      $(".under_footer_block").addClass("active");
    });

    $(".under_footer_block_hide").click(function() {
      $(".under_footer_block").removeClass("active");
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