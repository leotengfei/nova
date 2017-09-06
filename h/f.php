<?php
header("Content-Type:text/html;charset=utf-8"); 
error_reporting(E_ALL^E_NOTICE);
$heka = $_GET['heka'];
$name2 = $_GET['name2'];
$name = $_GET['name'];
$phone = $_GET['phone'];
$zhufu = $_GET['zhufu'];
date_default_timezone_set('Etc/GMT-8');

$username = 'dongfei';
$password = 'dongfei816';

$hekanum = '';


//判断name的值是否成功获取
if($name == '' || $heka == '' || $name2 == '' || $phone == '' || $zhufu == ''){
	echo '<script>alert("贺卡生成失败T T，您重新选一下吧");window.location.href="index.html"; </script>';
}

if($heka == 5 || $heka == 6){
	$hekanum = '30%';
}else{
	$hekanum = '50%';
}


try {
    $conn = new PDO('mysql:host=rm-2ze9p3u65h62267nmo.mysql.rds.aliyuncs.com;dbname=wxxk2016', $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("SET NAMES 'utf8'");
    //$insert = "INSERT INTO merry (name,name2,phone,zhufu,heka,date) values(\"{$_GET['name']}\",\"{$_GET['name2']}\",\"{$_GET['phone']}\",\"{$_GET['zhufu']}\",\"{$_GET['heka']}\",now())";

    //$insert = "INSERT INTO merry (name,name2,phone,zhufu,heka,date) SELECT \"{$_GET['name']}\",\"{$_GET['name2']}\",\"{$_GET['phone']}\",\"{$_GET['zhufu']}\",\"{$_GET['heka']}\",now() FROM DUAL WHERE NOT EXISTS (SELECT phone FROM merry WHERE phone = \"$phone\")";

    $insert = "INSERT INTO merry (name,name2,phone,zhufu,heka,date) SELECT \"{$_GET['name']}\",\"{$_GET['name2']}\",\"{$_GET['phone']}\",\"{$_GET['zhufu']}\",\"{$_GET['heka']}\",now() FROM DUAL WHERE NOT EXISTS (SELECT phone FROM merry WHERE phone = \"$phone\" and name2 = \"$name2\")";
  
    if($_GET['name']<>'' || $_GET['phone']<>''){
    $conn->exec($insert); 
    $res = $conn->lastInsertId();
    }else{
   		echo '<script>alert("程序开小差了T T，您在输入一下把");window.location.href="index.html"; </script>';
	}

} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
    exit;
}

$conn = null;

?>


<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title><?php echo '亲爱的'.$name2.'，你有一份来自'.$name.'的圣诞祝福。' ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="http://7xisnn.com1.z0.glb.clouddn.com/cdnbootstrap.min.css" rel="stylesheet">
	<style type="text/css">
	h3{color: #FF7474;font-weight: bold;}
	ul{
		list-style-type: none;
		margin: 10 auto;
		padding: 0;
	}
	ul li{	
		display: inline-block;	
		float: left;
		margin: 20px 5%;
		width: 40%;
	}
	 #bg{ display: none; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; background-color: black; z-index:10001; -moz-opacity: 0.7; opacity:.70; filter: alpha(opacity=70);}
 	 #zf{display: none; position: absolute; top: 0%; left: 0%; width: 100%; height: 400px; z-index:10002;}

body{
		font-family: "Microsoft Yahei", SimSun, Arial, sans-serif;
		max-width: 480px;
		margin: 0 auto;
        <?php echo 'background:url(img/bg'.$heka.'.jpg) no-repeat;'?>
        height:100%;
  		width:100%;
  		overflow: hidden;
  		background-size:100%;
	}
#ppwz{
	width: 80%;
	border-radius: 8px;
	padding: 10px;
	color: #fff;
	text-shadow:0 0 0.9em #227FA1,-0 -0 0.2em #227FA1;
	font-size: 16px;
	<?php echo 'top:'.$hekanum.';'?>
	left:10%;
	position: absolute;
}
#to{
	font-weight: bold;
}
#from{
	font-weight: bold;
	text-align: right;
}
#nr{
	 text-indent:2em;
}
#szf{
	text-align: center;
	z-index: 999999;
}
#ppwz2{
	width: 80%;
	margin: 10px auto;
	padding: 10px;
	color: #fff;
	text-shadow:0 0 0.9em #B755FF,-0 -0 0.2em #B755FF;
	font-size: 12px;
}
#de1{
	text-align: center;
	color: #fff;
	text-shadow:0 0 0.9em #B755FF,-0 -0 0.2em #B755FF;
	font-size: 12px;
}
 #bg{ display: none; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; background-color: black; z-index:10001; -moz-opacity: 0.7; opacity:.70; filter: alpha(opacity=70);}
 #zf{display: none; position: absolute; top: 0%; left: 0%; width: 100%; height: 400px; z-index:10002;}
	</style>


	<script type="text/javascript">
	function showup(){
		document.getElementById("bg").style.display="block";
		document.getElementById("zf").style.display="block";
	}
	function hideup(){
		document.getElementById("bg").style.display="none";
		document.getElementById("zf").style.display="none";
	}
	</script>
