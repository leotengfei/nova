<?php
//首页课程信息查询
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tag=$_REQUEST['tag'] or die('{"code":-2,"msg":"tag是必须的"}');
$sql="SELECT * FROM class_info WHERE tag='$tag'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>