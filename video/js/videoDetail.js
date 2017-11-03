/**
 * Created by Administrator on 2017/9/22 0022.
 */
//发送请求加载页面信息
$(function () {
    var cid=sessionStorage['cid'];
   // 课程信息
   $.ajax({
       type:'POST',
       data:{cid:cid},
       url:'data/selectDetail.php',
       success: function (data) {
           //console.log(data[0].cPrice);
           $('#videoDetail>div>p>img').attr('src','img/'+data[0].imgUrl);
           $('#videoCname>h2').html(data[0].cname);
           $('#videoCname>p').html("简介："+data[0].intro);
           $('#videoPrice').html("￥"+fixNum(data[0].cPrice));
           $('#total').html(data[0].total);
           $('#videoDetailTeacher').html(data[0].teacher);
           $('#dPageName').html(data[0].cname);
           var html='';
           html+=`<li class="active btn">1</li>`;
           for(var i=2;i<=data[0].total;i++){
               html+=`
               <li class="btn">${i}</li>
               `;
           }
           $('#chooseClass').html(html);
       }

   });
    //课程标题
    $.ajax({
        type:'POST',
        data:{cid:cid},
        url:'data/selectClassDescrip.php',
        success: function (data) {
            //console.log(data);
            var html="";
            for(var i=0;i<data.length;i++){
                html+=`
                <li  class="list-group-item">
                <span>第${data[i].episode}节</span>
                <h4 class="list-group-item-heading text-center">${data[i].description}</h4>
            </li>
                `;
            }
            $('#courIntro>ul').html(html);
        }
    })


});


$('#videoIntro>ul>li:first-child').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#videoIntro>div').css('display','none');
    $('#courIntro').css('display','block');
});
var loadtime=0;
$('#videoIntro>ul>li:nth-child(2)').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#videoIntro>div').css('display','none');
    $('#teachIntro').css('display','block');
    //发送ajax请求  获取老师信息
    var teacherName=$('#videoDetailTeacher').html();
    console.log(teacherName);
    var arr=teacherName.split('、');
    //console.log(arr);
        //老师信息需要tname
    if(loadtime===0){
    for(var i=0;i<arr.length;i++){
        var tname=arr[i];
        loadtime++;
        $.ajax({
            type:"POST",
            url:'data/videoPageTD.php',
            data:{tname:tname},
            success: function (data) {
                //console.log(data);
                var html=`
                    <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">${data[0].tname}老师</h3>
            </div>
            <div class="panel-body">
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object" src="../images/${data[0].photo_lg}" alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">${data[0].grade}${data[0].subject}名师</h4>
                        <p>
                            ${data[0].introduction}
                        </p>
                    </div>
                </div>
            </div>
        </div>
                `;
                $('#teachIntro').append(html);
            }
        })
    }
    console.log(loadtime);
    }



});

//点击跳转
$('#viewVideo').click(function () {
    //window.location.href='player.html';
        //判断是否登陆
        $.ajax({
            url: 'data/logininfo.php',
            success: function(result){
                if(result.utel===null||result.uid===null){
                    location.href='login.html';
                }else{
                    if(sessionStorage['is_free']==='1'){//判断是否为免费视频
                        window.location.href='player.html';
                    }else{
                        //判断是否已经付过款
                        $.ajax({
                            type: "POST",
                            data: {uid:sessionStorage['uid'],cid:sessionStorage['cid']},
                            url: 'data/isPayed.php',
                            success: function (data) {
                                //如果支付成功自动跳转播放页；
                                if(data.code==1){
                                    window.location.href='player.html';
                                }else{
                                    window.location.href='pay.html';
                                }
                            }
                        });
                    }
                }
            }
        });
});

//默认集数选择第一节
sessionStorage['episode']=1;
//选择课程集
$('#chooseClass').on('click','li', function (e) {
   $(e.target).addClass('active').siblings().removeClass('active');
    sessionStorage['episode']=$(e.target).html();
    console.log(sessionStorage['episode']);
});
