/**
 * Created by Administrator on 2017/8/17 0017.
 */
var mylocation="all";
var grade="all";
$('#location').change(function () {
   //console.log($(this).val());
    $('#grade').parent().prev().html('请选择年级！');
    $('#grade').val('0');
    mylocation=$(this).val();
    if(mylocation!=='0'){
        selec(mylocation,'all');
        $(this).parent().prev().html('你已经选择<b style="color:red">'+mylocation+"</b>校区！")
    }
});
$('#grade').change(function () {
   grade=$(this).val();
    if(grade!=='0'){
        selec(mylocation,grade);
        $(this).parent().prev().html('你已经选择<b style="color:red">'+grade+"</b>年级！")
    }
});

//发送请求
function selec(mylocation,grade){
    $.ajax({
        type:"POST",
        url:'data/admin.php',
        data:{clocation:mylocation,grade:grade},
        success: function (data) {
            //console.log(data);
            var html='';
            html+=`
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>电话</th>
                                    <th>年级</th>
                                    <th>校区</th>
                                </tr>
                            </thead>
                            <tbody>
                            `;
            for(var i=0;i<data.length;i++){
                html+=`
                            <tr>
                            <td>${data[i].sname}</td>
                            <td>${data[i].tel}</td>
                            <td>${data[i].grade}</td>
                            <td>${data[i].clocation}</td>
                        </tr>
                        `;
            }
            html+="</tbody>";
            $('#mytab').html(html);
        }

    })
}

selec('all','all');