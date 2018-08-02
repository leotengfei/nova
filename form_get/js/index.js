/**
 * Created by Administrator on 2017/10/24 0024.
 */

//初始化姓名，电话判断布尔值
var vali_uname = false;
var vali_utel = false;
var canPhoneUse = false;
var regname = /^[\u3e00-\u9fa5]{2,5}$/i;
var regtel = /^[1][3,4,5,7,8,9][0-9]{9}$/i;
var arr=[];
var fileSelectNum = 0;

$('#utel').blur(function(){
    var num = $(this).val()
    if(!regtel.test(num)){
        alert('请填入正确电话号码！')
    }else{
        $.ajax({
            type:'POST',
            url:'data/isphonerepeat.php',
            data:{
                utel:num
            },
            success:function(res){
                console.log(res)
                if(res.code===1){
                    // 电话号码不重复，可以使用
                    canPhoneUse = true;
                }else{
                    // 电话号码重复，不可以使用
                    alert('该电话号码已经报过名，请勿重复报名!')
                }
            }
        })
    }
})


$('#file-fr').fileinput({
    theme: 'fa',
    language: 'zh',
    showCaption: false,
    showRemove: false,
    uploadUrl: 'https://mokey.club/adminUploads/upload',
    maxFilesNum: 10,
    dropZoneEnabled: false,//是否显示拖拽区域
    browseClass: "btn btn-inverse btn-block",
    uploadClass:"btn btn-warning btn-block",
    allowedFileExtensions: ['bmp','jpeg','jpg', 'png', 'gif','tiff','webp','svg']
});
$("#file-fr").on("filebatchselected", function(event, files) {
    fileSelectNum = files.length
    console.log(fileSelectNum)
});
$("#file-fr").on("fileuploaded", function (event, data, previewId, index) {
    //console.log(data.response)
    arr=arr.concat(data.response)
    for(var i=0;i<arr.length;i++){
        var j=arr[i].split('/').length;
        arr[i]=arr[i].split('/')[j-1]
        console.log(arr[i])
    }
    console.log(arr)
});

// 获取短信验证码
// $('#sendcode').click(function () {
//     //获取各个input的值
//     var utel = $('#utel').val();
//     if (regtel.test(utel)) {
//         // 电话号码格式正确
//         $.ajax({
//             type: 'POST',
//             url: 'data/isphonerepeat.php',
//             data: {
//                 utel: utel
//             },
//             success: function (data) {
//                 if (data.code == 1) {
//                     // 电话号码可用
//                     $('#sendcode').addClass('disabled');
//                     $('#sendcode').prop('disabled', true);
//                     $.ajax({
//                         type: "GET",
//                         url: "data/api_demo/SmsDemo.php",
//                         data: {
//                             utel: utel
//                         },
//                         success: function (data) {
//                             //console.log(data);
//                             //alert(data);
//                             var second = 60;
//                             var timmer = setInterval(function () {
//                                 $('#sendcode').html(second + "秒！");
//                                 second--;
//                                 //console.log(second);
//                                 if (second < 1) {
//                                     clearInterval(timmer);
//                                     $('#sendcode').removeClass('disabled');
//                                     $('#sendcode').prop('disabled', false);
//                                     $('#sendcode').html("获取验证码");
//                                 }
//                             }, 1000);
//                         },
//                         error: function (data) {
//                             alert("请刷新页面重试！");
//                         }
//                     })
//                 } else {
//                     alert('该电话号码已经预约过，请检查电话号码或更换电话')
//                 }
//             }
//         })
//     } else {
//         alert('请检查电话号码格式！')
//     }

// })

// $('#btn-apoint').click(function () {
//     //console.log(1);
//     //获取各个input的值
//     var uname = $('#uname').val();
//     var utel = $('#utel').val();
//     var mycode = $('#mycode').val();
//     var msgcode = $('#msgcode').val();


//     //定义正则
//     vali_uname = regname.test(uname);
//     vali_utel = regtel.test(utel);
//     console.log(vali_uname, vali_utel);
//     if (!vali_uname || !vali_utel) {
//         $('#msg').html('请检查姓名或者电话格式！');
//         $('#myModal').modal('show');
//         return;
//     }
//     if (!mycode) {
//         $('#msg').html('请填写预约号');
//         $('#myModal').modal('show');
//         return;
//     }
//     // 检查短信验证码
//     $.ajax({
//         type: "POST",
//         url: "data/text_code.php",
//         data: {
//             textcode: msgcode
//         },
//         success: function (data) {
//             //console.log(data.msg);
//             if (data.code == '1') { //验证码正确
//                 $.ajax({
//                     type: 'POST',
//                     data: {
//                         uname: uname,
//                         mycode: mycode,
//                         utel: utel
//                     },
//                     url: 'data/insert.php',
//                     success: function (data) {
//                         console.log(data.msg);
//                         var html = `
//                             <h4 style="color:rgb(8, 156, 94);" class="text-center">预约成功！请截屏保存结果</h4>
//                             <img src="img/biaoge.png" alt="" class="chart">
//                             `;
//                         $('#msg').parent().html(html);
//                         $('#myModal').modal('show');

//                         $('#uname').val('');
//                         $('#mycode').val('');
//                         $('#utel').val('');
//                         $('#checkcode').val('');
//                         $('#msgcode').val('');

//                     }
//                 })
//             } else {
//                 alert('请检查短信验证码！');
//             }
//         }
//     })
// });
$('#btn-apoint').click(function () {
    //console.log(1);
    //获取各个input的值
    var uname = $('#uname').val();
    var utel = $('#utel').val();
    var loca = $('#loca').val();
    var grade = $('.myradio input[name="grade"]:checked ').val();
    console.log(grade)
    var imgArr = arr.join(',')
    console.log(uname,utel,loca)
    console.log(imgArr)

    //定义正则
    vali_uname = regname.test(uname);
    vali_utel = regtel.test(utel);
    console.log(vali_uname, vali_utel);
    if (!vali_uname || !vali_utel) {
        $('#msg').html('请检查姓名或者电话格式！');
        $('#myModal').modal('show');
        return;
    }
    if (!grade) {
        $('#msg').html('请选择年级');
        $('#myModal').modal('show');
        return;
    }
    if (!loca) {
        $('#msg').html('请填写校区');
        $('#myModal').modal('show');
        return;
    }
    if (arr.length===0) {
        $('#msg').html('请上传自己的笔记图片！');
        $('#myModal').modal('show');
        return;
    }
    if (!canPhoneUse) {
        $('#msg').html('相同电话号码，请勿重复报名！');
        $('#myModal').modal('show');
        return;
    }

    // 插入信息
    $.ajax({
        type: 'POST',
        data: {
            uname: uname,
            utel: utel,
            loca:loca,
            grade:grade,
            img:imgArr
        },
        url: 'data/insert.php',
        success: function (data) {
            console.log(data.msg);
            if(data.code===1){
                var html = `
                <h4 style="color:rgb(8, 156, 94);" class="text-center">报名成功！</h4>
                <h6 style="text-align:center;color:#333;">活动进程请关注无线星空官网wxxk.org</h6>
                <h6 style="text-align:center;color:#333;">或官方微信公众号</h6>
                <p style="text-align:center;"><img src="img/wx.jpg" style="width:100%;"></p>
                `;
            $('#msg').parent().html(html);
            $('#myModal').modal('show');

            $('#uname').val('');
            $('#utel').val('');
            $('#loca').val('');
            }else{
                alert('报名失败，请刷新网页后重试！')
            }
        }
    })
});