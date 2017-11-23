/**
 * Created by Administrator on 2017/11/9 0009.
 */
$("#header").load("data/header.html");
var isLanded= function () {
    //判断是否登陆
    $.ajax({
        url: 'data/logininfo.php',
        success: function(result){
            if(result.utel===null||result.uid===null){
                location.href='index.html';
                sessionStorage['uid']=result.uid;
            }
        }
    });
};
//改变网站头部登陆信息
$(function () {
    $.ajax({
        url: 'data/logininfo.php',
        success: function(result){
            if(result.utel!==null&&result.uid!==null){
                $('#utel').html((result.utel).slice(0,3)+"***");
                sessionStorage['utel']=result.utel;
                sessionStorage['uid']=result.uid;
                //console.log(sessionStorage['utel']);
            }
        }
    });
});