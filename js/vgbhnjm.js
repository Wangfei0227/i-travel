i = 0;
//滚动
function autoScroll(obj) {
    if(i<3){
        $(obj).find("ul").animate({
            marginTop: -$(this).height()
        }, 1800, function() {
            $(this).css({
                marginTop: "0rem"
            }).find("li:first").appendTo(this);
            $(this).find("li:first").find("h3").animate({
                opacity:"1",
                fontSize:"3rem",
            },1000,function(){
                $(this).next("p").animate({
                    opacity:"1",
                    fontSize:"3.5rem",
                },1000,function(){
                    i++;
                });
            });
        })
    };
}

$(function() {
    setInterval('autoScroll(".jc_main01")',4300);
})