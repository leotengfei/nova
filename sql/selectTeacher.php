<?php
//名师介绍页面查询老师信息
header("content-type:application/json;charset=utf-8");
//require('init.php');
$conn=mysqli_connect('127.0.0.1',"root",'','newslist');
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT tid,tname,grade,subject,photo_sm FROM teacher";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>