/**
 * Created by Administrator on 2017/10/24 0024.
 */

//初始化姓名，电话判断布尔值
var vali_uname = false;
var vali_utel = false;
var regname = /^[\u3e00-\u9fa5]{2,5}$/i;
var regtel = /^[1][3,4,5,7,8,9][0-9]{9}$/i;

// 获取短信验证码
$('#sendcode').click(function () {
    //获取各个input的值
    var utel = $('#utel').val();
    if (regtel.test(utel)) {
        // 电话号码格式正确
        $.ajax({
            type: 'POST',
            url: 'data/isphonerepeat.php',
            data: {
                utel: utel
            },
            success: function (data) {
                if (data.code == 1) {
                    // 电话号码可用
                    $('#sendcode').addClass('disabled');
                    $('#sendcode').prop('disabled', true);
                    $.ajax({
                        type: "GET",
                        url: "data/api_demo/SmsDemo.php",
                        data: {
                            utel: utel
                        },
                        success: function (data) {
                            //console.log(data);
                            //alert(data);
                            var second = 60;
                            var timmer = setInterval(function () {
                                $('#sendcode').html(second + "秒！");
                                second--;
                                //console.log(second);
                                if (second < 1) {
                                    clearInterval(timmer);
                                    $('#sendcode').removeClass('disabled');
                                    $('#sendcode').prop('disabled', false);
                                    $('#sendcode').html("获取验证码");
                                }
                            }, 1000);
                        },
                        error: function (data) {
                            alert("请刷新页面重试！");
                        }
                    })
                } else {
                    alert('该电话号码已经预约过，请检查电话号码或更换电话')
                }
            }
        })
    } else {
        alert('请检查电话号码格式！')
    }

})

$('#btn-apoint').click(function () {
    //console.log(1);
    //获取各个input的值
    var uname = $('#uname').val();
    var utel = $('#utel').val();
    var mycode = $('#mycode').val();
    var msgcode = $('#msgcode').val();


    //定义正则
    vali_uname = regname.test(uname);
    vali_utel = regtel.test(utel);
    console.log(vali_uname, vali_utel);
    if (!vali_uname || !vali_utel) {
        $('#msg').html('请检查姓名或者电话格式！');
        $('#myModal').modal('show');
        return;
    }
    if (!mycode) {
        $('#msg').html('请填写预约号');
        $('#myModal').modal('show');
        return;
    }
    // 检查短信验证码
    $.ajax({
        type: "POST",
        url: "data/text_code.php",
        data: {
            textcode: msgcode
        },
        success: function (data) {
            //console.log(data.msg);
            if (data.code == '1') { //验证码正确
                $.ajax({
                    type: 'POST',
                    data: {
                        uname: uname,
                        mycode: mycode,
                        utel: utel
                    },
                    url: 'data/insert.php',
                    success: function (data) {
                        console.log(data.msg);
                        var html = `
                            <h4 style="color:rgb(8, 156, 94);" class="text-center">预约成功！请截屏保存结果</h4>
                            <img src="img/biaoge.png" alt="" class="chart">
                            `;
                        $('#msg').parent().html(html);
                        $('#myModal').modal('show');

                        $('#uname').val('');
                        $('#mycode').val('');
                        $('#utel').val('');
                        $('#checkcode').val('');
                        $('#msgcode').val('');

                    }
                })
            } else {
                alert('请检查短信验证码！');
            }
        }
    })
});