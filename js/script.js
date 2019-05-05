$(document).ready(function() {
  //Show Navbar after click on icon
  $("i.icon").click(function() {
    $(".nav-list").slideToggle();
    $(".nav-list .list a").click(function() {
      $(".nav-list").slideUp();
    });
  });

  $(window).scroll(function() {
    var sc = $(this).scrollTop();
    //section counts => making counts when scrolling countTo plugin
    if (sc > 1400) {
      $(".timer").countTo();
      $(window).off("scroll");
    }

    // display scrollTop Arrow
    if (sc > 1000) {
      $(".scrollTop").fadeIn();
    } else {
      $(".scrollTop").fadeOut();
    }
  });

  //change bg for buttons in Portfolio section
  $(".buttons button").click(function() {
    $(this)
      .addClass("active-btn")
      .siblings()
      .removeClass("active-btn");

    //filtering images after clicking any button
    var imgFilter = $(this).attr("id");

    if (imgFilter === "all") {
      $(".images > div ").fadeIn();
    } else {
      $(".images > div ").fadeOut();
      $(".images")
        .contents()
        .filter("." + imgFilter)
        .fadeIn();
    }
  });

  //owl carousel library => team section
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // choose panel
  $(".choose-panel li").click(function() {
    $(this)
      .addClass("active-btn")
      .siblings()
      .removeClass("active-btn");
    var panel = $(this).data("role");
    $(".content > div ").hide();
    $(".content")
      .contents()
      .filter("#" + panel)
      .fadeIn();
  });

  //popup video in choose section
  $(".popup").magnificPopup({
    type: "iframe"
  });

  //slick slider on twitter section
  $(".slick").slick({
    nextArrow: false,
    prevArrow: false,
    autoplay: true
  });

  //ScrollTop when clicked

  $(".scrollTop").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  //scroll to targeted section on click it's Navbar item
  $(".list a").click(function() {
    $("body,html").animate({
      scrollTop: $(this.attr("href")).offset().top
    });
  });
});
