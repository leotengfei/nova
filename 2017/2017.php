<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title>无线星空2017年会座位查询系统</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<style type="text/css">
	body{
		font-family: "Microsoft Yahei", SimSun, Arial, sans-serif;
		text-shadow: none;
		text-shadow:none; text-transform:none; text-decoration:none;
		background-color: #eee;
	}
	h3{color: #0D93D2;}
	ul{
		list-style-type: none;
	}
	ul li{
		display: inline-block;
		float: left;
		margin: 0px auto;
	}
	</style>
	<script type="text/javascript">
	function checktest(){
		var checkname = document.getElementById("name").value;
		if(checkname == ""){
			alert("姓名是不是没写对");		
		}else{
			var form = document.getElementById("myForm");
			//提交表单
			form.submit();　
		}
	}

</script>
</head>
<body>

<div style="width:100%">
	<div style="margin:0 auto; width:100%; background-color:#0D93D2; text-align:center; padding:20px;"><img src="http://7xisnn.com1.z0.glb.clouddn.com/logo32.png" width="90%" style="max-width:600px;"></div>
</div>
<img src="img/ll.png" width="100%">
<div style="width:65%; max-width:320px; margin:40px auto;">
	<!--<h3 align="center">星空会登录</h3>-->
	<form id="myForm" action="2017nh.php" method="post" target="_self" style="text-align:center;">
		<div class="input-group" style="margin-top:20px;">
      		<div class="input-group-addon" style="background-color:#0D93D2;border-color:#0D93D2; color:#fff;">姓名</div>
      		<input type="text" class="form-control" id="name" name="name" style="border-color:#0D93D2;" placeholder="输入姓名">
    	</div>
    	<ul>
    		<!--<li>
			<input type="button" class="btn btn-warning" onclick="zhuce()" value="节目单" style="margin-top:30px; width:80px;"> 
			</li>
			<li>
			<input type="button" class="btn btn-info" onclick="checktest()" value="查座位" style="margin-top:30px; width:80px; display:inline"> 
			</li>-->
		</ul>
		<p>
			<input type="button" class="btn btn-info" onclick="checktest()" value="查座位" style="margin-top:30px; width:80px; display:inline"> 
		</p>
	</form>
</div>

	<div style="background-color:#5BC0DE; border-radius:10px; width:60%; max-width:320px; height:22px; margin:0 auto;">
		<p style="text-align:center; font-size:14px; padding:1px 0; color:#fff;">网络营销部设计制作</p>
	</div>

</body>
</html>
