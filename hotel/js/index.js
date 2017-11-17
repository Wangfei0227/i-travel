// 首页轮播图
var num = 0;
var timer = null;
var i_circle = $( '.banner .ctrl li' );
var i_banner = $( '.banner ul li' );
// 自动轮播
function autoPlay(){
    timer = setInterval( function(){
        num++;
        if(num == i_circle.length+1){
            num=0;
        }
        i_circle.eq(num).addClass( 'active' ).siblings().removeClass('active');
        i_banner.eq(num).fadeIn(600).siblings().fadeOut();
    },3000 );
}
//调用自动轮播
autoPlay();
// 经过小圆点切换
i_circle.hover( function(){
    clearInterval(timer);
    $( this ).addClass( 'active' ).siblings().removeClass('active');
    num = $( this ).index();
    i_banner.eq(num).fadeIn(600).siblings().fadeOut();
},function(){
    autoPlay();
});
// 鼠标经过banner图事件
i_banner.hover(function(){
    clearInterval(timer);
},function(){
    autoPlay();
});
//

