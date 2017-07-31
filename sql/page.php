<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	@$classify=$_REQUEST['classify'] or die('{"code":-2,"msg":"classify是必须的"}');
	@$direction=$_REQUEST['direction'] or die('{"code":-3,"msg":"direction是必须的"}');
	if($classify=='all'){
		$sql="SELECT count(nid) FROM t_news";
	}else{
		if($direction=='all'){
			$sql="SELECT count(nid) FROM t_news WHERE classify='$classify'";
		}else{
			$sql="SELECT count(nid) FROM t_news WHERE classify='$classify' AND direction='$direction'";
		}
	}
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$num=ceil($row[0]/10);
	echo '{"page":'.$num.'}';
?>