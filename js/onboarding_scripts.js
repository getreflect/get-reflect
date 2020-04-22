$("#page1button").click(function() {
    $('html,body').animate({
      scrollTop: $("#page2").offset().top
  	},duration = 1000);
});

$("#page2button").click(function() {
    $('html,body').animate({
      scrollTop: $("#page3").offset().top
  	},duration = 1000);
});