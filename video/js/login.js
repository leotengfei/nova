/**
 * Created by Administrator on 2017/9/24 0024.
 */
$('#loginTab>div:first-child').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
   $('#loginBox form').css('display','none');
    $('#loginForm').css('display','block');
});
$('#loginTab>div:nth-child(2)').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#loginBox form').css('display','none');
    $('#registerForm').css('display','block');
});
//用户名密码验证
//声明表单验证布尔值；
var valiLoginTel;
var valiRegisterTel;
var valiLoginPwd;
var valiRegisterUpwd;
var valiRegisterUpwdAagin;
$('#loginTel').blur(function () {
    var regtel=/^[1][3,4,5,7,8][0-9]{9}$/i;
      valiLoginTel=regtel.test($(this).val());
    if(!valiLoginTel){
        $('#loginMsg').html("<span class='glyphicon glyphicon-minus-sign'></span>请检查电话号码!");
    }else{
        $('#loginMsg').html('&nbsp;');
    }
});
$('#registerTel').blur(function () {
    var regtel=/^[1][3,4,5,7,8][0-9]{9}$/i;
     valiRegisterTel=regtel.test($(this).val());
    if(!valiRegisterTel){
        $('#loginMsg').html("<span class='glyphicon glyphicon-minus-sign'></span>请检查电话号码!");
    }else{
        $('#loginMsg').html('&nbsp;');
    }
});
$('#loginUpwd').blur(function () {
    //密码正则验证6-12位数字或字母
    var regpwd=/^[\d,a-z,A-Z]{6,12}$/i;
    valiLoginPwd=regpwd.test($(this).val());
    if(!valiLoginPwd){
        $('#loginMsg').html("<span class='glyphicon glyphicon-minus-sign'></span>请确保密码为6-12位字母或数字!");
    }else{
        $('#loginMsg').html('&nbsp;');
    }
});
$('#registerUpwd').blur(function () {
    //密码正则验证6-12位数字或字母
    var regpwd=/^[\d,a-z,A-Z]{6,12}$/i;
    valiRegisterUpwd=regpwd.test($(this).val());
    if(!valiRegisterUpwd){
        $('#loginMsg').html("<span class='glyphicon glyphicon-minus-sign'></span>请确保密码为6-12位字母或数字!");
    }else{
        $('#loginMsg').html('&nbsp;');
    }
});
$('#registerUpwdAagin').blur(function () {
    valiRegisterUpwdAagin=$(this).val()===$('#registerUpwd').val();
    if(!valiRegisterUpwdAagin){
        $('#loginMsg').html("<span class='glyphicon glyphicon-minus-sign'></span>请检查两次输入的密码是否相同！");
    }else{
        $('#loginMsg').html('&nbsp;');
    }
});

//点击登陆
$('#btnLogin').click(function () {
    var loginTel=$('#loginTel').val();
    var loginUpwd=$('#loginUpwd').val();
   if(valiLoginTel&&valiLoginPwd){
       //console.log(loginTel,loginUpwd);
       $.ajax({
           type:'POST',
           url:'data/login.php',
           data:{loginTel:loginTel,loginUpwd:loginUpwd},
           success: function (data) {
               if(data.code==400){
                   $('#loginMsg').html('用户名或密码错误！');
               }else if(data.code==200){
                   //登陆后调转回上一页
                   var lastPage=document.referrer;
                    if(lastPage===''||lastPage===null){
                        location.replace('selectClass.html');
                    }else{
                        location.replace(lastPage);
                    }

                  // alert('uid'+data.uid);
                   sessionStorage['utel']=loginTel;
                   sessionStorage['uid']=data.uid;
               }
               //console.log(data);
           }
       })
   }else{
	   $('#loginMsg').html('用户名或密码错误！');
	   }
});
//点击注册
$('#btnRegister').click(function () {
    var registerTel=$('#registerTel').val();
    var registerUpwd=$('#registerUpwd').val();
    if(valiRegisterTel&&valiRegisterUpwd&&valiRegisterUpwdAagin){
        console.log(registerTel,registerUpwd);
        $.ajax({
            type:'POST',
            url:'data/register.php',
            data:{registerTel:registerTel,registerUpwd:registerUpwd},
            success: function (data) {
                if(data.code==400){
                    $('#loginMsg').html('注册失败！');
                }else if(data.code==401){
                    $('#loginMsg').html('用户名已被占用！');
                }else if(data.code==200){
                    // 注册成功跳转回上一页
                    var lastPage=document.referrer;
                    if(lastPage===''||lastPage===null){
                        location.replace('selectClass.html');
                    }else{
                        location.replace(lastPage);
                    }
                    //alert(data.uid);
                    sessionStorage['utel']=registerTel;
                    sessionStorage['uid']=data.uid;
                }
                //console.log(data);
            }
        })
    }
});