$(function () {
   // 懒加载开始
    $("img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 200,
//            event : "click"
    });
   // 懒加载结束
    var bannerleftone=$('.banner-left ul>li:nth-of-type(5)');
    var bannerlefttwo= $('.banner-left ul>li:nth-of-type(6)');
    bannerleftone.mouseenter(function () {
       $('.banner-left ul>li:nth-of-type(6)').css({borderRight:'none'});
   });
    bannerleftone .mouseleave(function () {
        $('.banner-left ul>li:nth-of-type(6)').css({borderRight:'2px solid #1ab2db'});
    });
    bannerlefttwo.mouseenter(function () {
        $('.banner-left ul>li:nth-of-type(6)').css({borderRight:'none'});
    });
    bannerlefttwo .mouseleave(function () {
        $('.banner-left ul>li:nth-of-type(6)').css({borderRight:'2px solid #1ab2db'});
    });
//选择城市
    var cityname=$('.city-name');
    var flag=true;
    cityname.click(function () {
       if (flag){
           $('.city-box').show();
           flag=false;
       }else{
           $('.city-box').hide();
           flag=true;
       }
    });
//获取选择城市
var cnames=$('.c-names>ul>li');
    cnames.click(function () {
    var index=$(this).index();
    $('.names').html(cnames.eq(index).html());
        $('.city-box').hide();
        flag=true;
});
//左侧快速导航栏
    var fastmenusli=$('.fast-menus>ul>li');
    fastmenusli.click(function () {
        var hbody= $('html,body');
        var index=$(this).index();
        // alert(index);
        switch (index){
            case 0:break;
            case 1:
                hbody.animate({scrollTop:500+'px'},500);
                break;
            case 2:
                hbody.animate({scrollTop:1100+'px'},500);
                break;
            case 3:
                hbody.animate({scrollTop:1900+'px'},500);
                break;
            case 4:
                hbody.animate({scrollTop:2600+'px'},500);
                break;
        }
    });
fastmenusli.mouseenter(function () {
    $(this).css({backgroundColor:'#003399',color:'#fff'}).siblings().css({backgroundColor:'#e5e5e5',color:'#a8a8a8'});
});
    //动态切换左侧按钮栏
    $(document).scroll(function () {
        //获取被卷走的文档的距离
        var top=$(document).scrollTop();
        console.log(top);
        if (top>=400){
            $('.fast-menus').stop().fadeIn();
            $('.fast-menus').css({top:(top+180)+'px'});
        }else{
            $('.fast-menus').stop().fadeOut();
        }
        if (top>=400 && top<1000){
            fastmenusli.eq(1).css({backgroundColor:'#003399',color:'#fff'});
        }else{
            fastmenusli.eq(1).css({backgroundColor:'#e5e5e5',color:'#a8a8a8'});
        }
        if (top>=1000 && top<1700){
            fastmenusli.eq(2).css({backgroundColor:'#003399',color:'#fff'});
        }else{
            fastmenusli.eq(2).css({backgroundColor:'#e5e5e5',color:'#a8a8a8'});
        }
        if (top>=1700 && top<2400){
            fastmenusli.eq(3).css({backgroundColor:'#003399',color:'#fff'});
        }else{
            fastmenusli.eq(3).css({backgroundColor:'#e5e5e5',color:'#a8a8a8'});
        }
        if (top>=2400 && top<=3638){
            fastmenusli.eq(4).css({backgroundColor:'#003399',color:'#fff'});
        }else{
            fastmenusli.eq(4).css({backgroundColor:'#e5e5e5',color:'#a8a8a8'});
        }
    });

//





});//end 结尾