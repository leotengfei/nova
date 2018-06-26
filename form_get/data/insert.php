<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$uname=$_REQUEST['uname'] or die('{"code":-2,"msg":"uname是必须的"}');
	@$mycode=$_REQUEST['mycode'] or die('{"code":-3,"msg":mycode是必须的}');
	@$utel=$_REQUEST['utel'] or die('{"code":-4,"msg":"utel是必须的"}');
	$sql="INSERT INTO form_get VALUES(NULL,'$mycode','$uname','$utel')";
	$result=mysqli_query($conn,$sql);
	if($result===true){
	  echo '{"code":1,"msg":"预约成功"}';
	}else{
	  echo '{"code":-1,"msg":"预约失败"}';
	}
?>