/**
 * 首页js文件 2017/9/19 0019.
 */
$('#recent-works>div.container>ul>li div.links>a').click(function () {
    //console.log($(this).next().val());
    var tname=$(this).next().val();
    var grade=$(this).next().next().val();
    //console.log($(this).parent().parent().next().next().children('div.modal-body').children('table').html());
    var modalTable=$(this).parent().parent().next().next().children('div.modal-body').children('table');
    $.ajax({
        type:"POST",
        url:'sql/selectTeacherClass.php',
        data:{tname:tname,grade:grade},
        success: function (data) {
            //console.log(data);
            //改编数据格式
            var deldate = function (str) {
                var arr = str.split('-');
                str = parseInt(arr[1]) + '月' + parseInt(arr[2]) + '日';
                return str;
            };
            var html='';
            html+=`
                <tr bgcolor="#f5f5f5">
                  <td width="16%">班号</td>
                  <td width="18%">名称</td>
                  <td width="10%">上课日期</td>
                  <td width="10%">结课日期</td>
                  <td width="16%">上课时间</td>
                  <td width="10%">上课地点</td>
                  <td width="10%">学费</td>
                </tr>
                `;
            for(var i=0;i<data.length;i++){
                html+=`
                <tr>
                      <td width="16%">${data[i].classname}</td>
                      <td width="18%">${data[i].grade}${data[i].project}</td>`

                //    判断是否为小学，如果不是，改变日期格式；
                if(data[i].grade=="一年级"||data[i].grade=="二年级"||data[i].grade=="三年级"||data[i].grade=="四年级"||data[i].grade=="五年级"||data[i].grade=="六年级"){
                    html+=`<td width="10%">${data[i].gbegin}</td>
                            <td width="10%">${data[i].gend}</td>`;
                }else{
                    html+=`<td width="10%">${deldate(data[i].gbegin)}</td>
                            <td width="10%">${deldate(data[i].gend)}</td>`;
                }
                    html+=`
                      <td width="16%">${data[i].gtime}</td>
                      <td width="10%">${data[i].location}</td>
                      <td width="10%">${data[i].money}</td>
                </tr>
                `;
            }
            //console.log(html);
            modalTable.html(html);
        }
    })
});
