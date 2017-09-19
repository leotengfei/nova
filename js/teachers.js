/**
 * Created by Administrator on 2017/9/18 0018.
 */

//页面加载发送请求
$.ajax({
    type:"GET",
    url:"../sql/selectTeacher.php",
    success: function (data) {
        var html="";
        for(var i=2;i<data.length;i++){
            html+=`
                <li>
                <input type="hidden" value="${data[i].tid}"/>
                <div class="preview">
                    <img alt=" " src="../images/${data[i].photo_sm}">
                    <div class="overlay">
                    </div>
                    <div class="links">
                        <a data-toggle="modal" href="#modal-teacher"></a>
                    </div>
                </div>
                <div class="desc">
                	<h5>${data[i].tname}</h5>
                    <p>${data[i].grade}${data[i].subject}名师</p>
                </div>
            </li>
            `;
        }
        $('#portfolio>ul').html(html);
    }

});


//老师li点击事件
$('#portfolio').on("click","ul>li a", function (e) {
    $('#modal-teacher>div.modal-body').html("加载中...");
   var tid=$(e.target).parent().parent().prev().val();
    var tname=$(e.target).parent().parent().next().children().first().html();
    //console.log(tid,tname);
    //获取教师详细信息
    $.ajax({
        type:"POST",
        url:"../sql/selectTeacherDetail.php",
        data:{tid:tid},
        success: function (data) {
            //console.log(data);
            var html="";
            html+=`
                <img src="../images/${data[0].photo_lg}" alt="" width="300px" style="max-height:450px">
                <div>
                    <h3>${data[0].tname}<br />${data[0].grade}${data[0].subject}名师</h3>
                    <p>简介：${data[0].introduction}</p>
                </div>
            `;
            $('#modal-teacher>div.modal-body').html(html);

            //获取教师课表信息
            $.ajax({
                type:"POST",
                url:"../sql/selectTeacherClass.php",
                data:{tname:tname},
                success: function (data) {
                    //console.log(data);
                    //改编数据格式
                    var deldate = function (str) {
                        var arr = str.split('-');
                        str = parseInt(arr[1]) + '月' + parseInt(arr[2]) + '日';
                        return str;
                    };
                    var html="";
                    html+=`<table width="100%" cellpadding="0" cellspacing="0" class="table table-bordered table-hover">
                    <tbody width="100%">
                    <tr>
                        <td width="16%">班号</td>
                        <td width="18%">名称</td>
                        <td width="10%">上课日期</td>
                        <td width="10%">结课日期</td>
                        <td width="16%">上课时间</td>
                        <td width="10%">上课地点</td>
                        <td width="10%">学费</td>
                        <td width="10%">教师</td>
                    </tr>`;
                    for(var i=0;i<data.length;i++){
                        html+=`
                    <tr>
                    <td width="16%">${data[i].classname}</td>
                    <td width="18%">${data[i].grade}${data[i].project}</td>`;
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
                    <td width="10%">${data[i].teacher}</td>
                </tr>
                        `;
                    }
                    html+="</tbody></table>";
                    $('#modal-teacher>div.modal-body').append(html);

                }

            })


        }

    });


});