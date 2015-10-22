function bindEvent() {
    var windowWidth = $(window).width();
    var font = parseInt($('html').css('font-size'));
    var lock = false;
    $('.yep, .nope').on('touchstart', function () {
        var self = $(this);
        self.css('-webkit-animation', 'shake 0.1s');
        setTimeout(function () {
            self.css('-webkit-animation', '');
        },1000);

    })

    $('.yep, .nope').on('touchend', function () {
        if (lock) return;
        
        if ($(this).hasClass('yep')) {
            yep ++;
        } else {
            nop ++;
        }
        if (currId == myQuest.length) {
            $('.out-box').css('-webkit-transform', 'translateX(-'+(2*windowWidth)+'px)')
            $('.request-img').css('-webkit-animation', 'toBig 1s ease')
            var imgNum;
            if (qIndex === 0) {
                if (yep === 3) {
                    imgNum = questionRequest[qIndex][0]
                } else if (nop === 3) {
                    imgNum = questionRequest[qIndex][1]
                } else if (yep === 1) {
                    imgNum = questionRequest[qIndex][2]
                } else {
                    imgNum = questionRequest[qIndex][3]
                }
            } else {
                if (yep === 2) {
                    imgNum = questionRequest[qIndex][0]
                } else if (nop === 2) {
                    imgNum = questionRequest[qIndex][1]
                } else if (yep === 1) {
                    imgNum = questionRequest[qIndex][2]
                }
            }
            $('#contentImg').attr('src', './images/img/'+imgNum+'w.png')
            $('#bearImg').attr('src', './images/img/'+imgNum+'p.png')
            return;
        }
        lock = true;

        setTimeout(function () {
            lock = false;
            $('.question-content').get(0).className = 'question-content';
            $('.question-content').addClass('question' + eQuest.pop());
            $('.question-content').css({
                '-webkit-mask-position': ''
            })
        }, 400);
        var width = $('.question-content').width() / font * 2.5 ;
        var height = $('.question-content').height() / font * 2.5;
        $('.question-content').css({
            '-webkit-mask-image': '-webkit-gradient(linear, right top, right bottom, color-stop(0.00, rgba(0,0,0,1)), color-stop(0.35, rgba(0,0,0,1)), color-stop(0.50, rgba(0,0,0,0)), color-stop(0.75, rgba(0,0,0,0)), color-stop(1.00, rgba(0,0,0,0)))',
            '-webkit-mask-size': width + 'rem ' + height + 'rem',
            '-webkit-mask-position': '-' + width/2 + 'rem -' + height/2+ 'rem'
        });

            

        currId ++;
    });

    $('.start-btn').on('touchend', function () {
        $('.out-box').css('-webkit-transform', 'translateX(-'+windowWidth+'px)')
    });

    $('.regame-btn').on('touchend', function () {
        init();
        $('.out-box').css('-webkit-transform', 'translateX(0px)')
        $('.request-img').css('-webkit-animation', '')
    })
    $('.share-btn').on('touchend', function () {
        $('.share-container').show();
    });
    $('.share-container').on('touchend', function () {
        $('.share-container').hide();
    })
}