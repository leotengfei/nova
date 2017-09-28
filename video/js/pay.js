/**
 * Created by Administrator on 2017/9/24 0024.
 */
//判断是否已经登陆
isLanded();
//动态请求页面数据
//console.log(sessionStorage['cid']);
$.ajax({
    type: "POST",
    data: {cid: sessionStorage['cid']},
    url: 'data/selectPayMsg.php',
    success: function (data) {
        //console.log(data);
        //console.log(fixNum(data[0].cPrice));
        $('#videoCname').html(data[0].cname);
        $('#videoPrice').html(fixNum(data[0].cPrice));
        $('#totalPrice').html(fixNum(data[0].cPrice));
        $("#WIDsubject").val(data[0].cname);
        $("#WIDtotal_amount").val(fixNum(data[0].cPrice));

    }

});

var vNow = new Date();
var sNow = "";
function GetDateNow() {
    sNow += String(vNow.getFullYear());
    sNow += String(vNow.getMonth() + 1);
    sNow += String(vNow.getDate());
    sNow += String(vNow.getHours());
    sNow += String(vNow.getMinutes());
    sNow += String(vNow.getSeconds());
    sNow += String(vNow.getMilliseconds());
    document.getElementById("WIDout_trade_no").value = sNow;
}
GetDateNow();
//$('form').submit(function (e) {
//    //e.preventDefault();
//    var WIDout_trade_no = sNow;
//    var WIDsubject = $('#WIDsubject').val();
//    var WIDtotal_amount = $('#WIDtotal_amount').val();
//    var WIDbody = '无';
//    var uname = $('#uname').val();
//    console.log(WIDout_trade_no, WIDsubject, WIDtotal_amount, uname);
//    if (uname === '') {
//
//    } else {
//        $.ajax({
//            type: "POST",
//            data: {
//                WIDout_trade_no: WIDout_trade_no,
//                WIDsubject: WIDsubject,
//                WIDtotal_amount: WIDtotal_amount,
//                WIDbody: WIDbody
//            },
//            url: 'pagepay/pagepay.php',
//            success: function (data) {
//                console.log(data);
//            }
//        })
//    }
//});

$('#btnPay').click(function () {
    var WIDout_trade_no = sNow;
    var WIDsubject = $('#WIDsubject').val();
    var WIDtotal_amount = $('#WIDtotal_amount').val();
    var WIDbody = '无';
    //console.log(WIDout_trade_no, WIDsubject, WIDtotal_amount);
        $.ajax({
            type: "POST",
            data: {
                WIDout_trade_no: WIDout_trade_no,
                uid:sessionStorage['uid'],
                cid:sessionStorage['cid'],
                WIDsubject: WIDsubject,
                WIDtotal_amount: WIDtotal_amount,
                WIDbody: WIDbody
            },
            url: 'data/insertShoppingCart.php',
            success: function (data) {
                console.log(data);
            }
        });

//    给notify_url.php传参数
    $.ajax({
        type:'GET',
        data:{uid:sessionStorage['uid'],utel:sessionStorage['utel'],cid:sessionStorage['cid']},
        url:'pagepay/pagepay.php',
        success: function (data) {
            console.log(data);
        }
    })

});


//通过ajax轮询判断是否付款成功
var timer = setInterval(function () {
    //console.log(0);
    $.ajax({
        type: "POST",
        data: {WIDout_trade_no: sNow},
        url: 'data/isPayed.php',
        success: function (data) {
            //如果支付成功自动跳转会详情页；
            console.log(data);
            //if(data==1){
            //    location.href="detail.html";
            //}
        }

    })
}, 1000);

//如果成功跳转到detail.html

