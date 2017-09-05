<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$tel=$_REQUEST['tel'] or die('{"code":-2,"msg":"stel是必须的"}');
	$sql="SELECT * FROM apoint_msg WHERE tel='$tel'";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>