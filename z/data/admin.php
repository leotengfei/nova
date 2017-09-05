<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$clocation=$_REQUEST['clocation'] or die('{"code":-2,"msg":"校区是必须的！"}');
	@$grade=$_REQUEST['grade'] or die('{"code":-3,"msg":"年级是必须的！"}');
	if($clocation=='all'){
		if($grade=='all'){
			$sql="SELECT * FROM apoint_msg";
		}else{
			$sql="SELECT * FROM apoint_msg WHERE grade='$grade'";
		}
	}else{
		if($grade=='all'){
			$sql="SELECT * FROM apoint_msg WHERE clocation='$clocation'";
		}else{
			$sql="SELECT * FROM apoint_msg WHERE clocation='$clocation' AND grade='$grade'";
		}
	}
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>