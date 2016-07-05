jQuery(document).ready(function(){
  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "rotateInDownLeft",
    speed: 2000,
    complete: function () {
      console.log("asdasd")
        // Called after the entrance animation is executed.
    }
    });
  $('.navbar-toggle, nav').click(function(){
    $('.navbar-toggle').toggleClass('navbar-on');
    $('nav').fadeToggle();
    $('nav').removeClass('nav-hide');
  });
});