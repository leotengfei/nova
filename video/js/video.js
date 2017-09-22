/**
 * Created by Administrator on 2017/9/20 0020.
 */
//功能1:待页面加载完成后，异步
//异请求页头页尾
$(function () {
    $("#header").load("data/header.html");
    $("#footer").load("data/footer.html");
});
