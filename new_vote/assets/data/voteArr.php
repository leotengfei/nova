<?php
//查询投票信息
header("content-type:application/json;charset=utf-8");
require('init.php');
@$pageNum=$_REQUEST['pageNum'] or die('{"code":-2,"msg":"pageNum是必须的"}');
$page=($pageNum-1)*6;
$sql_voteArr="SELECT * FROM lvote_msg LIMIT $page,6";
$result_score=mysqli_query($conn,$sql_voteArr);
//var_dump($result_score);
$posts = array();
	while($row = mysqli_fetch_assoc($result_score)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>