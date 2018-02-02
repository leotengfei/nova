/**
 * Created by Administrator on 2017/8/15 0015.
 */
    //生成座位数函数
var c_num=12;//每一排座位数
var total_num=168;//座位总数
var create_seat= function (seat_num,total) {//座位数量
  var html="";
    for(var i=0;i<total;i++){
        html+=`<a href="${i+1}" class="unchecked"></a>`
    }
    $("#seat").html(html);
    var w=4/(5*seat_num)*100+"%";
    var p=1/(5*seat_num)*100+"%";
    console.log(w);
    $("#seat>a").css("width",w);
    $("#seat>a").css("marginLeft",p);
    $("#seat>a").css("marginTop",p);
};
create_seat(c_num,total_num);

//    刷新座位状态
var refresh= function () {
    $.ajax({
        type:'POST',
        url:'data/searchseat.php',
        data:{tel:sessionStorage['tel']},
        success: function (data) {
            //console.log(data);
            $('#seat>a').removeClass('unchecked').removeClass('bechecked').addClass('unchecked');
            for(var i=0;i<data.length;i++){
                $('#seat>:nth-child('+data[i].seat+')').removeClass('unchecked').addClass('bechecked');
            }
        }
    })
};
refresh();

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

var regtel=/^[1][3,4,5,7,8,9][0-9]{9}$/i;
var regSname=/^[\u3e00-\u9fa5]{2,5}$/i;
var valiUtel=false;
var valiSname=false;
//提交按钮点击事件
$('#btn_apoint').click(function () {
  sessionStorage['tel']=$('#tel').val();
  sessionStorage['sname']=$('#sname').val();
  valiUtel=regtel.test($('#tel').val());
  valiSname=regSname.test($('#sname').val());
  if(!valiSname){
      alert("请检查姓名格式为2-5个汉字！");
  }else if(!valiUtel){
      alert("请检查电话号码格式！")
  }else if(sessionStorage['seat']===null||sessionStorage['seat']===undefined){
      alert("请点击座位区域，选择您的座位！");
  }else{
    var tel=sessionStorage['tel'];
    var sname=sessionStorage['sname'];
    $.ajax({
            type:'POST',
            url:'data/insertmsg.php',
            data:{tel:tel,sname:sname,seat:sessionStorage['seat']},
            success: function (data) {
                //console.log(data);
                refresh();
                if(data.code===-7){
                    $('#mytab').html("该手机号已被使用！每人只可以预约一次哦！");
                    $('#tip').html(data.msg);
                }else if(data.code===-6){
                    $('#mytab').html("该座位已被预定，请刷新页面重试！");
                    $('#tip').html(data.msg);
                }else if(data.code===-1){
                    $('#mytab').html("添加失败，请检查是否选择了可用的座位！");
                    $('#tip').html(data.msg);
                }else{
                    //处理座位格式函数
                    var seatdel=function(s){
                        var r;
                        if(s%12===0){
                            r=(s-s%12)/12;
                        }else{
                            r=(s-s%12)/12+1;
                        }
                        var c=s%12;
                        (c==0)&&(c=12);
                        return "第"+r+"排"+"第"+c+"座";
                    };
                    var seat_num=parseInt(sessionStorage['seat']);
                    var html= "<tr><td><img src='img/loding.png' style='width:100%'></td></tr>";
                    $('#tip').html(data.msg+"座位号为："+seatdel(seat_num));
                    $('#mytab').html(html);
                    $('#tel').val('');
                    $('#sname').val('');
                    sessionStorage['seat']=null;
                }
                $('#myModal').modal('show');

            }
        })



  }


});
