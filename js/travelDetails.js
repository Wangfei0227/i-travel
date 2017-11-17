$(function () {
    $(document).scroll(function(){
        var top = $(document).scrollTop();
            console.log(top);
            $('.bought-box').css({position:'fixed',top:'0'});

            if(top < 130 || top >= 900) {
                $('.bought-box').css('position','relative');
            }


    });
    // $('#fullpage').fullpage();
    var $mlNav = $('.ml-nav');
    $('#fullpage').fullpage({
        verticalCentered: !1,
        navigation: !0,
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && direction == 'up') {
                $mlNav.animate({
                    top: 119
                }, 680);
            } else if (index == 1 && direction == 'down') {
                $mlNav.animate({
                    top: 0
                }, 400);
            } else if (index == 3 && direction == 'up') {
                $mlNav.animate({
                    top: 0
                }, 500);
            } else {
                $mlNav.animate({
                    top: -66
                }, 400);
            }
            $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css("background", "#fff");
            if ((index == 5 && direction == 'down') || index == 6 || index == 7) {
                $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css("background", "#000")
            } else if (index == 4 && direction == 'down') {
                $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css("background", "#000")
            }
        }
    });


    // 右边侧边栏点击
    $('.rightFixed > li').on('click',function () {
        var index = $(this).index();
        $(this).css('transform',' scale(2.5)').siblings().css('transform',' scale(1)');
        $('body').stop().animate({scrollTop:$('.divSize').eq(index).offset().top},500);
        if(index > 2){
            $('.rightFixed > li').css('backgroundColor','black');
        }else{
            $('.rightFixed > li').css('backgroundColor',' rgba(255,255,255,.5)');
        }

    })



    // 整屏滚动中蓝色轮播图
    var index = 0;
    var timer = null;
    var clear_timer = null;

    $('.yuan > li').eq(0).addClass('bgc');
    $('.bannerBox > li').eq(0).css('display','block');
    function move(){
        clearTimeout(clear_timer);
        clear_timer = setTimeout(function(){
            index = index > 2 ? 0 : index;
            index = index < 0 ? 2 : index;
            $('.bannerBox > li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
            $('.yuan > li').eq(index).addClass('bgc').siblings().removeClass('bgc');
        },150);

    }

    timer = setInterval(function(){
        index++;
        move();
    },1500);


    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){

        timer = setInterval(function(){
            index++;
            move();
        },1500);

    });

    $('.yuan > li').on('mouseenter',function(){
        index = $(this).index();
        move();
    });








    // 侧边控制轮播
    var index1 = 0;
    var timer1 = null;
    var clear_timer1 = null;

    $('.leftTab > li').eq(0).addClass('active');
    $('.tourPlanR > li').eq(0).css('display','block');
    function move1(){
        clearTimeout(clear_timer1);
        clear_timer1 = setTimeout(function(){
            index1 = index1 > 3 ? 0 : index1;
            index1 = index1 < 0 ? 3 : index1;
            $('.tourPlanR > li').eq(index1).stop().fadeIn().siblings().stop().fadeOut();
            $('.leftTab  > li').eq(index1).addClass('active').siblings().removeClass('active');
        },150);

    }

    timer1 = setInterval(function(){
        index1++;
        move1();
    },1500);


    $('.tourPlan').hover(function(){
        clearInterval(timer1);
    },function(){

        timer1 = setInterval(function(){
            index1++;
            move1();
        },1500);

    });

    $('.leftTab  > li').on('mouseenter',function(){
        index1 = $(this).index();
        move1();

    });






})