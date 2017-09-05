<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$grade=$_REQUEST['grade'] or die('{"code":-2,"msg":"grade是必须的"}');
	$sql="SELECT DISTINCT clocation FROM firstclass WHERE grade='$grade'";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>