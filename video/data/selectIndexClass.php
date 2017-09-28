<?php
//首页课程信息查询
header("content-type:application/json;charset=utf-8");
require('init.php');
$sql="SELECT cid,cname,teacher,imgUrl FROM class_info";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>