// 获取网页加载数据

console.log(window.location.href.split('=')[1])
var evd_time=window.location.href.split('=')[1];
var delDate=function(old_date){
    return old_date.split('/')[0]+'-'+old_date.split('/')[1]+'-'+old_date.split('/')[2];
}
$("#evd_title").html("<img src='img/today.png'>"+delDate(evd_time)+"合集")
function rn(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomColor(){
    var r=rn(200,100);
    var g=rn(200,100);
    var b=rn(200,100);
    return "rgb("+r+','+g+','+b+")";
}
$.ajax({
    type:'GET',
    data:{
        evd_time:evd_time
    },
    url:'data/evd_get.php',
    success:function(data){
        console.log(data);
        var html='';
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
        $('#evd_list').html(html);
    }
})

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
