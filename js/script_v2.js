$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    /* WRAP */
    $wrap = $('#wrap');

    $wrap.css({
        'visibility':'visible',
        'opacity' : 1,
    });


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 메인 비주얼 */
    var $mainWrap = $('#wrap');
    var $wrap = $('#secVisual');
    var $gate = $wrap.find('.gate');
    var $bg = $wrap.find('.bg');

    /* GATE */
    $gate.find('.btn_fa').on('click', function(){
        swiper.slideTo($wrap.find('.swiper-slide:eq(3)').index(),0,false);
        $mainWrap.addClass('active').attr({
            'slide-index' : 2,
            'data-section':'fa'
        });
        $bg.animate({
            'opacity' : 0
        }, 1000, function(){
            $gate.find('.model').css({
                'transition' : 'all 1.5s',
                'transition-delay' : '0.4s'
            });
            $bg.css('z-index',0);
        });
    });

    $gate.find('.btn_shop').on('click', function(){
        swiper.slideTo($wrap.find('.swiper-slide:eq(1)').index(),0,false);
        $mainWrap.addClass('active').attr({
            'slide-index' : 0,
            'data-section':'shop'
        });
        $wrap.find('.bg').animate({
            'opacity' : 0
        }, 1000, function(){
            $gate.find('.model').css({
                'transition' : 'all 1.5s',
                'transition-delay' : '0.4s'
            });
            $bg.css('z-index',0);
        });
    });


    swiper = new Swiper($wrap.find('.swiper-container'), {
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction : false,
        // },
        effect: 'fade',
        speed: 500,
        loop: true,
        on: {
            slideChangeTransitionStart : function(){
                var $this = $wrap.find('.swiper-slide-active');
                var _index = Number($this.attr('data-swiper-slide-index'));

                $mainWrap.attr('slide-index',_index);
                if (_index < 2){
                    $mainWrap.attr('data-section','shop');
                } else {
                    $mainWrap.attr('data-section','fa');
                }
            }
        },
    });




})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){






})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...