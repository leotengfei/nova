/**
 * Created by Administrator on 2017/8/15 0015.
 */
//年级按钮的点击事件
$('#grade').on('click','button', function (e) {
    sessionStorage['grade']=$(e.target).html();
    //console.log(sessionStorage['grade']);
    $.ajax({
        type:'GET',
        url:'data/searchlocation.php',
        data:{grade:sessionStorage['grade']},
        success: function (data) {
            //console.log(data);
            var html='';
            html+=`<option value="0">—选择校区—</option>`;
            for(var i=0;i<data.length;i++){
                html+=`
                    <option value="${data[i].clocation}">${data[i].clocation}</option>
                `;
            }
            $('#location').html(html);
            $('#grade').prev().html("您已选择<b class='text-danger'>"+sessionStorage['grade']+'</b>年级！');
        }
    })
});
var selectclasstab= function (grade,clocation) {
    $.ajax({
        type:'POST',
        url:'data/searchclasstab.php',
        data:{grade:grade,clocation:clocation},
        success: function (data) {
            console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html+=`
                    <tr>
                        <td>${data[i].cname}</td>
                        <td>${data[i].cdate}</td>
                        <td>${data[i].ctime}</td>
                        <td>${data[i].clocation}</td>
                    </tr>
                `;

            }
            $('#classtab').html(html);
        }

    })
};
//校区选项点击事件
$('#location').change(function(e){
    console.log($(this).val());
    if($(this).val()==="0"){
        $('#location').parent().prev().html("确保您已经选择了校区！！！");
    }else{
        sessionStorage['clocation']=$(this).val();
        selectclasstab(sessionStorage['grade'],sessionStorage['clocation']);
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
            data:{tel:tel,sname:sname,grade:sessionStorage['grade'],clocation:sessionStorage['clocation']},
            success: function (data) {
                //console.log(data);
                if(data.code=='-7'){
                    $('#mytab').html("该手机号已被使用！每人只可以预约一次哦！");
                    $('#tip').html(data.msg);
                }else{
                    $.ajax({
                        type:'POST',
                        url:'data/selecttab.php',
                        data:{tel:sessionStorage['tel']},
                        success: function (data) {
                            console.log(data);
                            var html=`
                            <tr>
                                <td>${data[0].sname}</td>
                                <td>${data[0].tel}</td>
                                <td>${data[0].grade}</td>
                                <td>${data[0].clocation}</td>
                            </tr>
                            `;
                            $('#mytab').html(html);
                            $('#tip').html("预约成功!请确保预约信息真实有效。");
                        }
                    });
                }
                $('#myModal').modal('show');

            }
        })

    }



});