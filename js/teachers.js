/**
 * Created by Administrator on 2017/9/18 0018.
 */

//页面加载发送请求

//  老师数据实现滚动加载
var isLoading = false;
var isEnd = false;
var triggerDistance = 200;
var pageNum=1;
var grade='all';
var subject='all';

function fetchData() {
    var distance = portfolio.getBoundingClientRect().bottom - window.innerHeight;
    console.log(distance);
    if ( !isLoading && !isEnd && distance < triggerDistance ) {
        isLoading = true;
        console.log(1);
        $.ajax({
            type:"POST",
            url:"../sql/selectTeacher.php",
            data:{pageNum:pageNum,grade:grade,subject:subject},
            success: function (data) {
                var html="";
                for(var i=0;i<data.length;i++){
                    html+=`
                <li>
                <input type="hidden" value="${data[i].tid}"/>
                <div class="preview">
                    <img alt=" " src="../images/${data[i].photo_sm}">
                    <div class="overlay">
                        <span>更多介绍</span>
                    </div>
                    <div class="links">
                        <input type="hidden" value="${data[i].grade}"/>
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
                $('#teacherList').append(html);
                isLoading = false;
                pageNum++;
                //console.log(data);
                if(data.length===0){
                    isEnd=true;
                }
            }
        });
    }
}
window.addEventListener('scroll', fetchData);
fetchData();
//老师li点击事件
$('#teacherList').on("click","li a", function (e) {
    $('#modal-teacher>div.modal-body').html("加载中...");
   var tid=$(e.target).parent().parent().prev().val();
    var tname=$(e.target).parent().parent().next().children().first().html();
    var grade=$(e.target).prev().val();
    //console.log(grade);
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
                data:{tname:tname,grade:grade},
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
                    </tr>`;
                    for(var i=0;i<data.length;i++){
                        html+=`
                    <tr>`;
                    //    判断是否为小学，如果不是，改变日期格式；
                    if(data[i].grade=="一年级"||data[i].grade=="二年级"||data[i].grade=="三年级"||data[i].grade=="四年级"||data[i].grade=="五年级"||data[i].grade=="六年级"){
                    html+=`
							<td width="16%">${data[i].classname}</td>
							<td width="18%">${data[i].classtitle}</td>	
							<td width="10%">${data[i].gbegin}</td>
                            <td width="10%">${data[i].gend}</td>`;
                    }else{
                        html+=`
							<td width="16%">${data[i].classname}</td>
							<td width="18%">${data[i].grade}${data[i].project}</td>		
							<td width="10%">${deldate(data[i].gbegin)}</td>
                            <td width="10%">${deldate(data[i].gend)}</td>`;
                    }

                  html+=`
                    <td width="16%">${data[i].gtime}</td>
                    <td width="10%">${data[i].location}</td>
                    <td width="10%">${data[i].money}</td>
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
//侧边栏点击事件
$('#left-side>li').click(function () {
    pageNum=1;
    isEnd = false;
    isLoading=false;
    subject='all';
   $(this).next().toggleClass('active');
    $(this).next().siblings().removeClass('active');
    //console.log($(this).children('span').html());
     grade=$(this).children('span').html();
    //点中年级选项卡
    if(grade!==undefined){
        //console.log(grade);
        $('#teacherList').html('');
        fetchData()
    }
});
//侧边栏子菜单点击事件
$('#left-side>li.subLi>ul>li').click(function () {
   //console.log($(this).html());
    pageNum=1;
    isEnd = false;
    isLoading=false;
    subject=$(this).html();
    //console.log(grade);
    $('#teacherList').html('');
    fetchData();
});

//搜索教师
$('#search-btn').click(function () {
   //console.log($(this).prev().val());
    var tname=$(this).prev().val();
    if(tname!==''){
        $.ajax({
            type:"POST",
            url:"../admin/data/selectTeacher.php",
            data:{tname:tname},
            success: function (data) {
                var html="";
                for(var i=0;i<data.length;i++){
                    html+=`
                <li>
                <input type="hidden" value="${data[i].tid}"/>
                <div class="preview">
                    <img alt=" " src="../images/${data[i].photo_sm}">
                    <div class="overlay">
                        <span>更多介绍</span>
                    </div>
                    <div class="links">
                        <input type="hidden" value="${data[i].grade}"/>
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
                $('#teacherList').html('');
                $('#teacherList').append(html);
            }
        });
    }
});