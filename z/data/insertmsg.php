<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$tel=$_REQUEST['tel'] or die('{"code":-2,"msg":"手机号是必须的！"}');
	@$sname=$_REQUEST['sname'] or die('{"code":-3,"msg":"姓名是必须的！"}');
	@$grade=$_REQUEST['grade'] or die('{"code":-4,"msg":"年级是必须的！"}');
	@$clocation=$_REQUEST['clocation'] or die('{"code":-5,"msg":"校区是必须的！"}');
	$sql1="SELECT sid FROM apoint_msg WHERE tel='$tel'";
	$result1=mysqli_query($conn,$sql1);
	$row=mysqli_fetch_assoc($result1);
	if($row!==null){
		echo '{"code":-7,"msg":"该手机号已被使用！"}';
	}else{
		$sql2="INSERT INTO apoint_msg VALUES(null,'$tel','$sname','$grade','$clocation')";
		$result2=mysqli_query($conn,$sql2);
		if($result2===true){
			echo '{"code":1,"msg":"座位预定成功！"}';
		}else{
			echo '{"code":-1,"msg":"添加失败！"}';
		}
	}
?>