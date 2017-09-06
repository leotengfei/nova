<?php
error_reporting(E_ALL^E_NOTICE);
$name = $_GET['name'];
date_default_timezone_set('Etc/GMT-8');

//判断name的值是否成功获取
if($name == ''){
	echo '<script>alert("程序开小差了T T，您在输入一下把");window.location.href="ql.html"; </script>';
}

//php获取中文字符拼音首字母
function getFirstCharter($str){
    if(empty($str)){return '';}
    $m = strlen($str);
    $str = substr($str,-3,3);
    $fchar=ord($str{0});
    if($fchar>=ord('A')&&$fchar<=ord('z')) return strtoupper($str{0});
    $s1=iconv('UTF-8','gb2312',$str);
    $s2=iconv('gb2312','UTF-8',$s1);
    $s=$s2==$str?$s1:$str;
    $asc=ord($s{0})*256+ord($s{1})-65536;

    if($asc>=-20319&&$asc<=-20284) return '1';
    if($asc>=-20283&&$asc<=-19776) return '2';
    if($asc>=-19775&&$asc<=-19219) return '3';
    if($asc>=-19218&&$asc<=-18711) return '4';
    if($asc>=-18710&&$asc<=-18527) return '5';
    if($asc>=-18526&&$asc<=-18240) return '6';
    if($asc>=-18239&&$asc<=-17923) return '7';
    if($asc>=-17922&&$asc<=-17418) return '8';
    if($asc>=-17417&&$asc<=-16475) return '9';
    if($asc>=-16474&&$asc<=-16213) return '1';
    if($asc>=-16212&&$asc<=-15641) return '2';
    if($asc>=-15640&&$asc<=-15166) return '3';
    if($asc>=-15165&&$asc<=-14923) return '4';
    if($asc>=-14922&&$asc<=-14915) return '5';
    if($asc>=-14914&&$asc<=-14631) return '6';
    if($asc>=-14630&&$asc<=-14150) return '7';
    if($asc>=-14149&&$asc<=-14091) return '8';
    if($asc>=-14090&&$asc<=-13319) return '9';
    if($asc>=-13318&&$asc<=-12839) return '1';
    if($asc>=-12838&&$asc<=-12557) return '2';
    if($asc>=-12556&&$asc<=-11848) return '3';
    if($asc>=-11847&&$asc<=-11056) return '4';
    if($asc>=-11055&&$asc<=-10247) return '5';

	return null;
}

$res = getFirstCharter($name);
//echo $res;
$resimg = '';
$resault = '';
$resbody = '';

 switch ($res) {
 	case '1':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/ydh.jpg';
 		$resault = '运动好';
 		$resbody = '拥有火热的内心，享受在运动中酣畅淋漓的快乐。可以在学习和生活之余选择一些适合自己的体育项目，在汗水中可能会体会到不一样的乐趣和感悟。';
 		break;
 	case '2':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/ycy.jpg';
 		$resault = '有才艺';
 		$resbody = '拥有一颗有创造力的心灵，在艺术的海洋中更容易找到共鸣。不要压抑内心天马行空的的灵感，试着将他们实现出来吧。';
 		break;
 	case '3':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/yzg.jpg';
 		$resault = '颜值高';
 		$resbody = '在这个看脸的时代，人生光明灿烂的不需要解释，再加上后天努力，颜值+才华的组合会使你的未来拥有无限的可能。';
 		break;
 	case '4':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/xgh.jpg';
 		$resault = '性格好';
 		$resbody = '乐观来自于温柔的内心，是懂得照顾别人感受，人见人爱，花见花开的好宝宝。良好的人际关系会帮你在未来赢得许多机会。';
 		break;
 	case '5':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/xxh.jpg';
 		$resault = '学习好';
 		$resbody = '拥有一颗聪明的大脑，已经战胜70%的人了，再加上后天努力作催化，学霸的未来不可限量。';
 		break;
 	case '6':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/yzj.jpg';
 		$resault = '有主见';
 		$resbody = '遇事有自己见解，不会盲目跟风人云亦云，独立思考是一种珍贵的能力，在未来会给你带来许多与众不同的精彩。';
 		break;
 	case '7':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/yax.jpg';
 		$resault = '有爱心';
 		$resbody = '只有拥有美好心灵的人，才能发现生活中的美好。保持下去，你的美好和善良会帮你在身边聚拢起许多这同道合的小伙伴。';
 		break;
 	case '8':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/cyh.jpg';
 		$resault = '厨艺好';
 		$resbody = '热爱生活，从热爱美食开始。对美食充满热情的你在生活中也必将是一个活力满满的人。';
 		break;
 	case '9':
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/ymx.jpg';
 		$resault = '有梦想';
 		$resbody = '内心装着一个小宇宙。拥有梦想是一件无比珍贵的事情，坚持梦想，不忘初心，一定会收获比其他人更丰富的人生。';
 		break;
 	default:
 		$resimg = 'http://7xisnn.com1.z0.glb.clouddn.com/816/ymx.jpg';
 		$resault = '有梦想';
 		$resbody = '内心装着一个小宇宙。拥有梦想是一件无比珍贵的事情，坚持梦想，不忘初心，一定会收获比其他人更丰富的人生。';
 		break;
 }

?>


<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title><?php echo ' '.$name.' de潜力空间_无线星空教育' ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="http://7xisnn.com1.z0.glb.clouddn.com/cdnbootstrap.min.css" rel="stylesheet">
	<style type="text/css">
	body{
		font-family: "Microsoft Yahei", SimSun, Arial, sans-serif;
		font-size: 14px;
		text-shadow: none;
		text-shadow:none; text-transform:none; text-decoration:none;
		background-color: #eee;
	}
	h3{color: #1EACEE;font-weight: bold;}
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


<div style="width:100%">
	<div style="margin:0 auto; width:100%; background-color:#18A3E3; text-align:center; padding:20px;"><img src="http://7xisnn.com1.z0.glb.clouddn.com/logo32.png" width="90%" style="max-width:600px;"></div>
</div>

<div style="width:100%; padding:0px; margin:0px auto;">
	<!--<img src="ql1.jpg" width="100%">-->
	<img src="<?php echo $resimg ?>" width="100%">
	<h3 style="text-align:center"><?php echo $name.' · '; ?> <?php echo $resault; ?></h4>
	<p style="padding:10px;">
		<?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$resbody; ?>
	</p>
	<p style="text-align:center;">
		<a href="ql.html" target="_self" class="btn btn-large btn-info">我也要测潜力</a> <a onclick="showup();" class="btn btn-large btn-success">转发朋友圈</a>
	</p>
</div>
<div style="bottom:0px; position:fixed; width:100%;">
	<div style="background-color:#5BC0DE; width:100%; height:44px; margin:0 auto;">
		<p style="text-align:center; font-size:14px; line-height:20px; padding:1px 0; color:#fff;">推荐朋友报名无线星空秋季初中课程<br /><font  color="#FDFF62"><strong>立享200元现金奖励</strong></font></p>
	</div>
</div>

<div id="bg" onclick="hideup();">	
</div>
<div id="zf" onclick="hideup();">
	<img src="http://7xisnn.com1.z0.glb.clouddn.com/816/ds.png" width="100%">
</div>
</body>
<script src="http://7xisnn.com1.z0.glb.clouddn.com/cdnjquery.min.js"></script>
<script src="http://7xisnn.com1.z0.glb.clouddn.com/cdnbootstrap.min.js"></script>
</html>
