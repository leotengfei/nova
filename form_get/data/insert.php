<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$uname=$_REQUEST['uname'] or die('{"code":-2,"msg":"uname是必须的"}');
	@$utel=$_REQUEST['utel'] or die('{"code":-3,"msg":"utel是必须的"}');
	@$loca=$_REQUEST['loca'] or die('{"code":-4,"msg":loca是必须的}');
	@$sub=$_REQUEST['sub'] or die('{"code":-5,"msg":sub是必须的}');
	$sql="INSERT INTO form_get VALUES(NULL,'$uname','$utel','$loca','$sub')";
	$result=mysqli_query($conn,$sql);
	if($result===true){
	  echo '{"code":1,"msg":"预约成功"}';
	}else{
	  echo '{"code":-1,"msg":"预约失败"}';
	}
?>