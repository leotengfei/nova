/**
 * Created by Administrator on 2017/11/16 0016.
 */
isLanded();
var update_identify= function (indentify,my_url) {
  $.ajax({
      type:'POST',
      url:'data/update_identify.php',
      data:{identify:indentify,utel:sessionStorage['utel']},
      success: function (data) {
          console.log(data);
          if(data.code=="1"){
              location.href=my_url;
          }
      }

  })
};
$('#shenfen>div:first-child').click(function () {
//学生按钮点击事件
    console.log("学生");
    update_identify("学生","stu_form.html");

});
$('#shenfen>div:nth-child(2)').click(function () {
//老师按钮点击事件
    console.log('老师');
    update_identify("老师","teach_form.html");
});