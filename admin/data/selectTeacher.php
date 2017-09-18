<?php
//查询教师列表
header("content-type:application/json;charset=utf-8;");
require ('init.php');
@$tname=$_REQUEST['tname'] or die('{"code":-2,"msg":"教师名称是必须的！"}');
if($tname=='all'){
    $sql="SELECT tid,tname,photo_sm,grade,subject,introduction FROM teacher";
}else{
    $sql="SELECT tid,tname,photo_sm,grade,subject,introduction FROM teacher WHERE tname like '%$tname%'";
}
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;