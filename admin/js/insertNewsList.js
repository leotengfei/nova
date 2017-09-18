/**
 * Created by Administrator on 2017/8/2 0002.
 */
//验证登陆信息
	$.ajax({
		url: 'data/logininfo.php',
		success: function(result){
			if(result.uname===null||result.uid===null){
				location.href='ac1.html';
			}
		}
	});

//向上
$('div.btn-group-vertical>:first-child').click(function () {
	$("body,html").animate({scrollTop:0},"slow");
});
//向下
$('div.btn-group-vertical>:last-child').click(function () {
	var pos=document.body.scrollHeight;
	//console.log(pos);
	$("body,html").animate({scrollTop:pos});
});
//侧边栏点击事件
$('#asideLis').on('click','a', function (e) {
	newarr=[];
	e.preventDefault();
	//console.log(e.target);
	var containerId=$(e.target).attr('href');
	//console.log(containerId);
	$('#newsContainer').parent().children().css('display','none');
	$(containerId).css('display','block');

});


//*************************************************新闻列表更新界面****************************
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
			var w=(pageNum/totalPage)*100;
			$('div.progress>div.progress-bar').css('width',w+'%');
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
			//console.log(data);
			refresh(pageNum);
			$('#msg').css('display','block');
			$('#msg>div>strong').html('添加成功！');
			setTimeout(function () {
				$('#msg').css('display','none');
			},2000);
			$('#title').val("");
			$('#url').val("");
		}

	})
}

$('#btn').click(function () {
	tijiao();
});
////回车键提交功能
//$(document).keydown(function(e){
//	switch (e.keyCode)
//	{
//		case 13:e.preventDefault();
//			console.log(1);
//			tijiao();
//			break;
//	}
//});


//删除功能
$('#newslis').on('click','li>div.media-body>h4.media-heading>:first-child', function (e) {
	e.preventDefault();
	if(confirm('确定要删除吗?')){
		var nid=$(e.target).attr('href');
		$.ajax({
			type:'POST',
			url:'data/newsdelete.php',
			data:{nid:nid},
			success: function (data) {
				//console.log(data);
				refresh(pageNum);
				$('#msg').css('display','block');
				$('#msg>div>strong').html('删除成功！');
				setTimeout(function () {
					$('#msg').css('display','none');
				},2000);
			}

		})
	}

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
});


//**************************************************高中课表相关*********************************************

//预览文件按钮绑定方法
var newarr;
function readAsText(fileId,tabId){
	newarr=[];
	var file = document.getElementById(fileId).files[0];
	var reader = new FileReader();
	//将文件以文本形式读入页面
	reader.readAsText(file);
	reader.onload=function(f){
		var result=document.getElementById("result");
		//显示文件
		var arr=this.result.split("\r\n");
// 去除字符串末尾的回车产生的空值；
		arr.pop();
		for(var i=0;i<arr.length;i++){
			arr[i]=arr[i].split(',');
			var obj={};
			for(var j=0;j<arr[i].length;j++){
				obj[arr[0][j]]=arr[i][j];
			}
			obj=JSON.stringify(obj);
			newarr.push(obj);
		}
//   去除表头产生的无用对象
		newarr.shift();

		//console.log(newarr);

		var html='';
		for(var i=0;i<arr.length;i++){
			html+='<tr>';
			for(var j=0;j<arr[i].length;j++){
				html+=`
                    <td>${arr[i][j]}</td>
                `;
			}
			html+='</tr>'
		}
		$('#'+tabId).html(html);
	}
}


$('#gaozhongSub').click(function () {
	//console.log(1);
	//console.log(newarr);
	$.ajax({
		type:'POST',
		url:'data/insertgaozhong.php',
		data:{arr:newarr},
		dataType:'json',
		success: function (data) {
			console.log(data.msg);
			alert(data.msg);
		},
		error: function (data) {
			alert("请检查格式是否正确！");
		}
	})

});


//**************************************************初中课表相关*********************************************
$('#chuzhongSub').click(function () {
	//console.log(1);
	//console.log(newarr);
	$.ajax({
		type:'POST',
		url:'data/insertchuzhong.php',
		data:{arr:newarr},
		dataType:'json',
		success: function (data) {
			console.log(data.msg);
			alert(data.msg);
		},
		error: function (data) {
			alert("请检查格式是否正确！");
		}
	})
});

