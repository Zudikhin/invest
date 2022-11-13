$(document).ready(function () {
    "use strict";

    $(".header_block_left_btn").click(function() {
      $(this).toggleClass("active");
      $(".drop_down").toggleClass("active");
      $(".modal_contacts").removeClass("active");
    });

    $(document).mouseup(function(e) {
      var container = $(".header_block_right_qr");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".header_block_right_qr_big").removeClass("active");
      }
      $(".footer_desktop_content_left_btns_qr_big").removeClass("active");
      $(".footer_desktop_content_left_btns_qr").removeClass("hide");
      $(".unicorn_block_left_btns_qr_big").removeClass("active");
      $(".unicorn_block_left_btns_qr").removeClass("hide");
      $(".about_solution_block_btns_qr").removeClass("hide");
      $(".about_solution_block_btns_qr_big").removeClass("active");
    });

    $(".modal_contacts_back").click(function() {
      $(".modal_contacts").removeClass("active");
    });

    $(".drop_down_nav_contact").click(function() {
      $(".modal_contacts").addClass("active");
    });


    $(".header_block_nav_company").on({
      mouseenter:function () {
        $(".header_block_nav_company_drop").addClass("active");
      },
      mouseleave:function () {
        $(".header_block_nav_company_drop").removeClass("active");
      }
    });

    $(".header_block_nav_company_drop").on({
      mouseenter:function () {
        $(this).addClass("active");
      },
      mouseleave:function () {
        $(this).removeClass("active");
      }
    });


    $(".unicorn_block_left_btns_qr").click(function() {
      if ($(window).width() < 1200) {
        $(".modal_back").addClass("active");
        $(".modal_qr").addClass("active");
      } else {
        $(".unicorn_block_left_btns_qr_big").addClass("active");
        $(".unicorn_block_left_btns_qr").addClass("hide");
      }
    });


    $(".about_solution_block_btns_qr").click(function() {
      if ($(window).width() < 1200) {
        $(".modal_back").addClass("active");
        $(".modal_qr").addClass("active");
      } else {
        $(".about_solution_block_btns_qr_big").addClass("active");
        $(".about_solution_block_btns_qr").addClass("hide");
      }
    });

    $(".about_solution_block_btns_qr_big").click(function() {
      $(this).removeClass("active");
      $(".about_solution_block_btns_qr").removeClass("hide");
    });


    $(".footer_mobile_btns_qr").click(function() {
      $(".modal_back").addClass("active");
      $(".modal_qr").addClass("active");
    });

    $(".drop_down_wrap_block_qr").click(function() {
      $(".modal_back").addClass("active");
      $(".modal_qr").addClass("active");
    });

    $(".modal_back").click(function() {
      $(this).removeClass("active");
      $(".modal_qr").removeClass("active");
    });

    $(".modal_qr").click(function() {
      $(this).removeClass("active");
      $(".modal_back").removeClass("active");
    });

    $(".unicorn_block_left_btns_qr_big").click(function() {
      if ($(window).width() > 1199) {
        $(this).removeClass("active");
        $(".unicorn_block_left_btns_qr").removeClass("hide");
      }
    });

    $(".header_block_right_qr").click(function() {
      $(".header_block_right_qr_big").toggleClass("active");
    });

    // $(".header_block_right_qr_big").click(function() {
    //   $(this).removeClass("active");
    // });

    $(".time_block_form_open").click(function() {
      $(".time_block_form").addClass("active");
    });

    $(".time_block_form_close").click(function() {
      $(".time_block_form").removeClass("active");
    });

    $(".footer_desktop_content_left_btns_qr").click(function() {
      $(".footer_desktop_content_left_btns_qr").addClass("hide");
      $(".footer_desktop_content_left_btns_qr_big").addClass("active");
    });

    $(".footer_desktop_content_left_btns_qr_big").click(function() {
      $(".footer_desktop_content_left_btns_qr").removeClass("hide");
      $(".footer_desktop_content_left_btns_qr_big").removeClass("active");
    });

    $(".under_footer_block_open").click(function() {
      $(".under_footer_block").addClass("active");
    });

    $(".under_footer_block_hide").click(function() {
      $(".under_footer_block").removeClass("active");
    });

    $('.idea_slider').slick({
        dots: true,
        arrows: false,
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

    $('.about_solution_block_slider').slick({
      dots: false,
      arrows: false,
      speed: 500,
      centerMode: true,
      variableWidth: true,
      infinite: true,
      slidesToShow: 3
    });

    $(".faq_block_list_item_top").on("click", function(e) {
      $(".faq_block_list_item_body").slideUp(400);
      if($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(".faq_block_list_item").removeClass("active");
      } else {
        $(this).next().slideToggle();
        $(".faq_block_list_item").removeClass("active");
        $(this).parent().addClass("active");
        $(this).next().slideDown(400);
      }
    });

    $(".vc_main").click(function() {
      $(this).addClass("active");
      $(".vc_review").removeClass("active");
      $("#vc_main").addClass("active");
      $("#vc_review").removeClass("active");
    });

    $(".vc_review").click(function() {
      $(this).addClass("active");
      $(".vc_main").removeClass("active");
      $("#vc_main").removeClass("active");
      $("#vc_review").addClass("active");
    });

    $(".vc_block_content_main_table").mCustomScrollbar({
      axis:"x",
      theme:"dark"
    });

    if ($(window).width() > 1200) {
      $(".vc_block_content_review_bottom_item_wrap").mCustomScrollbar({
        theme:"dark"
      });
    }
    

});