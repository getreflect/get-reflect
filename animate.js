$("#ready_button").click(function() {
    $('html,body').animate({
      scrollTop: $("#linkIntro").offset().top
    },
      duration = 1000);
  });