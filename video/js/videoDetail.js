/**
 * Created by Administrator on 2017/9/22 0022.
 */
$('#videoIntro>ul>li:first-child').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#videoIntro>div').css('display','none');
    $('#courIntro').css('display','block');
});
$('#videoIntro>ul>li:nth-child(2)').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#videoIntro>div').css('display','none');
    $('#teachIntro').css('display','block');
});

//点击跳转
$('#videoDetail>div:first-child>p,#viewVideo').click(function () {
    window.location.href='player.html';
});