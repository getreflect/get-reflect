const numPages = $('.nextPage').length

for (var i = 1; i < numPages + 1; i++) {
    const page = `#page${i + 1}`
    $(`#page${i}button`).last().click(() => {
        $('html,body').animate({
            scrollTop: $(page).last().offset().top - $(window).height() / 3
        }, duration = 1000);
    });
}

$(() => {
    $(window)
    .on('scroll', vidProgress)
    .on('load', vidProgress)
    
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