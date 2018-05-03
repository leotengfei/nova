<?php
// 更多按钮点击事件
header("content-type:application/json;charset=utf-8");
require('init.php');
@$pageNum=$_REQUEST['pageNum'] or die('{"code":-2,"msg":"pageNum是必须的"}');
$today=date('Y/n/j',time());
$page=($pageNum-1)*8;
$sql_getList="SELECT DISTINCT c_time FROM class_detail WHERE unix_timestamp(c_time)<unix_timestamp('$today') AND c_time<>'' ORDER BY unix_timestamp(c_time) DESC LIMIT $page,8";
$result=mysqli_query($conn,$sql_getList);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;

?>