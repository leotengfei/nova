<?php
//名师介绍页面查询老师信息
header("content-type:application/json;charset=utf-8");
require('init.php');
@$pageNum=$_REQUEST['pageNum'] or die('{"code":-3,"msg":"pageNum是必须的"}');
$page=($pageNum-1)*12;
$sql="SELECT tid,tname,grade,subject,photo_sm FROM teacher WHERE tid>2 LIMIT $page,12";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>