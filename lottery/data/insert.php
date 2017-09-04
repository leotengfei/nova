<?php
header("content-type:application/json;charset=utf-8");
require('init.php');
@$sname=$_REQUEST['sname'] or die('{"code":-2,"msg":"sname是必须的"}');
@$stel=$_REQUEST['stel'] or die('{"code":-3,"msg":"stel是必须的"}');
$sql1="SELECT sid FROM teachersday WHERE stel='$stel'";
$result1=mysqli_query($conn,$sql1);
$row=mysqli_fetch_assoc($result1);
if($row!==null){
	echo '{"code":-4,"msg":"该手机号已存在！"}';
}else{
	$sql2="INSERT INTO teachersday VALUES(null,'$sname','$stel')";
	$result2=mysqli_query($conn,$sql2);
	if($result2===true){
		echo '{"code":1,"msg":"添加成功"}';
	}else{
		echo '{"code":-1,"msg":"添加失败"}';
	}
}
?>