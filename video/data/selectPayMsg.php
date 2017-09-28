<?php
//支付页信息查询
header("content-type:application/json;charset=utf-8");
require('init.php');
@$cid=$_REQUEST['cid'] or die('{"code":-2,"msg":"cid是必须的"}');
$sql="SELECT cname,cPrice FROM class_info WHERE cid='$cid'";
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>