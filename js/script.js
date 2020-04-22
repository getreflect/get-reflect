$("#ready_button").click(function() {
    $('html,body').animate({
      scrollTop: $("#install").offset().top
  	},duration = 1000);
});