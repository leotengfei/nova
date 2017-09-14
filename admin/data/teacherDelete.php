<?php
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tid=$_REQUEST['tid'] or die('{"code":-2,"msg":"tid是必须的！"}');
$sql2="SELECT photo_sm,photo_lg FROM teacher WHERE tid='$tid'";
$result2=mysqli_query($conn,$sql2);
$posts = array();
while($row = mysqli_fetch_assoc($result2)) {
$posts[] = $row;}
$json=json_encode($posts);
echo $json;
$sql="DELETE FROM teacher WHERE tid='$tid'";
$result=mysqli_query($conn,$sql);
//if($result===true){
    //echo '{"code":1,"msg":"删除成功！"}';
//}else{
   // echo '{"code":-1,"msg":"删除失败！"}';
//}
?>