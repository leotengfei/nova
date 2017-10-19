<?php
//寒假魔鬼训练营
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	$sql="SELECT * FROM gaozhong WHERE project='理科寒假魔鬼训练营' OR project='文科寒假魔鬼训练营'";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>