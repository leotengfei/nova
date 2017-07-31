jQuery(function($) {



	//Ajax contact
	var form = $('.contact-form');
		form.submit(function () {
			$this = $(this);
			$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//Goto Top
	$('.gototop').click(function(event) {
		 event.preventDefault();
		 $('html, body').animate({
			 scrollTop: $("body").offset().top
		 }, 500);
	});	
	//End goto top		

});

$(document).ready(function(){
	$("#logo").click(function(){
		window.location.href="http://www.wxxk.org/";
  });
});
//newsListҳ页面js

$(function () {
	sessionStorage['classify']='all';
	sessionStorage['direction']='all';
	sessionStorage['pageNum']=1;
	//默认发送的ajax请求样式
	var createLis= function (classify,direction,num) {
		//加载默认页面
		$.ajax({
			type:"POST",
			url:'../sql/select.php',
			data:{classify:classify,direction:direction,pageNum:num},
			success:function(data){
				var html='';
				for(var i=0;i<data.length;i++){
					html+=`
					<li class="media">
						<a class="pull-left" href="${data[i].url}">
							<img class="media-object img-rounded" src="../images/${data[i].imgUrl}">
						</a>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="${data[i].url}">
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
				$('#newsList_mid>ul.media-list').html(html);
			}
		});
	};
	var createBtns= function (classify,direction) {
		//生成下面按钮
		$.ajax({
			type:"POST",
			url:'../sql/page.php',
			data:{classify:classify,direction:direction},
			success: function (data) {
				sessionStorage['totalPage']=data.page;
				var html='';
				html+=`<button class="btn btn-small" style="display:none">&lt;上一页</button>`;
				html+=`<button class="btn btn-small btn-success">1</button>`;
				if(data.page<=6){
				for(var i=1;i<data.page;i++){
					html+=`
					<button class="btn btn-small">${i+1}</button>
				`;
				}
					}else{
					for(var i=1;i<6;i++){
						html+=`
					<button class="btn btn-small">${i+1}</button>
				`;
					}
				}
				html+=`<button class="btn btn-small">下一页&gt;</button>`;
				var btns=$(html);
				$('#newsList_mid>p').html(btns);
			}
		})
	};
	createLis('all','all',1);
	createBtns('all','all');
//	政策点击发送的请求
	$('#newsList_left>:first-child').click(function () {
		sessionStorage['classify']=$(this).html();
		sessionStorage['direction']='all';
		sessionStorage['pageNum']=1;
		createLis('政策','all',1);
		createBtns('政策','all');
	});
//	教育点击发送的请求
	$('#newsList_left>:nth-child(2)').click(function () {
		sessionStorage['classify']=$(this).html();
		sessionStorage['direction']='all';
		sessionStorage['pageNum']=1;
		createLis('教育','all',1);
		createBtns('教育','all');
	});
	//	考试点击发送的请求
	$('#newsList_left>:nth-child(3)').click(function () {
		sessionStorage['classify']=$(this).html();
		sessionStorage['direction']='all';
		sessionStorage['pageNum']=1;
		createLis('考试','all',1);
		createBtns('考试','all');
	});
//	分页按钮点击事件
	$('#newsList_mid>p').on('click','button', function (e) {
		var num=e.target.innerHTML;
		if(num==="&lt;上一页"){ //点击上一页按钮时的事件
			sessionStorage['pageNum']--;
			if(sessionStorage['pageNum']>=4){//刷新按钮的数字
				for(var i=2;i<=7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(parseInt(sessionStorage['pageNum'])+(i-5));
				}
			}else{//按钮数字不变
				for(var i=2;i<7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(i-1);
				}
			}
		}else if(num==="下一页&gt;"){  //点击下一页按钮时的事件
			sessionStorage['pageNum']++;
			if(sessionStorage['pageNum']>=4&&(sessionStorage['pageNum']<sessionStorage['totalPage']-2)){//刷新按钮的数字
				for(var i=2;i<=7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(parseInt(sessionStorage['pageNum'])+(i-5));
				}
			}else if(sessionStorage['pageNum']>=sessionStorage['totalPage']-2){
				for(var i=2;i<=7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(sessionStorage['totalPage']-7+i);
				}
			}
		}else if(num>=1&&num<=4){   //点击当数字为1-4的事件
			sessionStorage['pageNum']=num;
				$('#newsList_mid>p>:first-child').css("display","inline-block");
				$('#newsList_mid>p>:last-child').css("display","inline-block");
			if(sessionStorage['pageNum']>=4){//刷新按钮的数字
				for(var i=2;i<=7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(parseInt(sessionStorage['pageNum'])+(i-5));
				}
			}else{//按钮数字不变
				for(var i=2;i<7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(i-1);
				}
			}
		}else if(num>4){    //点击当数字4-totalnum的事件
			sessionStorage['pageNum']=num;
			$('#newsList_mid>p>:first-child').css("display","inline-block");
			$('#newsList_mid>p>:last-child').css("display","inline-block");
			if(sessionStorage['pageNum']<(sessionStorage['totalPage']-3)){
				for(var i=2;i<=7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(parseInt(sessionStorage['pageNum'])+(i-5));
				}
			}else{
				for(var i=2;i<=7;i++){
					$('#newsList_mid>p>:nth-child('+i+')').html(sessionStorage['totalPage']-7+i);
				}
			}
		}
        //修改css
		$('#newsList_mid>p>:contains('+sessionStorage['pageNum']+')').siblings().removeClass('btn-success');
		$('#newsList_mid>p>:contains('+sessionStorage['pageNum']+')').addClass('btn-success');

		createLis(sessionStorage['classify'],sessionStorage['direction'],sessionStorage['pageNum']);
			//console.log(sessionStorage['pageNum']+'pageNum');
			//console.log(sessionStorage['totalPage']+'totalPage');
		if(sessionStorage['pageNum']<=1){//防止按钮数字 越界
			$('#newsList_mid>p>:first-child').css("display","none");
		}else if(sessionStorage['pageNum']===(sessionStorage['totalPage'])){
			$('#newsList_mid>p>:last-child').css("display","none");
		}

	})

//模态框 canvas
	var modalW=parseInt($('#newsList_mid>ul').css('width'));
	var modalH=840;
	myModal.width=modalW;
	myModal.height=modalH;
	var ctx=myModal.getContext('2d');
	var pic=new Image();
	pic.src='../images/canvas.png';
	pic.onload=function(){
		var deg=1;
		setInterval(function(){
			ctx.save();
			ctx.clearRect(0,0,modalW,modalH);
			ctx.translate(modalW/2,modalH/2);
			ctx.rotate(2*deg*Math.PI/180);
			ctx.drawImage(pic,-modalW/2,-modalW/2,modalW,modalW);
			ctx.restore();
			deg+=1;
		},50);
	}
});