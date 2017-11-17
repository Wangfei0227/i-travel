$(function () {



    $('.destin').focus(function () {
        $('.cityBox').css('display','block');
    })
    $('.destin').blur(function () {
        $('.cityBox').css('display','none');
    })






    // banner上的tab栏
    $('.i-tab-l > li').eq(0).addClass('change');
    $('.i-tab-box').eq(0).css('display','block');
    $('.i-tab-l > li').on('click',function () {
        var index = $(this).index();
        $(this).addClass('change').siblings().removeClass('change');
        $('.i-tab-box').eq(index).css('display','block').siblings().css('display','none');
    })

    $('.i-title > li').eq(0).addClass('line');
    $('.i-hotel-title > li').eq(0).addClass('line');
    $('.i-track-title > li').eq(0).addClass('line');
    $('.i-title > li').on('click',function () {
        $(this).addClass('line').siblings().removeClass('line');
    })
    $('.i-sale-show > .form').eq(0).css('display','block');
    $('.i-hotel-show > .form').eq(0).css('display','block');
    $('.i-hotel-title > li').on('click',function () {
        var index = $(this).index();
        $('.i-hotel-show > .form').eq(index).css('display','block').siblings().css('display','none');
    })




    // 特卖会
    $('.sale .tab1 > li').eq(0).addClass('line');
    $('.sale .hui > .saleNum').eq(0).css('display','block');
    $('.sale .tab1 > li').on('click',function () {
        var index = $(this).index();
        $(this).addClass('line').siblings().removeClass('line');
        $('.sale .hui > .saleNum').eq(index).css('display','block').siblings().css('display','none');
    })






    $('.SA li').hover(function () {
        var index = $(this).index();
        bottom =   $('.SA li .sale-p ').eq(index).css('bottom');
        $('.SA li .sale-p ').eq(index).css('bottom','0');
    },function () {
        var index = $(this).index();
        $('.SA li .sale-p ').eq(index).css('bottom',bottom);
    })
    $('.SA1 li').hover(function () {
        var index = $(this).index();
        bottom =   $('.SA1 li .sale-p ').eq(index).css('bottom');
        $('.SA1 li .sale-p ').eq(index).css('bottom','0');
    },function () {
        var index = $(this).index();
        $('.SA1 li .sale-p ').eq(index).css('bottom',bottom);
    })
    $('.SA2 li').hover(function () {
        var index = $(this).index();
        bottom =   $('.SA2 li .sale-p ').eq(index).css('bottom');
        $('.SA2 li .sale-p ').eq(index).css('bottom','0');
    },function () {
        var index = $(this).index();
        $('.SA2 li .sale-p ').eq(index).css('bottom',bottom);
    })



    // 酒店
    $('.hotel12 > li').eq(0).addClass('line');
    $('.hotel-box > div').eq(0).css('display','block');
    $('.hotel12 > li').on('click',function () {
        var index = $(this).index();
        $(this).addClass('line').siblings().removeClass('line');
        $('.hotel-box > div').eq(index).css('display','block').siblings().css('display','none');
    })



    // 机票
    $('.ticket-top li').eq(0).addClass('line');
    $('.ticket-show > .ticketNum').eq(0).css('display','block');
    $('.tickeTop li').on('click',function () {
        var index = $(this).index();
        $(this).addClass('line').siblings().removeClass('line');
        $('.ticket-show> .ticketNum1').eq(index).css('display','block').siblings().css('display','none');
    })

    // 旅游
    $('.travel-top li').eq(0).addClass('line');
    $('.travel-show > .travelNum').eq(0).css('display','block');
    $('.travel-top li').on('click',function () {
        var index = $(this).index();
        $(this).addClass('line').siblings().removeClass('line');
        $('.ticket-show> .travelNum').eq(index).css('display','block').siblings().css('display','none');
    })


    // 上下轮播
    var timer = null;
    var index = 0;
    var leader = 0;
    setInterval(function () {

        index--;
        if(index<=-3){
            index=0;
        }
        clearInterval(timer);
        timer=setInterval(function(){
            leader=leader+(index*168-leader)/10;
            $('.organization ul').css('top',leader);
        },20);
    },2000)
})