
var questionArr = [
    [1,2,3],
    [1,2],
    [2,3],
    [1,3]
];

var questionRequest = [
    [10,7,8,5],
    [10,9,6],
    [3,2,5],
    [1,8,4]
];

    var qIndex = Math.floor(Math.random()*4);

    var myQuest = questionArr[qIndex];
    var eQuest = myQuest.slice(); 
        eQuest.sort(function(){ return 0.5 - Math.random() });

    var currId = 1;
    var yep = 0;
    var nop = 0;


    var font = parseInt($('html').css('font-size'));
    $('.question-content').get(0).className = 'question-content';
    $('.question-content').addClass('question' + eQuest.pop());

    var width = $('.question-content').width() / font * 2.5 ;
    var height = $('.question-content').height() / font * 2.5;
    $('.question-content').css({
        '-webkit-mask-image': '-webkit-gradient(linear, right top, right bottom, color-stop(0.00, rgba(0,0,0,1)), color-stop(0.35, rgba(0,0,0,1)), color-stop(0.50, rgba(0,0,0,0)), color-stop(0.75, rgba(0,0,0,0)), color-stop(1.00, rgba(0,0,0,0)))',
        '-webkit-mask-size': width + 'rem ' + height + 'rem',
    });

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.out-box').css('width', windowWidth * 3);
    $('.out-box').css('height', windowHeight);

bindEvent();

(function() {
    var qhtml = '';
    myQuest.forEach(function (x) {
        qhtml += '<img src="./images/question/' + x + '.png" style="display:none" />';
    })
    questionRequest[qIndex].forEach(function (x) {
        qhtml += '<img src="./images/img/' + x + 'p.png" style="display:none" />';
        qhtml += '<img src="./images/img/' + x + 'w.png" style="display:none" />';
    })
    $(qhtml).appendTo('body');
})();

function init() {

    qIndex = Math.floor(Math.random()*4);

    myQuest = questionArr[qIndex];
    eQuest = myQuest.slice(); 
    eQuest.sort(function(){ return 0.5 - Math.random() });

    font = parseInt($('html').css('font-size'));
    $('.question-content').get(0).className = 'question-content';
    $('.question-content').addClass('question' + eQuest.pop());

    width = $('.question-content').width() / font * 2.5 ;
    height = $('.question-content').height() / font * 2.5;
    $('.question-content').css({
        '-webkit-mask-image': '-webkit-gradient(linear, right top, right bottom, color-stop(0.00, rgba(0,0,0,1)), color-stop(0.35, rgba(0,0,0,1)), color-stop(0.50, rgba(0,0,0,0)), color-stop(0.75, rgba(0,0,0,0)), color-stop(1.00, rgba(0,0,0,0)))',
        '-webkit-mask-size': width + 'rem ' + height + 'rem',
    });


    currId = 1;
    yep = 0;
    nop = 0;
}
