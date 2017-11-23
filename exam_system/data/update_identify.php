<?php
//完善账号身份信息
header("content-type:application/json;charset=utf-8");
@$utel=$_REQUEST['utel'] or die('{"code":"-2","msg":"utel是必须的"}');
@$identify=$_REQUEST['identify'] or die('{"code":"-3","msg":"identify是必须的"}');
require('init.php');
$sql="UPDATE test_user SET identify='$identify' WHERE utel='$utel'";
$result=mysqli_query($conn,$sql);
if($result===true){
	echo '{"code":"1","msg":"identify更新成功"}';
}else{
	echo '{"code":"-1","msg":"identify更新失败"}';
}
?>