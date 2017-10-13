/**
 * Created by Administrator on 2017/8/17 0017.
 */
var city="all";
$('#city').change(function () {
    city=$(this).val();
    console.log(city);
    if(city!=='0'){
        selec(city);
        $(this).parent().prev().html('你已经选择<b style="color:red">'+city+"</b>站！")
    }else{
        $('#city').parent().prev().html('请选择年级！');
    }
});
//发送请求
function selec(city){
    $.ajax({
        type:"POST",
        url:'data/admin.php',
        data:{city:city},
        success: function (data) {
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

            //console.log(data);
            var html='';
            html+=`
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>电话</th>
                                    <th>城市</th>
                                    <th>座位</th>
                                </tr>
                            </thead>
                            <tbody>
                            `;
            for(var i=0;i<data.length;i++){
                html+=`
                            <tr>
                            <td>${data[i].sname}</td>
                            <td>${data[i].tel}</td>
                            <td>${data[i].city}</td>
                            <td>${seatdel(data[i].seat)}</td>
                        </tr>
                        `;
            }
            html+="</tbody>";
            $('#mytab').html(html);
        }

    })
}

selec('all');