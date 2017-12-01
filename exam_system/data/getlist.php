<?php
//查询名单
header("content-type:application/json;charset=utf-8");
require('init.php');
$sql_team_score="SELECT u.uid,u.uname,u.utel,u.identify,u.area,u.school,u.subject,u.team_id,max(s.score) score,s.test_date FROM test_user u,test_score s WHERE u.uid=s.uid GROUP BY s.uid";
$result_score=mysqli_query($conn,$sql_team_score);
//var_dump($result_score);
$posts = array();
	while($row = mysqli_fetch_assoc($result_score)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>