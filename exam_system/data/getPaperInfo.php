<?php
//获取试卷基本信息
header("content-type:application/json;charset=utf-8");
@$paperID=$_REQUEST['paperID'] or die('{"code":"-2","msg":"paperID是必须的"}');
require('init.php');
$sql="SELECT course,title_num FROM test_paper WHERE paperID='$paperID'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>