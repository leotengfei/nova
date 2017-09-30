<?php
//视频页传入tname获取教师信息;
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tname=$_REQUEST['tname'] or die('{"code":-2,"msg":"tname是必须的"}');
$sql="SELECT tname,grade,subject,photo_lg,introduction FROM teacher WHERE tname='$tname'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>