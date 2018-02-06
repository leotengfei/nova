/**
 * Created by Administrator on 2017/8/17 0017.
 */
//发送请求
function selec(){
    $.ajax({
        type:"GET",
        url:'data/admin.php',
        success: function (data) {
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

            //console.log(data);
            var html='';
            html+=`
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>姓名</th>
                                    <th>电话</th>
                                    <th>座位</th>
                                    <th>是否会员</th>
                                </tr>
                            </thead>
                            <tbody>
                            `;
            for(var i=0;i<data.length;i++){
                html+=`
                            <tr>
                            <td>${i+1}</td>
                            <td>${data[i].sname}</td>
                            <td>${data[i].tel}</td>
                            <td>${seatdel(data[i].seat)}</td>
                            <td>${data[i].isVIP}</td>
                        </tr>
                        `;
            }
            html+="</tbody>";
            $('#mytab').html(html);
        }

    })
}

selec();
