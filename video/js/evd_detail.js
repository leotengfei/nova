// 获取网页加载数据

console.log(window.location.href.split('=')[1])
var evd_time=window.location.href.split('=')[1];
var delDate=function(old_date){
    return old_date.split('/')[0]+'-'+old_date.split('/')[1]+'-'+old_date.split('/')[2];
}
$("#evd_title").html("<img src='img/today.png'>"+delDate(evd_time)+"合集")
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