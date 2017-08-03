<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$sql="SELECT count(nid) FROM t_news";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$num=ceil($row[0]/10);
	echo '{"page":'.$num.'}';
?>