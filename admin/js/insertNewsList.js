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
function refresh(){
		$.ajax({
    type:"GET",
    url:'data/select.php',
    success:function(data){
        var html='';
        for(var i=0;i<data.length;i++){
            html+=`
					<li class="media">
						<div class="media-body">
							<h4 class="media-heading">
								<a href="${data[i].nid}" class="btn btn-danger">删除</a><a href="${data[i].url}">
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

refresh();

//提交功能
$('#btn').click(function () {
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
		   refresh();
	   }

   })
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
			refresh();
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