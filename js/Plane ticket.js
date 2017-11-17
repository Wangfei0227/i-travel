/*折线图*/

  // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

      
        var option = {
        
    title: {
        text: '机票价格走势图',
      /*  subtext: '纯属虚构'*/
    },
    tooltip: {
        trigger: 'axis'
    },

  legend: {
        data:['北京-上海','北京-长沙','北京-深圳']
    },
    /*右上角工具条*/
   /* toolbox: {
        show: true,
        feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
        }
    },*/
     calculable : true,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12-01','12-10','12-20','12-30','01-01','01-10','01-20','01-30','02-01','02-10','02-20','02-30']
    },
    yAxis: {
        type: 'value',
    },
      /* yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
                     ],*/
    series: [{
        name: '北京-上海',
        type: 'line',
       /* smooth: true,*/
        data: [723, 642, 618, 745, 648, 649, 700, 745, 618, 765, 779, 600],
         markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
    },
    {
        name: '北京-长沙',
        type: 'line',
       /* smooth: true,*/
        data: [443, 352, 418, 345, 448, 349,300,352,418,445,348,449,300],
         markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
    },
    {
        name: '北京-深圳',
        type: 'line',
        /*smooth: true,*/
        itemStyle : {  
               normal : {  
                color:'#00FF00',  
                 lineStyle:{  
                      color:'#00FF00'  
                           }  
                         }  
                    },  
        data: [943, 752, 718, 885, 848, 890,900,972,998,825,888,949,800],
         markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
    }]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


/*
        item切换*/
//tab栏切换
$( '.i_tab_l>li>a' ).click( function(){
    $( this ).parent('li').addClass('cur').siblings().removeClass('cur');
    $( this ).parent('li').addClass('show').siblings().removeClass('show');
} );

/*嵌套Tab*/
function doubleTab ( aEle , bEle , cls){
    $( aEle ).click( function(){
        $( this ).addClass(cls).siblings().removeClass(cls);
        var num = $( this ).index();
        $( bEle ).eq(num).addClass('i_show').siblings().removeClass('i_show');
    } );
}

doubleTab( '.travel .i_title>a' , '.travel .discount' , 'line');
doubleTab( '.hotel .i_title>a' , '.hotel .discount' , 'line');
doubleTab( '.fly .i_title>a' , '.fly .discount' , 'line');
doubleTab( '.idea .i_title>a' , '.idea .discount' , 'line');
