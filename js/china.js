var myChart = echarts.init(document.querySelector('#maxz'));
var option = {
    title: {
        text: '预计三天内全国旅游景点人数图',
         subtext: '纯属虚构',
        left:'center'
    },
    tooltip: {
//                    show: false //不显示提示标签
        formatter: '{b}', //提示标签格式
        backgroundColor:"#cbcbcb",//提示标签背景颜色
        textStyle:{color:"#fff"} //提示标签字体颜色
    },
    series: [{
        type: 'map',
        mapType: 'china',
      /*  label: {
            normal: {
                show: true,//显示省份标签
                textStyle:{color:"#cbcbcb"}//省份标签字体颜色
            },
            emphasis: {//对应的鼠标悬浮效果
                show: true,
                textStyle:{color:"#cbcbcb"}
            }
        },*/

        itemStyle: {
            normal: {
                borderWidth: .8,//区域边框宽度
                borderColor: '#080101',//区域边框颜色
                areaColor:"#080101",//区域颜色
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#080101',
                areaColor:"#040101",
            }
        },
        data:[
            {name:'河北', selected:true},//福建为选中状态
            {name:'内蒙古', selected:true},
            {name:'山东', selected:true},
            {name:'河南', selected:true},
            {name:'湖北', selected:true},
            {name:'河南', selected:true}
        ],

    }],
};

myChart.setOption(option);
myChart.on('mouseover', function (params) {
    var dataIndex = params.dataIndex;
    console.log(params);
});