<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	$sql="SELECT * FROM form_get";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_array($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>