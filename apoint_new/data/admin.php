<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	$sql="SELECT * FROM apoint_msg";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>
