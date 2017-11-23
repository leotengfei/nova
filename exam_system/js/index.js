/**
 * Created by Administrator on 2017/11/15 0015.
 */
//选择区域点击事件
$('.area').click(function () {
   console.log($(this).html());
    sessionStorage['area']=$(this).html();
    $(this).css('color','red').siblings().css('color','#000');
});

//下一步按钮点击事件
$('#btn_next').click(function () {
   if(sessionStorage['area']===undefined){
       alert('请选择区域！')
   }else{
       location.href='login.html';
   }
});