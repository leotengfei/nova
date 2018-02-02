<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$tel=$_REQUEST['tel'] or die('{"code":-2,"msg":"手机号是必须的！"}');
	@$sname=$_REQUEST['sname'] or die('{"code":-3,"msg":"姓名是必须的！"}');
	@$seat=$_REQUEST['seat'] or die('{"code":-5,"msg":"座位号是必须的！"}');
	$sql3="SELECT sid FROM apoint_msg WHERE seat='$seat'";
	$result3=mysqli_query($conn,$sql3);
	$row3=mysqli_fetch_assoc($result3);
	if($row3!==null){
		echo '{"code":-6,"msg":"该座位已被预定，请刷新页面重试！"}';
		return;
	}
	$sql1="SELECT sid FROM apoint_msg WHERE tel='$tel'";
	$result1=mysqli_query($conn,$sql1);
	$row=mysqli_fetch_assoc($result1);
	if($row!==null){
		echo '{"code":-7,"msg":"该手机号已被使用！"}';
	}else{
		//判断是否是vip;
		$sql_isvip="SELECT vid FROM apoint_vip WHERE vtel='$tel'";
		$result_isvip=mysqli_query($conn,$sql_isvip);
		$row_isvip=mysqli_fetch_assoc($result_isvip);
		//var_dump($row_isvip['vid']);
		if($row_isvip['vid']===NULL){
			//echo '不是vip';
			$isVIP='否';
			//var_dump($basic_arr);
		}else{
			//echo '是vip';
			$isVIP='是';
		}

		$sql2="INSERT INTO apoint_msg VALUES(null,'$tel','$sname',$seat,'$isVIP')";
		$result2=mysqli_query($conn,$sql2);
		if($result2===true){
			echo '{"code":1,"msg":"座位预定成功！"}';
		}else{
			echo '{"code":-1,"msg":"添加失败！"}';
		}
	}
?>
