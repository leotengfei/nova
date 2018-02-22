/**
 * Created by Administrator on 2017/9/20 0020.
 */
//功能1:待页面加载完成后，异步
//异请求页头页尾

    $("#header").load("data/header.html");
    $("#footer").load("data/footer.html");

var isLanded= function () {
    //判断是否登陆
    $.ajax({
        url: 'data/logininfo.php',
        success: function(result){
            if(result.utel===null||result.uid===null||sessionStorage['uid']===undefined){
                location.href='shenfen.html';
            }
        }
    });
};
//修正钱数单位
var fixNum= function (num) {
    return (num/100).toFixed(2);
};
