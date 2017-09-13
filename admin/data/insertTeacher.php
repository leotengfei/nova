<?php
header('content-type:application/json;charset=utf-8');
require('init.php');
@$tname=$_REQUEST['tname'] or die('{"code":-1;"msg":"tname是必须的"}');
@$grade=$_REQUEST['grade'] or die('{"code":-2;"msg":"grade是必须的"}');
@$subject=$_REQUEST['subject'] or die('{"code":-3;"msg":"subject是必须的"}');
@$photo_sm=$_REQUEST['photo_sm'] or die('{"code":-4;"msg":"photo_sm是必须的"}');
@$photo_lg=$_REQUEST['photo_lg'] or die('{"code":-5;"msg":"photo_lg是必须的"}');
@$introduction=$_REQUEST['introduction'] or die('{"code":-6;"msg":"introduction是必须的"}');
$sql="INSERT INTO teacher VALUES(null,'$tname','$grade','$subject','$photo_sm','$photo_lg','$introduction')";
$result=mysqli_query($conn,$sql);
if($result==true){
	echo '{"code":1;"msg":"信息插入成功！"}';
}else{
	echo '{"code":-1;"msg":"信息插入失败！"}';
}

?>