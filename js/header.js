/*鼠标经过父级，子级隐藏*/
function shower(clsParent, clsChild) {
    $(clsParent).hover(function () {
        $(this).children(clsChild).addClass('blo');
    }, function () {
        $(this).children(clsChild).removeClass('blo');
    });
}
shower(".i-top-phone", ".i-top-appL");
shower(".i-top-phone", ".i-top-app-wei");
/* nav 点击添加current类*/
$('.i-nav li').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
});
