<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$grade=$_REQUEST['grade'] or die('{"code":-2,"msg":"grade是必须的"}');
	@$clocation=$_REQUEST['clocation'] or die('{"code":-3,"msg":"clocation是必须的"}');
	$sql="SELECT cname,cdate,ctime,clocation FROM firstclass WHERE grade='$grade' AND clocation='$clocation'";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>