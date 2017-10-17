<?php
//查询校区地图侧面标签列表
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tab=$_REQUEST['tab'] or die('{"code":-2,"msg":"tab是必须的"}');
$sql="SELECT * FROM schoolmap WHERE tab='$tab'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)){
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>