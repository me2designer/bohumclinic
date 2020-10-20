$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    // 스크롤 가로 → 세로 방향 변경  
    var scrollLeft=0;
    function scrollVert() {
        $('html,body').off('mousewheel').mousewheel(function(e, delta) {
            this.scrollTop -= (delta * 40);
            e.preventDefault();
            setTimeout(function() {
            if ($(window).scrollTop() + $(window).height() == $(document).height())
                scrollHoriz();
            }, 0)
        });
    }

    function scrollHoriz() {
        $('html,body').off('mousewheel').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 40);
            e.preventDefault();
            scrollLeft=this.scrollLeft
            setTimeout(function() {
            if (scrollLeft == 0) scrollVert();
            }, 0)
        });
    }
    scrollVert();



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* mousemove로 스크롤 이동 */ 
    var curDown = false,
        curYPos = 0,
        curXPos = 0;

    $(window).mousemove(function(m){
    if(curDown){
        window.scrollBy(curXPos - m.pageX, curYPos)
    }
    });

    $(window).mousedown(function(m){
        curYPos = m.pageY;
        curXPos = m.pageX;
        curDown = true;
    });

    $(window).mouseup(function(){
        curDown = false;
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    
    
    setTimeout(function(){
        $('html').scrollLeft('1000');
    }, 50);


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...