$("#page1button").click(function() {
    $('html,body').animate({
      scrollTop: $("#page2").offset().top - $(window).height() / 3
  	},duration = 1000);
});

$("#page2button").click(function() {
    $('html,body').animate({
      scrollTop: $("#page3").offset().top - $(window).height() / 3
  	},duration = 1000);
});

$("#page3button").click(function() {
    $('html,body').animate({
      scrollTop: $("#page4").offset().top - $(window).height() / 3
  	},duration = 1000);
});

$(() => {
    $(window)
    .on('scroll', vidProgress)
    .load(vidProgress);
    
    function vidProgress() {
        // Get video properties
        var duration = $('video')[0].duration;
        
        // Get window properties
        var scrollable = $(document).height() - $(window).height();
        
        // Do seeking
        var scrollRatio = $(document).scrollTop()/scrollable;
        if(isNaN(scrollRatio)) scrollRatio = 0;
        $('video')[0].currentTime = scrollRatio*duration;
    };
});