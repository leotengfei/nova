<?php
header("content-type:application/json;charset=utf-8");
//检验图片验证码
@$checkcode=$_REQUEST['checkcode'] or die('{"code":"-2","msg":"checkcode是必须的！"}');
session_start();
$checkcode=md5($checkcode);
if($_SESSION["verification"]===$checkcode){
	echo '{"code":"1","msg":"图片验证正确！"}';
}else{
	echo '{"code":"-1","msg":"图片验证失败！"}';
}
?>