</head>
<body>
<div id="ppwz">
	<p id="to">To:亲爱的<?php echo $name2; ?>:</p>
	<p id="nr"><?php echo $zhufu; ?></p>
	<p id="from">From:<?php echo $name; ?></p>		
	<hr>
	<p id="szf" align="center">
		<a onclick="showup();" class="btn btn-large btn-success">发送祝福</a> <a href="index.html" target="_self" class="btn btn-large btn-info">制作贺卡</a> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">抽奖</button>
	</p>
	<p id="de1">无线星空 中小学名师教育 029-84561188</p>
</div>



<!-- Modal -->
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">送圣诞祝福，赢千元礼包</h4>
      </div>
      <div class="modal-body">
      	<!--<h4><strong>圣诞节到来，送出你的祝福</strong></h4><-->
        <strong>1.参与活动：</strong>在活动期间送出圣诞/新年祝福。<br />
        <strong>2.参与抽奖：</strong>将含有祝福的截图发送给无线星空公众号wxxk2015<br />
        <strong>3.公示投票：</strong>将会在12月27日公示+投票，选出最暖心祝福。<br />
        <strong>4.获奖名单：</strong>2017年1月3日公布获奖名单。<br />
        <strong>5.奖品说明：</strong><br />
        &nbsp;&nbsp;&nbsp; a.一等奖 春季2个班或红米pro 1台<br />
        &nbsp;&nbsp;&nbsp; b.二等奖 春季1个班或书包1个+水杯1个<br />
        &nbsp;&nbsp;&nbsp; c.三等奖 春季1个班半价或书包1个<br />
        &nbsp;&nbsp;&nbsp; d.温暖奖 春季班立减200元或水杯1个<br />
        <strong>6.咨询电话：</strong>029-84561188<br />
        <strong>7.特别说明：</strong>本活动最终解释权归无线星空所有<br />
        <p>
        	<img src="img/pp3.jpg" style="display:none;">
        	<img src="img/pp2.jpg" width="48%">
        	<img src="img/pp1.jpg" width="48%">
        	<br />
        	<span style="float:left;text-align:center;width:48%;">红米pro手机</span>
        	<span style="float:left;text-align:center;width:48%;">书包+水杯</span>
        	
        </p>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
        <button type="button" class="btn btn-info" data-dismiss="modal">朕知道了</button>
      </div>
    </div>
  </div>
</div>


<div id="bg" onclick="hideup();">	
</div>
<div id="zf" onclick="hideup();">
	<img src="img/ds.png" width="100%">
	<br />
	<!--<p align="center" style="color:#ffffff;text-align:center;font-size:24px;">立即分享，拿千元奖学金</p>-->
</div>

<script type="text/javascript" src="snow.src.js"></script>
<!--baidu tongji百度统计开始-->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?a6242ecb4a04a4c2398858f6f07fda4c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

<!--baidu tongji百度统计结束-->
<script src="http://7xisnn.com1.z0.glb.clouddn.com/cdnjquery.min.js"></script>
<script src="http://7xisnn.com1.z0.glb.clouddn.com/cdnbootstrap.min.js"></script>
</body>
</html>
