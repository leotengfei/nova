<?php
	header("content-type:application/json;charset=utf-8");
	@$grade=$_REQUEST['grade'] or die('{"code":-2,"msg":"grade是必须的"}');
	@$location=$_REQUEST['location'] or die('{"code":-3,"msg":"location是必须的"}');
	require('init.php');
	$sql="SELECT * FROM chuzhong WHERE grade='$grade' AND location='$location'";
	$result=mysqli_query($conn,$sql);
	$posts = array();
          while($row = mysqli_fetch_assoc($result)) {
          $posts[] = $row;}
         	$json=json_encode($posts);
          echo $json;
?>