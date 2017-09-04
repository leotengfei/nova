<?php
/*查询奖池剩余奖品数量*/
	header('content-type:application/json;charset=utf-8');
	require('init.php');
	@$stel=$_REQUEST['stel'] or die('{"code":-2,"msg":"stel是必须的！"}');
	$sql="SELECT * FROM awardpool WHERE aid=1";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	$json=json_encode($row);
	echo $json;
	/*设置该电话号码的count为0,使其抽一次奖后没有抽奖资格*/
	mysqli_query($conn,"UPDATE lotterylist SET count=0 WHERE stel='$stel'");
?>