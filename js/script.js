$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    window.onresize = function() {
        document.location.reload();
    };

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
    var $sign = $('#sign');
    var $spread = $('#spreadBG');
    var winW = window.outerWidth;
    var spreadW = $spread.width();

    setTimeout(function(){
        $spread.css('transition','all 1s ease-in-out');
    },50);


    // shop 화면이동
    $sign.find('.btn_shop').on('click', function () {
        $spread.css('left',0);
        $mainWrap.addClass('left');
    });

    // FA 화면이동
    $sign.find('.btn_fa').on('click', function () {
        $spread.css('left',(spreadW - winW) * -1);
        $mainWrap.addClass('right');
    });



    $(window).bind('wheel', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_shop').click();
            } else if ($mainWrap.hasClass('right')){
                $mainWrap.removeClass('right');
                $spread.css('left',(spreadW / 2 - winW / 2) * -1);
            }
        }
        else {
            // scroll down
            console.log("스크롤 아래로");
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_fa').click();
            } else if ($mainWrap.hasClass('left')){
                $mainWrap.removeClass('left');
                $spread.css('left',(spreadW / 2 - winW / 2) * -1);
            }
        }
    });

    toRight = function() {
        console.log("to right");

        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_shop').click();
        } else if ($mainWrap.hasClass('right')){
            $mainWrap.removeClass('right');
            $spread.css('left',(spreadW / 2 - winW / 2) * -1);
        }
    }

    toLeft = function() {
        console.log("to left");

        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_fa').click();
        } else if ($mainWrap.hasClass('left')){
            $mainWrap.removeClass('left');
            $spread.css('left',(spreadW / 2 - winW / 2) * -1);
        }
    }

    $spread.css('left',Math.abs((spreadW / 2 - winW / 2)) * -1);


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){









})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...