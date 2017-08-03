/**
 * Created by Administrator on 2017/8/2 0002.
 */
//验证登陆信息
	$.ajax({
		url: 'data/logininfo.php',
		success: function(result){
			if(result.uname===null||result.uid===null){
				location.href='index.html';
			}
		}
	});

//刷新页面
function refresh(pageNum){
		$.ajax({
    	type:"GET",
		data:{pageNum:pageNum},
    	url:'data/select.php',
    	success:function(data){
			data=data.reverse();
        	var html='';
        	for(var i=0;i<data.length;i++){
            	html+=`
					<li class="media">
						<div class="media-body">
							<h4 class="media-heading">
								<a href="${data[i].nid}" class="btn btn-danger">删除</a><a href="${data[i].url}" target="_blank">
									${data[i].title}
								</a>
							</h4>
							<!-- Nested media object -->
							<div class="media">
								<span>${data[i].direction}</span>
								<span>${data[i].pub}</span>
								<span class="pull-right">${data[i].date}</span>
							</div>
						</div>
            		</li>
						`;
        }
        $('ul.media-list').html(html);
    }
});
}

refresh(1);

//提交功能
function tijiao(){
	var date=$('#ndate').val();
	var pub=$('input[name="pub"]:checked').val();
	var classify=$('input[name="classify"]:checked').val();
	var direction=$('input[name="direction"]:checked').val();
	var title=$('#title').val();
	var url=$('#url').val();
	var imgUrl='';
	switch (classify){
		case '政策':
			imgUrl='zhengce.jpg';
			break;
		case '教育':
			imgUrl='jiaoyv.jpg';
			break;
		case '考试':
			imgUrl='kaoshi.jpg';
			break;
	}
	$.ajax({
		type:'POST',
		url:'data/insert.php',
		data:{date:date,pub:pub,classify:classify,direction:direction,title:title,url:url,imgUrl:imgUrl},
		success: function (data) {
			console.log(data);
			refresh(pageNum);
			$('#msg>strong').html('添加成功！');
			$('#title').val("");
			$('#url').val("");
		}

	})
}

$('#btn').click(function () {
	tijiao();
});
//回车键提交功能
$(document).keydown(function(e){
	switch (e.keyCode)
	{
		case 13:e.preventDefault();
			console.log(1);
			tijiao();
			break;
	}
});


//删除功能
$('#newslis').on('click','li>div.media-body>h4.media-heading>:first-child', function (e) {
	e.preventDefault();
	console.log("delete is clicked");
	var nid=$(e.target).attr('href');
	$.ajax({
		type:'POST',
		url:'data/newsdelete.php',
		data:{nid:nid},
		success: function (data) {
			console.log(data);
			refresh(pageNum);
			$('#msg>strong').html('删除成功！');
		}

	})
});

//向上
$('div.btn-group-vertical>:first-child').click(function () {
	$("body,html").animate({scrollTop:0},"slow");
});
//向下
$('div.btn-group-vertical>:last-child').click(function () {
	var pos=$('form').offset().top;
	console.log(pos);
	$("body,html").animate({scrollTop:pos},"slow");
});

//总页码数
var totalPage=0;
//当前页码数
var pageNum=1;
$.ajax({
	type:'GET',
	url:'data/page.php',
	success: function (data) {
		totalPage=data.page;
	}
});
//分页
$('ul.pager').on('click','li>a',function (e) {
	e.preventDefault();
	if($(e.target).html()==='上一页'){
		if(pageNum>1){
			pageNum--;
		}else if(pageNum<=1){
			pageNum=1;
		}

	}else if($(e.target).html()==='下一页'){
		if(pageNum<totalPage){
			pageNum++;
		}else if(pageNum>=totalPage){
			pageNum=totalPage;
		}
	}
	refresh(pageNum);
	var w=(pageNum/totalPage)*100;
	$('div.progress>div.progress-bar').css('width',w+'%');
});


