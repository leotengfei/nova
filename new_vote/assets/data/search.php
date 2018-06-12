<?php
//搜索功能；
header("content-type:application/json;charset=utf-8");
require('init.php');
@$uname=$_REQUEST['uname'] or die('{"code":-2,"msg":"uname是必须的"}');
$sql_voteArr="SELECT * FROM lvote_msg WHERE vname LIKE '%$uname%'";
$result_score=mysqli_query($conn,$sql_voteArr);
//var_dump($result_score);
$posts = array();
	while($row = mysqli_fetch_assoc($result_score)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>