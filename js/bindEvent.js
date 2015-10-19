function bindEvent() {
    var font = parseInt($('html').css('font-size'));
    $('.yep, .nope').on('touchstart', function () {
        
        var self = $(this);
        self.css('-webkit-animation', 'shake 0.1s');
        setTimeout(function () {
            self.css('-webkit-animation', '');
        },1000);

    })
    $('.yep, .nope').on('touchend', function () {
        
        setTimeout(function () {
            $('.question-content').get(0).className = 'question-content';
            $('.question-content').addClass('question2');
            $('.question-content').css({
                '-webkit-mask-position': ''
            })
        },1000);
        var width = $('.question-content').width() / font * 2.5 ;
        var height = $('.question-content').height() / font * 2.5;
        $('.question-content').css({
            '-webkit-mask-image': '-webkit-gradient(linear, left top, right bottom, color-stop(0.00, rgba(0,0,0,1)), color-stop(0.35, rgba(0,0,0,1)), color-stop(0.50, rgba(0,0,0,0)), color-stop(0.75, rgba(0,0,0,0)), color-stop(1.00, rgba(0,0,0,0)))',
            '-webkit-mask-size': width + 'rem ' + height + 'rem',
            '-webkit-mask-position': '-' + width/2 + 'rem -' + height/2+ 'rem'
        });
    });
}