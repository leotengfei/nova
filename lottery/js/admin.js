/**
 * Created by Administrator on 2017/8/30 0030.
 */

//加载时查询名单
var searchlist= function (kw){
    $.ajax({
        type:'POST',
        data:{kw:kw},
        url:'data/searchStu.php',
        success: function (data) {
            console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html+=`
            <li>
            <button type="button" class="btn">添加</button>
                姓名：<span>${data[i].sname}</span>----电话：<span>${data[i].stel}</span>
            </li>
            `;
            }
            $('#stulist').html(html);
        }
    })
};
searchlist('all');
//搜索姓名点击事件
$('#btn-search').click(function () {
   var kw=$('#kw').val();
    //console.log(kw);
    searchlist(kw);

});

//添加按钮点击事件
$('#stulist').on('click','button', function (e) {
    //console.log(e.target);
//    查询lotterylist中是否已经存在
    var stel=$(e.target).next().next().html();
    var sname=$(e.target).next().html();
    console.log(stel);
    $.ajax({
        type:'POST',
        data:{stel:stel},
        url:'data/confirmexist.php',
        success: function (data) {
            console.log(data);
            //    如果已经存在
            if(data.code==1){
                alert(data.msg);
            }else if(data.code==-1){
                //    如果未存在
                //console.log("不存在："+data.msg);
                $.ajax({
                    type:'POST',
                    url:'data/addToLotteryList.php',
                    data:{stel:stel,sname:sname},
                    success: function (data) {
                        //console.log(data);
                        alert(data.msg);
                    }
                })



            }
        }

    });



});

