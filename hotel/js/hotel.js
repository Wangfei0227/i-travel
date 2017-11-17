$(function () {
    // 轮播图
   var i_banner =$('.hotel-banner li ') ;
   var i_ctrl =$('.ctrl li');
   var num =0;
    var timer =null;
    i_ctrl.eq(num).addClass('active').siblings().removeClass('active');
  function autoplay() {
      clearInterval(timer);
      timer = setInterval(function () {
          num++;
          if(num == i_ctrl.length+1){
              num=0;
          }
          i_ctrl.eq(num).addClass('active').siblings().removeClass('active');
          i_banner.eq(num).fadeIn(600).siblings().fadeOut(600);
      },2000)
  }
  autoplay();
  $('.hotel-banner').hover(function () {
      clearInterval(timer);
  },function () {
      autoplay();
  });
  i_ctrl.hover(function () {
      clearInterval(timer);
      $(this).addClass('active').siblings().removeClass('active');
      num = $(this).index();
      i_banner.eq(num).fadeIn(600).siblings().fadeOut(600);
  },function () {
      autoplay();
  });


//  手风琴
    var timer2 =null;
    clearTimeout(timer2);
    timer2 = setTimeout(function () {
        $('.img-box ul li').hover(function () {
            $(this).stop().animate({width:400,opacity:1},600).siblings().stop().animate({width:149,opacity:.4},600);
            // $(this).css("opacity",1).siblings().css("opacity",".4");
        },function () {
            $('.img-box ul li').stop().animate({width:195,opacity:1},600);
            // $('.img-box ul li').css("opacity",1);
        });
    },1000);

   // 侧边栏
   //  $(window).scroll(function () {
   //      var num = $(document).scrollTop();
   //      // console.log(num);
   //      num >=370?$('.sidebar').show():$('.sidebar').hide();
   //  });
   //  var index = 0;
   //
   //  $('.sidebar li').on("click",function () {
   //      index=$(this).index();
   //      if(index ==1){
   //          $('body,html').stop().animate({'scrollTop':380},500);
   //          $(this).addClass('active').siblings().removeClass('active');
   //      }else if(index==2){
   //          $('body,html').stop().animate({'scrollTop':1057},500);
   //          $(this).addClass('active').siblings().removeClass('active');
   //      }else if(index==3){
   //          $('body,html').stop().animate({'scrollTop':1857},500);
   //          $(this).addClass('active').siblings().removeClass('active');
   //      }else {
   //          $('body,html').stop().animate({'scrollTop':2357},500);
   //          $(this).addClass('active').siblings().removeClass('active');
   //      }
   //
   //  });

    /*电梯*/
    var h1 = $( '.overseas-box' ).offset().top;
    var h2 = $( '.remen-box' ).offset().top;
    var h3 = $( '.dangji-box' ).offset().top;
    var h4 = $( '.squeezebox' ).offset().top;
    var iWH = 10;

    function change( numy ){
        $('.sidebar ul li').eq(numy).addClass('active').siblings().removeClass('active');
    };

    function userscroll(){
        var iScroll = $( document ).scrollTop();

        if( iScroll+30 >= h4 ){
            change(3);
        }else if( iScroll+30 >= h3 ){
            change(2);
        }else if( iScroll+30 >= h2 ){
            change(1);
        }else if( iScroll+10 >= h1 ){
            $( '.sidebar' ).fadeIn();
            change(0);
        }else{
            $( '.sidebar' ).fadeOut();
        }
    }

    $( document ).scroll( userscroll);

    var arrTop = [ h1,h2,h3,h4 ]

    $( '.sidebar ul li' ).click( function(){
        var numy = $( this ).index();
        change( numy );

        $( document ).off();
        $( 'html,body' ).stop().animate( { 'scrollTop':arrTop[numy] },500,function(){
            $( document ).scroll( userscroll);
        } );
    } );


    // tab栏切换
     $('.title li ').eq(0).addClass('tab-active');
    $('.title li ').on('click',function () {
         index = $(this).index();
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        if(index==0){
            $('#c1').css("display",'block');
            $("#c2").css('display','none');
            $("#c3").css('display','none');
        }else if(index==1){
            $('#c2').css("display",'block');
            $('#c1').css("display",'none');
            $("#c3").css('display','none');
        }else {
            $('#c2').css("display",'none');
            $('#c1').css("display",'none');
            $("#c3").css('display','block');
        }
    })
});

