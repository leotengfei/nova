<?php
//查询排名
header("content-type:application/json;charset=utf-8");
require('init.php');
$sql_total="SELECT sum(vnum) total FROM lvote_msg";
$result_total=mysqli_query($conn,$sql_total);
$posts = array();
	while($row = mysqli_fetch_assoc($result_total)) {
        $posts[] = $row;}
$sql_arr="SELECT vname,vnum FROM lvote_msg ORDER BY vnum DESC";
$result_arr=mysqli_query($conn,$sql_arr);
while($row = mysqli_fetch_assoc($result_arr)) {
    $posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>