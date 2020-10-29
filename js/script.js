$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    $('img').on('dragstart', function(event) { event.preventDefault(); });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    let initialX = null,
    initialY = null;

    function initTouch(e) {
        initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
        initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    };

    function swipeDirection(e) {
        if (initialX !== null && initialY !== null) {
        const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`,
            currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

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
    window.addEventListener("mousedown", (e) => {
        initTouch(e),
        window.addEventListener("mousemove", swipeDirection)
    });
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", swipeDirection);
    });

    // 실행
    window.addEventListener("mousedown", (e) => {
        0 === e.button && (
        initTouch(e),
        window.addEventListener("mousemove", swipeDirection)
        )
    });

})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    var $mainWrap = $('#wrap');
    var $paging = $('#pagination');
    var $sign = $('#sign');
    var $spread = $('#spreadBG');
    var winW = window.outerWidth;
    var spreadW = $spread.width();

    setTimeout(function(){
        $mainWrap.addClass('center active');
        $paging.find('.page2 i').css('width','100%');
    },50);


    $paging.find('.page1').on('click', function() {
        $sign.find('.btn_shop').click();
    });

    $paging.find('.page2').on('click', function() {
        AlignCenter();
    });

    $paging.find('.page3').on('click', function() {
        $sign.find('.btn_fa').click();
    });

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

                $spread.css('left',0);
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

            $spread.css('left',0);
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

                $spread.css('left','-2560px');
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

                $spread.css('left','-2560px');
                $mainWrap.addClass('right').removeClass('left center');
            }
        }
    });

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

    toRight = function() {
        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_shop').click();
        } else if ($mainWrap.hasClass('right')){
            AlignCenter();
        }
    }

    toLeft = function() {
        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_fa').click();
        } else if ($mainWrap.hasClass('left')){
            AlignCenter();
        }
    }

    $spread.css('left',Math.abs((spreadW / 2 - winW / 2)) * -1);

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

            $spread.css('left',Math.abs((spreadW / 2 - winW / 2)) * -1);
            $mainWrap.addClass('center').removeClass('left right');
        }
    }




})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){









})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...