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
           $('#videoPrice').html("￥"+fixNum(data[0].cPrice));
           $('#total').html(data[0].total);
           $('#videoDetailTeacher').html(data[0].teacher);
           var html='';
           html+=`<li class="active">1</li>`;
           for(var i=2;i<=data[0].total;i++){
               html+=`
               <li>${i}</li>
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
$('#videoIntro>ul>li:nth-child(2)').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#videoIntro>div').css('display','none');
    $('#teachIntro').css('display','block');
});

//点击跳转
$('#viewVideo').click(function () {
    //window.location.href='player.html';
    if(sessionStorage['episode']==1){//第一节课不用付款
        window.location.href='player.html';
    }else{
        //判断是否登陆
        $.ajax({
            url: 'data/logininfo.php',
            success: function(result){
                if(result.utel===null||result.uid===null){
                    location.href='login.html';
                }else{
                    //判断是否已经付过款
                    if(ispayed()){
                        window.location.href='player.html';
                    }else{
                        window.location.href='pay.html';
                    }
                }
            }
        });

    }
});

//默认集数选择第一节
sessionStorage['episode']=1;
//选择课程集
$('#chooseClass').on('click','li', function (e) {
   $(e.target).addClass('active').siblings().removeClass('active');
    sessionStorage['episode']=$(e.target).html();
    console.log(sessionStorage['episode']);
});
