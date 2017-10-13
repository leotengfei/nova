<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$city=$_REQUEST['city'] or die('{"code":-2,"msg":"城市是必须的！"}');
	if($city=='all'){
		$sql="SELECT * FROM apoint_msg";
	}else{
		$sql="SELECT * FROM apoint_msg WHERE city='$city'";
	}
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>