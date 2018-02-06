<?php
//插入成绩
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$uid=$_REQUEST['uid'] or die('{"code":"-2","msg":"uid是必须的！"}');
	@$leader=$_REQUEST['leader'] or die('{"code":"-3","msg":"leader是必须的！"}');
	@$scoreArr=$_REQUEST['scoreArr'] or die('{"code":"-4","msg":"scoreArr是必须的！"}');
	//var_dump($scoreArr);
	$total=0;
	$sql="INSERT INTO question_score VALUES(NULL,$uid,'$leader',";
	for($i=0;$i<count($scoreArr);$i++){
		$total+=$scoreArr[$i];
		$sql=$sql."$scoreArr[$i],";
		};
	$sql=$sql."$total)";
	//echo $sql;
	$result=mysqli_query($conn,$sql);
	//var_dump($result);
	if($result===true){
		echo '{"code":"1","msg":"评价提交成功！"}';
	}else{
		echo '{"code":"-1","msg":"评价提交失败！"}';
	}
?>