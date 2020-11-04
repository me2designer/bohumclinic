var $mainWrap = $('#wrap');
var $paging = $('#pagination');
var $sign = $('#sign');
var $spread = $('#spreadBG');



$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* <img> 드래그 방지 */
    $('img').on('dragstart', function(event) {
        event.preventDefault();
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* start */
    $mainWrap.addClass('center active');



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    /* resize 새로고침 */
    // window.addEventListener('resize', function() {
    //     location.reload();
    //     console.log('a');
    // }, true);

    // resize();



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){





    /* 터치 이벤트 콜백 */
    let initialX = null,
    initialY = null;

    function initTouch(e) {
        initialX = e.touches ? e.touches[0].clientX : e.clientX;
        initialY = e.touches ? e.touches[0].clientY : e.clientY;
    };

    function swipeDirection(e) {
        if (initialX !== null && initialY !== null) {
        const currentX = e.touches ? e.touches[0].clientX : e.clientX,
            currentY = e.touches ? e.touches[0].clientY : e.clientY;

        let diffX = initialX - currentX,
            diffY = initialY - currentY;

        Math.abs(diffX) > Math.abs(diffY)
        ? (
            0 < diffX
            ? toLeft()
            : toRight()

        )
        : (
            0 < diffY
            ? console.log("to top")
            : console.log("to bottom")
        )

        initialX = null;
        initialY = null;
        }
    }

    window.addEventListener("touchstart", initTouch);
    window.addEventListener("touchmove", swipeDirection);
    window.addEventListener("mousedown", function(e) {
        initTouch(e),
        window.addEventListener("mousemove", swipeDirection)
    });
    window.addEventListener("mouseup", function() {
        window.removeEventListener("mousemove", swipeDirection);
    });

    // 실행
    window.addEventListener("mousedown", function(e){
        0 === e.button && (
        initTouch(e),
        window.addEventListener("mousemove", swipeDirection)
        )
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    // 터치 이벤트 실행
    toRight = function() {
        // 오른쪽 방향으로 드래그
        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_shop').click();
        } else if ($mainWrap.hasClass('right')){
            AlignCenter();
        }
    }

    toLeft = function() {
        // 왼쪽 방향으로 드레그
        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_fa').click();
        } else if ($mainWrap.hasClass('left')){
            AlignCenter();
        }
    }



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 휠 이벤트 */
    $(window).bind('wheel', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_shop').click();
            } else if ($mainWrap.hasClass('right')){
                AlignCenter();
            }
        }
        else {
            // scroll down
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_fa').click();
            } else if ($mainWrap.hasClass('left')){
                AlignCenter();
            }
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 키보드 방향키 이벤트 */
    window.onkeydown = function(){
        if(event.keyCode == 37){
            console.log('좌');
            //좌
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_shop').click();
            } else if ($mainWrap.hasClass('right')){
                AlignCenter();
            }
        } else if (event.keyCode == 38){
            //상
        } else if (event.keyCode == 39){
            console.log('우');
            //우
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_fa').click();
            } else if ($mainWrap.hasClass('left')){
                AlignCenter();
            }
        } else if (event.keyCode == 40){
            //하
        }
    };



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){

  

    var winW = $mainWrap.width();

    var spread = function() {        
        var width = $spread.width();
        var center = Math.abs((width / 2 - winW / 2)) * -1;
        var right = ($spread.width() - winW) * -1;

        return {center : center, right : right}
    }

    // start
    $spread.css('left' , spread().center);
    $paging.find('.page2 i').css('width','100%');

    // shop 화면이동
    $sign.find('.btn_shop').on('click', function() {
        if( !$mainWrap.hasClass('pointerNone') ){
            $mainWrap.addClass('pointerNone');

            if( $mainWrap.hasClass('center') ){
                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : 0 }, 1600);

                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : '100%' }, 1600, function(){
                    $mainWrap.removeClass('pointerNone');
                });

                $spread.css({
                    'left' : 0,
                    'transition' : ''
                });
                $mainWrap.addClass('left').removeClass('right center');
            }
        } else if ( $mainWrap.hasClass('right') ){
            $paging.find('.page2 i').css({
                'left' : 'auto',
                'right' : 0
            }).animate({ 'width' : '100%' }, 1300);

            $paging.find('.page3 i').css({
                'left' : 0,
                'right' : 'auto'
            }).animate({ 'width' : 0 }, 1300, function(){
                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : 0 }, 1200);

                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : '100%' }, 1200, function(){
                    $mainWrap.removeClass('pointerNone');
                });
            });

            $spread.css({
                'left' : 0,
                'transition' : ''
            });
            $mainWrap.addClass('left').removeClass('right center');
        }
    });

    // FA 화면이동
    $sign.find('.btn_fa').on('click', function () {
        if( !$mainWrap.hasClass('pointerNone') ){
            $mainWrap.addClass('pointerNone');

            if( $mainWrap.hasClass('center') ){
                $paging.find('.page2 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : 0 }, 1600);

                $paging.find('.page3 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : '100%' }, 1600, function(){
                    $mainWrap.removeClass('pointerNone');
                });
                
                $spread.css({
                    'left' : spread().right,
                    'transition' : ''
                });
                $mainWrap.addClass('right').removeClass('left center');
            } else if ( $mainWrap.hasClass('left') ){
                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : 0 }, 1300);

                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : '100%' }, 1300, function(){
                    $paging.find('.page2 i').css({
                        'left' : 'auto',
                        'right' : 0
                    }).animate({ 'width' : 0 }, 1200);

                    $paging.find('.page3 i').css({
                        'left' : 0,
                        'right' : 'auto'
                    }).animate({ 'width' : '100%' }, 1200, function(){
                        $mainWrap.removeClass('pointerNone');
                    });
                });

                $spread.css({
                    'left' : spread().right,
                    'transition' : ''
                });
                $mainWrap.addClass('right').removeClass('left center');
            }
        }
    });

    // 중앙(#sign)으로 이동
    AlignCenter = function(){
        if( !$mainWrap.hasClass('pointerNone') ){
            $mainWrap.addClass('pointerNone');

            if($mainWrap.hasClass('left')){
                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : '100%' }, 800);

                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0,
                }).animate({ 'width' : 0 }, 800, function(){
                    $mainWrap.removeClass('pointerNone');
                });
            } else if ($mainWrap.hasClass('right')){
                $paging.find('.page2 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : '100%' }, 800);

                $paging.find('.page3 i').css({
                    'left' : 0,
                    'right' : 'auto',
                }).animate({ 'width' : 0 }, 800, function(){
                    $mainWrap.removeClass('pointerNone');
                });
            }

            $spread.css({
                'left' : spread().center,
                'transition' : 'all 2s ease-in-out'
            });
            $mainWrap.addClass('center').removeClass('left right');
        }
    }
    
    // resize 적용시
    $(window).on('resize', function(){
        if ( $mainWrap.hasClass('right') ){            
            $spread.css({
                'left' : spread().right,
                'transition' : 'all 0s'
            });
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 페이징 */
    $paging.find('.page1').on('click', function() {
        $sign.find('.btn_shop').click();
    });

    $paging.find('.page2').on('click', function() {
        AlignCenter();
    });

    $paging.find('.page3').on('click', function() {
        $sign.find('.btn_fa').click();
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    //var sf = new Snowflakes({
    //    color: "#ffffff"
    //});





})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...