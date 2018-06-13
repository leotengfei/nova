//  老师数据实现滚动加载
var isLoading = false;
var isEnd = false;
var triggerDistance = 200;
var pageNum = 1;
var isSearched = false;


function fetchData() {
    if(isSearched){
        return;
        //搜索结果禁用下拉加载；
    }
    var distance = vote_area.getBoundingClientRect().bottom - window.innerHeight;
    console.log(distance);
    if (!isLoading && !isEnd && distance < triggerDistance) {
        isLoading = true;
        console.log(1);
        $.ajax({
            type: 'GET',
            data:{
                pageNum:pageNum
            },
            url: 'assets/data/voteArr.php',
            success: function (data) {
                //console.log(data)
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += `
            <div class="am-u-sm-6">
                <div class="am-thumbnail vote_item">
                    <figure data-am-widget="figure" class="am am-figure am-figure-default "   data-am-figure="{  pureview: 'true' }">
                        <img src="assets/img/${data[i].pic}" alt="${data[i].vname}"/>
                    </figure>
                    <div class="am-thumbnail-caption">
                        <h3>${data[i].vid}号  ${data[i].vname}</h3>
                        <p>
                            <a href="${data[i].vid}" class="am-btn am-round am-btn-sm am-btn-warning">投票</a>
                        </p>
                    </div>
                </div>
            </div>
            `
                }
                $('#vote_area').append(html);
                isLoading = false;
                pageNum++;
                //console.log(data);
                if (data.length === 0) {
                    isEnd = true;
                }
            }
        });
    }
}
window.addEventListener('scroll', fetchData);
fetchData();



$('#vote_area').on('click', 'div>div>div>p>a', function (e) {
    e.preventDefault();
    if (!localStorage['ruid']) {
        //如果无ruid,生成ruid
        var ruid = new Date().getTime();
        //console.log(ruid);
        localStorage['ruid'] = ruid;
    }

    //console.log($(this).attr('href'));
    var vid = $(this).attr('href');
    $.ajax({
        type: 'POST',
        data: {
            vid: vid,
            ruid: localStorage['ruid']
        },
        url: 'assets/data/insertVote.php',
        success: function (data) {
            //console.log(data.code);
            if (data.code == '1') {
                console.log('插入成功！');
                $('#my-alert div.am-modal-bd').html('<b>投票成功！<br/>是否免费试听期末冲刺总复习？</b>')
                $('#vote_area').html('');
                pageNum = 1;
                fetchData();
            } else if (data.code == '-1') {
                console.log('插入失败')
                $('#my-alert div.am-modal-bd').html('<b>投票失败！<br/>是否免费试听期末冲刺总复习？</b>')
            } else if (data.code == '-2') {
                console.log('没人每天只能投一次票哦！');
                $('#my-alert div.am-modal-bd').html('<b>每天只能投一次票哦！<br/>是否免费试听期末冲刺总复习？</b>')
            }
            $('#my-alert').modal();
        }
    })
})


// 搜索按钮点击事件
$('#search_name').click(function(){
    isSearched = true;//防止下拉加载
    var uname=$('#uname').val();
    console.log(uname)
    if(uname){
        $.ajax({
            type:'POST',
            data:{
                uname:uname
            },
            url:'assets/data/search.php',
            success:function(data){
                //console.log(data)
                var html = '';
                if(data.length){
                    for (var i = 0; i < data.length; i++) {
                        html += `
                <div class="am-u-sm-6">
                    <div class="am-thumbnail vote_item">
                        <figure data-am-widget="figure" class="am am-figure am-figure-default "   data-am-figure="{  pureview: 'true' }">
                            <img src="assets/img/${data[i].pic}" alt="${data[i].vname}"/>
                        </figure>
                        <div class="am-thumbnail-caption">
                            <h3>${data[i].vid}号  ${data[i].vname}</h3>
                            <p>
                                <a href="${data[i].vid}" class="am-btn am-round am-btn-sm am-btn-warning">投票</a>
                            </p>
                        </div>
                    </div>
                </div>
                `
                }
                html+=`<button type='button' class='am-btn  am-radius  am-btn-block am-btn-danger ' id="fanhui">返回</button>`;
                }else{
                    html=`<div class="am-alert am-alert-danger">似乎没有这个人哦！</div>
                    <button type='button' class='am-btn  am-radius  am-btn-block am-btn-danger ' id="fanhui">返回</button>`
                }
               
            $('#vote_area').html(html);
        }
        })
    }else{
        alert('请填入姓名再搜索！')
    }
})

// 返回按钮点击事件
$('#vote_area').on('click','#fanhui',function(){
    isSearched=false;
    $('#vote_area').html('');
    pageNum = 1;
    fetchData();
})