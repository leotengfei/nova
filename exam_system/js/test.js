/**
 * Created by Administrator on 2017/11/20 0020.
 */
//考试页面
isLanded();//判断是否登陆
$(function(){
    $.ajax({//判断是否有成绩
        type:'GET',
        async:false,
        url:'data/has_score.php',
        success: function (data) {
                //如果已经答完两次，跳转到成绩查看页面
            if(data.code=="1"){
                location.replace("score.html");
            }
        }
    });

});

var paperID=0;//初始化paperID
//请求考试题信息
$.ajax({
   type:'POST',
    url:'data/getPaper.php',
    data:{uid:sessionStorage['uid']},
    success: function (data) {
        //console.log(data[0].paperID);
        paperID=data[0].paperID;
        var html='';
        if(data[0].title.substring(0,7)=="http://"){
            console.log(1);
            for(var i=0;i<data.length;i++){
                html+=`
    <div class="q_title">
        <p><span>Q${i+1}</span><img src="${data[i].title}" alt="" class="img-responsive"/></p>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="A">
            A.<img src="${data[i].answerA}" alt="" class="img-responsive"/>
        </label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="B">
            B.<img src="${data[i].answerB}" alt="" class="img-responsive"/>
        </label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="C">
            C.<img src="${data[i].answerC}" alt="" class="img-responsive"/>
        </label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="D">
            D.<img src="${data[i].answerD}" alt="" class="img-responsive"/>
        </label>
    </div>
    <hr/>
            `;
            }
        }else{
            for(var i=0;i<data.length;i++){
                html+=`
    <div class="q_title">
        <p><span>Q${i+1}</span>${data[i].title}</p>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="A">
            A.${data[i].answerA}
        </label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="B">
            B.${data[i].answerB}
        </label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="C">
            C.${data[i].answerC}
        </label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="${i}" value="D">
            D.${data[i].answerD}
        </label>
    </div>
    <hr/>
            `;
            }
        }


    $('#title_area').html(html);

        //请求试卷基本信息
        $.ajax({
            type:'POST',
            url:'data/getPaperInfo.php',
            data:{paperID:paperID},
            success: function (data) {
                var html='';
                //console.log(data[0]);
                $('#paper_info').html(`
                考生：${sessionStorage['utel']}&nbsp;&nbsp;试卷题数：${data[0].title_num}&nbsp;&nbsp;科目：${data[0].course}
                `)
            }
        });
    }
});

//新建用户答案数组；
var answer_arr=new Array(10);
//查询答题个数方法
var answer_count= function () {
    var count=0;
    for(var i=0;i<answer_arr.length;i++){
        if(answer_arr[i]!==undefined){
            count++;
        }
    }
    return count;
};
//单选按钮点击事件
$('#title_area').on('change','input', function (e) {
    //console.log($(e.target).attr('name'));
    answer_arr[$(e.target).attr('name')]=$(e.target).val();
    //console.log(count);
    $('#title_progress>div').css('width',answer_count()*10+'%').html(answer_count()*10+'%');
});
//滚动事件
$(window).scroll(function () {
    //console.log($(window).scrollTop());
    if($(window).scrollTop()>200){
        $('#title_progress').css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "zIndex":"1000"
        });
        $('#test_timer').css({
            "position":"fixed",
            "bottom":"93%",
            "right":"0",
            "zIndex":"1000"
        });
        $('#title_progress>div').css({
            "position":"fixed",
            "height":"20px"
        });
    }else{
        $('#title_progress').css("position","static");
        $('#title_progress>div').css({
            "position":"static",
            "height":"100%"
        });
        $('#test_timer').css("position","static");
    }
});
var submit_answer= function () {//提交成绩方法ajax
    $.ajax({
        type:'POST',
        url:'data/delAnswer.php',
        data:{paperID:paperID,answer_arr:JSON.stringify(answer_arr)},
        success: function (data) {
            if(data.code=="1"){
                location.replace("score.html");
            }else{
                alert("成绩提交失败！");
            }
        }
    })
};
//交卷按钮点击事件
$('#submit_paper').click(function () {
   // console.log(paperID);
   //console.log(JSON.stringify(answer_arr));
//    判断是否填完
   // console.log(answer_count());
    if(answer_count()!==10){
        alert('还没有答完哦！');
    }else{
        console.log("交卷");
        submit_answer();
        location.replace("score.html");
    }
});
    var start_time;//localStorage中存储时间信息防止刷新页面时间刷新
    if(localStorage[sessionStorage['uid']+'start_time']===undefined){
        start_time=new Date().getTime();
        localStorage[sessionStorage['uid']+'start_time']=start_time;
    }else{
        start_time=parseFloat(localStorage[sessionStorage['uid']+'start_time']);
    }
    var end_time=start_time+1800*1000;
//启动定时器
    var my_timer=setInterval(function () {
        var surplus_time=end_time-(new Date().getTime());//剩余毫秒数；
        (surplus_time<0)&&(surplus_time=0);//防止剩余毫秒数为负数；
        var seconds=parseInt(surplus_time/1000);
        var test_minute=parseInt(seconds/60);
        var test_seconds=seconds%60;
        var ten_test_seconds=parseInt(test_seconds/10);
        var last_test_seconds=test_seconds%10;
        //console.log(test_minute+":"+test_seconds);
        $('#test_timer>span').html(test_minute+":"+ten_test_seconds+last_test_seconds);
        if(seconds<=0){
            clearInterval(my_timer);
            test_seconds=0;
            alert('时间到！自动提交试卷！');
            submit_answer();
            location.replace("score.html");
        }
    },200);

