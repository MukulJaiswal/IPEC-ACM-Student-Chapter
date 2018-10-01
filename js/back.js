var lastHeight = '';

$(window).on('resize', function () {
    // remove height when normal resize event is fired and content redrawn
    if (lastHeight) {
        $('body').height(lastHeight = '');
    }
}).on('touchmove', function () {
    // when window height changes adjust height of the div
    if (lastHeight != window.innerHeight) {
        $('body').height(lastHeight = window.innerHeight);
    }
});
T