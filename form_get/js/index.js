/**
 * Created by Administrator on 2017/10/24 0024.
 */
//初始化姓名，电话判断布尔值
var vali_uname=false;
var vali_utel=false;


$('#btn-apoint').click(function () {
   //console.log(1);
    //获取各个input的值
    var uname=$('#uname').val();
    var utel=$('#utel').val();
    var ugrade=$('#ugrade').val();
    var uschool=$('#uschool').val();

    //console.log(uname,utel,ugrade,uschool);
    console.log(uname,utel);
    //定义正则
    var regname=/^[\u3e00-\u9fa5]{2,5}$/ig;
    vali_uname=regname.test(uname);
    var regtel=/^[1][3,4,5,7,8][0-9]{9}$/ig;
    vali_utel=regtel.test(utel);
    console.log(vali_uname,vali_utel);
    if(!vali_uname||!vali_utel){
        alert('请检查姓名或者电话格式！');
    }
    if(ugrade===''||uschool===''){
        alert('输入信息不能为空！');
    }
    if(vali_uname&&vali_utel&&ugrade!==''&&uschool!==''){
        $.ajax({
            type:'POST',
            data:{uname:uname,utel:utel,uschool:uschool,ugrade:ugrade},
            url:'data/insert.php',
            success: function (data) {
                console.log(data.msg);
                $('#msg').html(data.msg);
                $('#myModal').modal('show');

                $('#uname').val('');
                $('#utel').val('');
                $('#ugrade').val('');
                $('#uschool').val('');

            }
        })
    }
});