/**
 * Created by Administrator on 2017/8/15 0015.
 */
//    刷新座位状态
var refresh= function () {
    $.ajax({
        type:'POST',
        url:'data/searchseat.php',
        data:{city:sessionStorage['city']},
        success: function (data) {
            //console.log(data);
            $('#seat>a').removeClass('unchecked').removeClass('bechecked').addClass('unchecked');
            for(var i=0;i<data.length;i++){
                $('#seat>:nth-child('+data[i].seat+')').removeClass('unchecked').addClass('bechecked');
            }
        }
    })
};

//年级按钮的点击事件
$('#city').on('click','button', function (e) {
    //console.log(sessionStorage['grade']);
    sessionStorage['city']=$(e.target).html();
    $('#city').prev().html("您已选择<b class='text-danger'>"+sessionStorage['city']+'</b>站！');

    refresh();
});
//座位点击事件
$('#seat').on('click','a', function (e) {
   e.preventDefault();
    //console.log(e.target);
    if($(e.target).hasClass('bechecked')){
        alert('该座位已经被预定！');
        sessionStorage['seat']=null;
    }else if($(e.target).hasClass('unchecked')){
        $('#seat>a').removeClass('active').addClass('unchecked');
        $(e.target).removeClass('unchecked').addClass('active');
        sessionStorage['seat']=$(e.target).attr("href");
        console.log(sessionStorage['seat']);
    }
});

//提交按钮点击事件
$('#btnsub').click(function () {
   //console.log(1);
    sessionStorage['tel']=$('#tel').val();
    sessionStorage['sname']=$('#sname').val();
    var tel=sessionStorage['tel'];
    var sname=sessionStorage['sname'];



    var checkpnum = isNaN(tel);
    if(tel.length < 11 || tel.length > 11){
        alert("电话号码写错了就不能抽奖哦！");
    }else if(tel < 13000000000 || tel.length > 20000000000){
        alert("电话号码写错了就不能抽奖哦！");
    }else if(checkpnum){
        alert("电话号码必须是数字！");
    }else{

        $.ajax({
            type:'POST',
            url:'data/insertmsg.php',
            data:{tel:tel,sname:sname,city:sessionStorage['city'],seat:sessionStorage['seat']},
            success: function (data) {
                //console.log(data);
                refresh();
                if(data.code===-7){
                    $('#mytab').html("该手机号已被使用！每人只可以预约一次哦！");
                    $('#tip').html(data.msg);
                }else if(data.code===-6){
                    $('#mytab').html("该座位已被预定，请刷新页面重试！");
                    $('#tip').html(data.msg);
                }else if(data.code===-4){
                    $('#mytab').html("请选择城市！");
                    $('#tip').html(data.msg);
                }else if(data.code===-1){
                    $('#mytab').html("添加失败，请检查是否选择了可用的座位！");
                    $('#tip').html(data.msg);
                }else{
                    //处理座位格式函数
                    var seatdel=function(s){
                        var r;
                        if(s%8===0){
                            r=(s-s%8)/8;
                        }else{
                            r=(s-s%8)/8+1;
                        }
                        var c=s%8;
                        (c==0)&&(c=8);
                        return "第"+r+"排"+"第"+c+"座";
                    };
                    var html= "<tr><td><img src='img/loding.png' style='width:100%'></td></tr>";
                    $('#tip').html(data.msg+"座位号为："+seatdel(sessionStorage['seat']));
                    $('#mytab').html(html);
                }
                $('#myModal').modal('show');

            }
        })

    }
});