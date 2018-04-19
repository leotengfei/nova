<?php
// everyday页面获取初始数据
header("content-type:application/json;charset=utf-8");
require('init.php');
@$evd_time=$_REQUEST['evd_time'] or die('{"code":-2,"msg":"evd_time是必须的"}');
if($evd_time=='today'){
    $today=date('Y/n/j',time());
}else{
    $today=$evd_time;
}
// echo strtotime($today);
$sql_getToday="SELECT i.cid,i.cname,i.imgUrl,i.tag,d.episode,d.description,d.videoUrl,d.c_time FROM class_info i,class_detail d WHERE i.cid=d.cid AND c_time='$today'";
$result=mysqli_query($conn,$sql_getToday);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>