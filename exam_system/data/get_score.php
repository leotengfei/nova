<?php
//查询自己成绩
header("content-type:application/json;charset=utf-8");
session_start();
$uid=$_SESSION['uid'];
require('init.php');
$sql_team_score="SELECT u.uname,u.identify,u.subject,max(s.score) score,s.test_date FROM test_user u,test_score s WHERE u.uid=s.uid AND s.uid='$uid' AND u.identify='学生' GROUP BY s.uid";
$result_score=mysqli_query($conn,$sql_team_score);
$posts = array();
	while($row = mysqli_fetch_assoc($result_score)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>