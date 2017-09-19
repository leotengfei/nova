<?php
//名师介绍模态框页面查询老师详细信息
header("content-type:application/json;charset=utf-8");
//require('init.php');
@$tid=$_REQUEST['tid'] or die('{"code":-2,"msg":"tid是必须的"}');
$conn=mysqli_connect('127.0.0.1',"root",'','newslist');
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT tname,grade,subject,photo_lg,introduction FROM teacher WHERE tid='$tid'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>