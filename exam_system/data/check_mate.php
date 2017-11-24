<?php
//查询队伍成绩
header("content-type:application/json;charset=utf-8");
session_start();
$uid=$_SESSION['uid'];
require('init.php');
$sql="SELECT team_id FROM test_user WHERE uid='$uid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//var_dump($row['team_id']);
$team_id=$row['team_id'];
$sql_team_score="SELECT u.uid,u.uname,u.identify,u.subject,max(s.score) score,s.test_date FROM test_user u,test_score s WHERE u.uid=s.uid AND u.team_id<>'no_team' AND u.team_id='$team_id' AND u.identify='学生' AND u.uid<>'$uid' GROUP BY s.uid";
$result_score=mysqli_query($conn,$sql_team_score);
//var_dump($result_score);
$posts = array();
	while($row = mysqli_fetch_assoc($result_score)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>