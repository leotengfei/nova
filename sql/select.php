<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$classify=$_REQUEST['classify'] or die('{"code":-2,"msg":"classify是必须的"}');
	@$pageNum=$_REQUEST['pageNum'] or die('{"code":-3,"msg":"pageNum是必须的"}');
	@$direction=$_REQUEST['direction'] or die('{"code":-4,"msg":direction是必须的}');
	$page=($pageNum-1)*10;
	if($classify=='all'){
		$sql="SELECT * FROM t_news ORDER BY date DESC LIMIT $page,10";
	}else{
		if($direction=='all'){
			$sql="SELECT * FROM t_news WHERE classify='$classify' ORDER BY date DESC LIMIT $page,10";
		}else{
			$sql="SELECT * FROM t_news WHERE classify='$classify' AND direction='$direction' ORDER BY date DESC LIMIT $page,10";
		}
	}
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_array($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>