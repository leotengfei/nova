/**
 * Created by Administrator on 2017/11/13 0013.
 */
$("#header").load("data/header.html");
function changing() {
    document.getElementById('checkpic').src = "img/checkcode.php?" + Math.random();
}
var valiutel = true;
var utel;
$('#utel').blur(function () {
    sessionStorage['utel'] = $(this).val();
    var regtel = /^[1][3,4,5,7,8][0-9]{9}$/ig;
    valiutel = regtel.test($(this).val());
    utel=$(this).val();
    if (!valiutel) {
        $('#loginMsg').html("<span class='glyphicon glyphicon-minus-sign'></span>请检查电话号码!");
    } else {
        $('#loginMsg').html('&nbsp;');
    }
});
//下一步按钮点击事件
$('#next_step').click(function () {
    if (valiutel) {//确保电话号码不为空而且可用
        var checkcode = $('#checkcode').val().toLowerCase().replace(/\s+/g,"");//不区分大小写并去除空格
        //console.log(checkcode);
        $.ajax({
            type: "GET",
            url: "data/img_code.php",//验证图片验证码
            data: {checkcode: checkcode},
            success: function (data) {
                if (data.code == "1") {
                    //btn_land显示，yanzhengma显示,下一步隐藏
                    $('#btn_land').css("display", "block");
                    $("#yanzhengma").css("display", "block");
                    $("#next_step").css("display", "none");
                } else {
                    alert("图片验证码错误！");
                }
            }
        })
    } else {
        alert("请检查电话号码！");
    }
});
//getcode点击事件（获取验证码）
$('#getcode').click(function () {
    $('#getcode').addClass('disabled');
    $('#getcode').prop('disabled', true);
    var utel=$('#utel').val();
    $.ajax({
        type: "GET",
        url: "data/api_demo/SmsDemo.php",
        data: {utel: utel},
        success: function (data) {
            //console.log(data);
            //alert(data);
            var second = 60;
            var timmer = setInterval(function () {
                $('#getcode').html(second + "秒！");
                second--;
                //console.log(second);
                if (second < 1) {
                    clearInterval(timmer);
                    changing();
                    $('#checkcode').val();
                    $('#getcode').removeClass('disabled');
                    $('#getcode').prop('disabled', false);
                    $('#getcode').html("获取验证码");
                }
            }, 1000);
        },
        error: function (data) {
            alert("请刷新页面重试！");
        }
    });
});

//btn_land登陆按钮点击事件
$('#btn_land').click(function () {
    var textcode = $('#textcode').val();
    $.ajax({
        type: "POST",
        url: "data/text_code.php",
        data: {textcode: textcode},
        success: function (data) {
            //console.log(data.msg);
            if (data.code == '1') {//验证码正确（判断是否1.未存在insert into/存在2.已经填写过详细信息，填过=》test.html;未填过=》shenfen.html）
                $.ajax({//判断账号是否存在
                    type: "POST",
                    url: "data/isExist.php",
                    data: {utel: sessionStorage['utel'], area: sessionStorage['area']},
                    success: function (data) {
                        console.log(data);
                        if (data.code == "2" || data.code == '1') {
                            location.href = "shenfen.html";
                        } else if (data.code == '3') {
                            location.href = "score.html";
                        } else if (data.code == '4') {
                            location.href = "test.html";
                        } else if (data.code == '5') {
                            location.href = 'score.html';
                        }
                    }
                })
            } else {
                alert('请检查短信验证码！');
            }
        }
    })
});

