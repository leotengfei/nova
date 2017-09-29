<?php
//播放页获取视频链接
header("content-type:application/json;charset=utf-8");
require('init.php');
@$cid=$_REQUEST['cid'] or die('{"code":-2,"msg":"cid是必须的"}');
@$episode=$_REQUEST['episode'] or die('{"code":-3,"msg":"episode是必须的"}');
$sql="SELECT videoUrl FROM class_detail WHERE cid='$cid' AND episode='$episode'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>