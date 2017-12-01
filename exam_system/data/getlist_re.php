<?php
//查询名单
header("content-type:application/json;charset=utf-8");
require('init.php');
$sql_team_score="SELECT * FROM test_user WHERE uid NOT IN (SELECT uid FROM test_score)";
$result_score=mysqli_query($conn,$sql_team_score);
//var_dump($result_score);
$posts = array();
	while($row = mysqli_fetch_assoc($result_score)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>