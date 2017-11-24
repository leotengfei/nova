/**
 * Created by Administrator on 2017/11/21 0021.
 */
isLanded();
//console.log(sessionStorage['uid']);
$.ajax({
    type:"GET",
    url:"data/get_score.php",
    success: function (data) {
        var html="";
        for(var i=0;i<data.length;i++){
            //console.log(data[i].score);
            if(data[i].score==null){
                html+="<h3 class='text-center'>请点击查看队员成绩！</h3>";
            }else if(data[i].score>=20){
                html+=`
                <div class="panel panel-default">
            <div class="panel-heading">姓名：${data[i].uname}</div>
            <div class="panel-body">
                科目：${data[i].subject}
                <br/>
                是否通过：<img src="img/tongguo.png" alt=""/>
                <br/>
                测试时间：${data[i].test_date}
            </div>
        </div>
            `;
            }else{
                html+=`
                <div class="panel panel-default">
            <div class="panel-heading">姓名：${data[i].uname}</div>
            <div class="panel-body">
                科目：${data[i].subject}
                <br/>
                是否通过：<img src="img/shibai.png" alt=""/>
                <br/>
                测试时间：${data[i].test_date}<button type="button" class="btn btn-info" style="float:right">再考一次</button>
            </div>
        </div>
            `;
                //查询是否已经答过两次
                $.ajax({
                    type:'GET',
                    url:'data/has_score.php',
                    success: function (data) {
                        console.log(data);
                        if(data.code=="1"){
                            $("#score_area button").remove();
                            //remove上面的button
                        }
                    }
                });
            }
        }
        $('#score_area').html(html);

    }

});
//再考一次按钮点击事件
$('#score_area').on("click","button", function (e) {
    //console.log(e.target);
    localStorage[sessionStorage['uid']+'start_time']=new Date().getTime();
    location.replace('test.html');
});

//查看队友成绩点击事件
$('#check_mate').click(function () {
    console.log(1);
    $.ajax({
        type:'GET',
        url:'data/check_mate.php',
        success: function (data) {
            console.log(data);
            var html="";
            for(var i=0;i<data.length;i++){
                if(data[i].score>=20){
                    html+=`
                <div class="panel panel-default">
            <div class="panel-heading">姓名：${data[i].uname}</div>
            <div class="panel-body">
                科目：${data[i].subject}
                <br/>
                是否通过：<img src="img/tongguo.png" alt=""/>
                <br/>
                测试时间：${data[i].test_date}
            </div>
        </div>
            `;
                }else{
                    html+=`
                <div class="panel panel-default">
            <div class="panel-heading">姓名：${data[i].uname}</div>
            <div class="panel-body">
                科目：${data[i].subject}
                <br/>
                是否通过：<img src="img/shibai.png" alt=""/>
                <br/>
                测试时间：${data[i].test_date}
            </div>
        </div>
            `;}
            }

            $("#mate_area").html(html);
        }
    })
});