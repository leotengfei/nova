<?php
header("content-type:application/json;charset=utf-8");
//检验短信验证码
@$utel=$_REQUEST['utel'] or die('{"code":"-2","msg":"utel是必须的！"}');
@$textcode=$_REQUEST['msg'] or die('{"code":"-3","msg":"textcode是必须的！"}');
require('init.php');
session_start();
if($textcode===$_SESSION['msg_code']){
	$sql="SELECT uid FROM question_user WHERE utel='$utel'";
	$result=mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$uid=$row['uid'];
	echo '{"code":"1","msg":"短信验证正确！","uid":"'.$uid.'"}';
}else{
	echo '{"code":"-1","msg":"短信验证失败！"}';
}
?>