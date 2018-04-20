// 获取网页加载数据
var delDate=function(old_date){
    return old_date.split('/')[0]+'-'+old_date.split('/')[1]+'-'+old_date.split('/')[2];
}
function rn(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomColor(){
    var r=rn(200,100);
    var g=rn(200,100);
    var b=rn(200,100);
    return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}
$.ajax({
    type:'GET',
    data:{
        evd_time:'today'
    },
    url:'data/evd_get.php',
    success:function(data){
        console.log(data.length);
        var html='';
        if(data.length===0){
            html=`
                <div class="col-xs-12 col-md-6 col-md-offset-3">
                    <img src="img/xiuxi.jpg" class="xiuxi_img">
                </div>
            `
        }else{
            for(var i=0;i<data.length;i++){
                html+=`
                <div class="col-xs-6 col-md-3">
                    <div style="background-color:${randomColor()};">
                        <a href="${data[i].cid}/${data[i].episode}">
                            <div class="card_left">
                                <img src="img/${data[i].imgUrl}">
                            </div>
                            <div class="card_right">
                                <h4>${data[i].cname}</h4>
                                <p>${delDate(data[i].c_time)}</p>
                                <h5>${data[i].description}</h5>
                            </div>
                        </a>
                    </div>
                </div>
                `;
            }
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
$('#evd_list').on('click','div>a',function(e){
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
