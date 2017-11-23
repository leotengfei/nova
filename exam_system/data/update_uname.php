<?php
//完善账号用户名等信息
header("content-type:application/json;charset=utf-8");
@$utel=$_REQUEST['utel'] or die('{"code":"-2","msg":"utel是必须的"}');
@$uname=$_REQUEST['uname'] or die('{"code":"-3","msg":"uname是必须的"}');
@$school=$_REQUEST['school'] or die('{"code":"-4","msg":"school是必须的"}');
@$subject=$_REQUEST['subject'] or die('{"code":"-5","msg":"subject是必须的"}');
require('init.php');
$sql="UPDATE test_user SET uname='$uname',school='$school',subject='$subject',team_id='no_team' WHERE utel='$utel'";
$result=mysqli_query($conn,$sql);
if($result===true){
	echo '{"code":"1","msg":"uname更新成功"}';
}else{
	echo '{"code":"-1","msg":"uname更新失败"}';
}
?>