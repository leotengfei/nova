<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$utel=$_REQUEST['utel'] or die('{"code":-2,"msg":"utel是必须的"}');
	$sql_exist="SELECT fid FROM form_get WHERE utel='$utel'";
	$result_exist=mysqli_query($conn,$sql_exist);
	$row_exist=mysqli_fetch_assoc($result_exist);
	$fid=$row_exist['fid'];
	if($row_exist['fid']==null){
		echo '{"code":1,"msg":"utel不存在，可以使用"}';
	}else{
		echo '{"code":-1,"msg":"utel已存在，不可以使用"}';
	}
?>