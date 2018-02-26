/**
 * Created by Administrator on 2017/10/24 0024.
 */

 //flat-ui 初始化checkbox,radio
$(':checkbox').radiocheck();
$(':radio').radiocheck();

//初始化姓名，电话判断布尔值
var vali_uname=false;
var vali_utel=false;

$('#btn-apoint').click(function () {
   //console.log(1);
    //获取各个input的值
    var uname=$('#uname').val();
    var utel=$('#utel').val();
    var loca=$("input[name='loca']:checked").val();
    var sub =[];//定义一个数组  
      $('input[name="subv"]:checked').each(function(){//遍历每一个名字为subv的复选框，其中选中的执行函数  
        sub.push($(this).val());//将选中的值添加到数组sub中  
      });

    console.log(uname,utel);
    console.log(loca,sub);
    //定义正则
    var regname=/^[\u3e00-\u9fa5]{2,5}$/ig;
    vali_uname=regname.test(uname);
    var regtel=/^[1][3,4,5,7,8,9][0-9]{9}$/i;
    vali_utel=regtel.test(utel);
    console.log(vali_uname,vali_utel);
    if(!vali_uname||!vali_utel){
        $('#msg').html('请检查姓名或者电话格式！');
        $('#myModal').modal('show');
        return;
    }
    if(sub===null){
        $('#msg').html('请至少选择一门考试科目！');
        $('#myModal').modal('show');
        return;
    }
    var my_btn=$(this);
    my_btn.prop("disabled",true);
    if(vali_uname&&vali_utel&&loca&&sub){
        var arr_sub=sub.join(",");
        console.log(arr_sub);
        $.ajax({
            type:'POST',
            data:{uname:uname,utel:utel,loca:loca,sub:arr_sub},
            url:'data/insert.php',
            success: function (data) {
                console.log(data.msg);
                var html=`
                <h4 style="color:#000;" class="text-center">预约成功，请截屏保存测试时间，按时参加！</h4>
                <ul class="list-unstyled" style="color:#000;" >
                    <li>北大街：2月28日 下午14：00</li>
                    <li>长&nbsp;安：2月28日 下午14：00</li>
                    <li>渭&nbsp;南：3月4日 下午14：00</li>
                    <li>宝&nbsp;鸡：3月1日 下午14：00</li>
                    <li>咸&nbsp;阳：2月28日 下午14：00</li>
                </ul>
                `;
                $('#msg').parent().html(html);
                $('#myModal').modal('show');

                $('#uname').val('');
                $('#utel').val('');

            },
            complete: function(){
                my_btn.prop("disabled",false);
            }
        })
    }
});