//**************************************************小学课表相关*********************************************
$('#xiaoxueSub').click(function () {
	$.ajax({
		type:'POST',
		url:'data/insertxiaoxue.php',
		data:{arr:newarr},
		dataType:'json',
		success: function (data) {
			console.log(data.msg);
			alert(data.msg);
		},
		error: function (data) {
			alert("请检查格式是否正确！");
		}
	})
});

//*******************************************教师信息添加***********************************************************
//教师页面加载事件
$("#asideLis>a:contains('教师信息管理')").click(function () {
	//console.log(1);
	//查询教师方法
	var selectTeacher=function(tname){
		$.ajax({
			type:'POST',
			data:{tname:tname},
			url:'data/selectTeacher.php',
			success: function (data) {
				//console.log(data);
				var html="";
				for(var i=0;i<data.length;i++){
					html+=`
				<div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/${data[i].photo_sm}" title='${data[i].introduction}' >
                            <div class="caption">
                                <h3>${data[i].tname}</h3>
                                <p>${data[i].grade}${data[i].subject}</p>
                                <p>
                                    <a href="${data[i].tid}" class="btn btn-danger" role="button">删除</a>
                                </p>
                            </div>
                        </div>
                    </div>
				`;
				}
				$('#teacherList').html(html);

			}
		})
	};

	//查询全部教师
	selectTeacher('all');
	sessionStorage['teacher']='all';

	//搜索教师
	$('#searchTeacher').click(function () {
		var kw=$(this).parent().prev().val();
		selectTeacher(kw);
		sessionStorage['teacher']=kw;
	});
	//	删除教师信息
	$('#teacherList').on('click','div.caption>p>a', function (e) {
		e.preventDefault();
		//console.log("点击删除！");
		var tid=$(e.target).attr('href');
		console.log(tid);
		if(confirm('确定要删除吗？')){
			//删除数据库信息
			console.log("确定删除");
			$.ajax({
				type:'GET',
				data:{tid:tid},
				url:'data/teacherDelete.php',
				success: function (data) {
					console.log(data[0].photo_lg,data[0].photo_sm);
					var photo_lg=data[0].photo_lg;
					var photo_sm=data[0].photo_sm;
						//删除对应图片文件
						$.ajax({
							type:'POST',
							url:'data/delete.php',
							data:{photo_lg:photo_lg,photo_sm:photo_sm},
							success: function (data) {
								console.log("删除对应图片成功"+data);
								selectTeacher('all');
								sessionStorage['teacher']='all';
							}
						});

				}
			});
		}
	});


//	提交教师信息
	$('#btn-teach').click(function () {
		var tname=$('#tname').val();
		var grade=$('#grade').val();
		var subject=$('#subject').val();
		var photo_sm=$('#photo_sm').val();
		var photo_lg=$('#photo_lg').val();
		//console.log(photo_lg,photo_sm);
		photo_sm=photo_sm.substr(photo_sm.lastIndexOf('\\')+1);
		photo_lg=photo_lg.substr(photo_lg.lastIndexOf('\\')+1);
		console.log(photo_lg,photo_sm);
		var introduction=$('#introduction').val();
		//console.log(tname,photo_sm,photo_lg,introduction,grade,subject);
		$.ajax({
			type:"POST",
			url:'data/insertTeacher.php',
			data:{tname:tname,grade:grade,subject:subject,photo_sm:photo_sm,photo_lg:photo_lg,introduction:introduction},
			success: function (data) {
				console.log(data);
			}

		});
	//上传图片
		var fd = new FormData();
		fd.append("photo_sm",$('#photo_sm')[0].files[0]);
		fd.append("photo_lg",$('#photo_lg')[0].files[0]);
		console.dir(fd);
		$.ajax({
			url:'data/upload.php',
			type:'POST',
			data:fd,
			cache: false,
			processData: false,
			contentType: false,
			success: function (data) {
				$('#tname').val("");
				$('#grade').val("0");
				$('#subject').val("0");
				$('#photo_sm').val("");
				$('#photo_lg').val("");
				$('#introduction').val("");
				alert(data);
				selectTeacher('all');
				sessionStorage['teacher']='all';
			}
		})


	});

//	校验图片名称是否重复
	$('#photo_sm').change(function () {
		console.log(1);
		var photo_sm=$('#photo_sm').val();
		photo_sm=photo_sm.substr(photo_sm.lastIndexOf('\\')+1);
		$.ajax({
			type:"POST",
			url:'data/isExist.php',
			data:{fileName:photo_sm},
			success: function (data) {
				console.log(data)
			}

		})
	})

});