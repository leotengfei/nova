// 获取网页加载数据
var delDate=function(old_date){
    return old_date.split('/')[0]+'-'+old_date.split('/')[1]+'-'+old_date.split('/')[2];
}
$.ajax({
    type:'GET',
    data:{
        evd_time:'today'
    },
    url:'data/evd_get.php',
    success:function(data){
        console.log(data[0]);
        var html='';
        for(var i=0;i<data.length;i++){
            html+=`
            <li class="media">
                    <a href="${data[i].cid}/${data[i].episode}">
                        <div class="media-left">
                            <img class="media-object" src="img/${data[i].imgUrl}" alt="...">
                        </div>
                        <div class="media-body">
                            <h2 class="media-heading">${data[i].cname}</h2>
                            <h5>${data[i].description}</h5>
                            ${data[i].intro}
                            <div>${delDate(data[i].c_time)}</div>
                        </div>
                    </a>
                </li>
            `;
        }
        $('#evd_list').html(html);
    }
})

var pageNum=1;
// 查看往期
var getMore=function(){
    $.ajax({
        type:'POST',
        data:{
            pageNum:pageNum
        },
        url:'data/evd_more.php',
        success:function(data){
            pageNum++;
            if(data.length<8){
                $('.evd_more').css('display','none');
            }
            var html='';
            for(var i=0;i<data.length;i++){
                html+=`
                <div class="col-xs-6 col-md-3">
                    <a href="${data[i].c_time}">
                        <p>
                            <img src="img/heji.png" alt="">
                        </p>
                        <h4>${delDate(data[i].c_time)}</h4>
                    </a>
                </div>
                `;
            }
            $('#evd_huigu').append(html);
        }
    })
}
getMore();

// evd_list点击事件，跳转到play.html页面
$('#evd_list').on('click','li>a',function(e){
    e.preventDefault();
    //console.log($(this).attr('href'));
    var str=$(this).attr('href');
    //console.log(str.split('/'));
    sessionStorage['cid']=str.split('/')[0];
    sessionStorage['episode']=str.split('/')[1];
    location.href="player.html";
})

// 往期回顾 evd_huigu.html     (点击跳转)
$('#evd_huigu').on('click','div>a',function(e){
    e.preventDefault();
    console.log($(this).attr('href'));
    var evd_time=$(this).attr('href');
    location.href="evd_detail.html?evd_time="+evd_time;
})

// 查看更多
$('.evd_more').click(function(){
   getMore();
})