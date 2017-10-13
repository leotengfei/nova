<?php
//名师介绍页面查询老师信息
header("content-type:application/json;charset=utf-8");
require('init.php');
@$pageNum=$_REQUEST['pageNum'] or die('{"code":-3,"msg":"pageNum是必须的"}');
@$grade=$_REQUEST['grade'] or die('{"code":-4,"msg":"grade是必须的"}');
@$subject=$_REQUEST['subject'] or die('{"code":-5,"msg":"subject是必须的"}');
$page=($pageNum-1)*12;
if($grade=='all'&&$subject=='all'){
    $sql="SELECT tid,tname,grade,subject,photo_sm FROM teacher WHERE tid>2 LIMIT $page,12";
}elseif($grade!=='all'&&$subject=='all'){
	$sql="SELECT tid,tname,grade,subject,photo_sm FROM teacher WHERE tid>2 AND grade='$grade' LIMIT $page,12";
}elseif($grade!=='all'&&$subject!=='all'){
	$sql="SELECT tid,tname,grade,subject,photo_sm FROM teacher WHERE tid>2 AND grade='$grade' AND subject='$subject' LIMIT $page,12";
}
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>