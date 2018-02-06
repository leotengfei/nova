<?php
header("content-type:application/json;charset=utf-8");
//检验电话号码是否存在
@$utel=$_REQUEST['utel'] or die('{"code":"-2","msg":"utel是必须的！"}');
require('init.php');
$sql="SELECT uid FROM question_user WHERE utel='$utel'";
$result=mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row===null){
	echo '{"code":"-1","msg":"该电话号码无权限"}';
}else{
	echo '{"code":"1","msg":"该电话号码有权限"}';
}
?>