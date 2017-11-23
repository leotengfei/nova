<?php
header("content-type:application/json;charset=utf-8");
//检验短信验证码
@$textcode=$_REQUEST['textcode'] or die('{"code":"-2","msg":"textcode是必须的！"}');
session_start();
if($textcode===$_SESSION['msg_code']){
	echo '{"code":"1","msg":"短信验证正确！"}';
}else{
	echo '{"code":"-1","msg":"短信验证失败！"}';
}
?>