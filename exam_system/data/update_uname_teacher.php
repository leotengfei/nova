<?php
//(教师页面)完善账号用户名等信息
header("content-type:application/json;charset=utf-8");
@$utel=$_REQUEST['utel'] or die('{"code":"-2","msg":"utel是必须的"}');
@$uname=$_REQUEST['uname'] or die('{"code":"-3","msg":"uname是必须的"}');
@$school=$_REQUEST['school'] or die('{"code":"-4","msg":"school是必须的"}');
@$area=$_REQUEST['area'] or die('{"code":"-6","msg":"area是必须的"}');
@$mate1_utel=$_REQUEST['mate1_utel'] or die('{"code":"-7","msg":"mate1_utel是必须的"}');
@$mate1_uname=$_REQUEST['mate1_uname'] or die('{"code":"-8","msg":"mate1_uname是必须的"}');
@$mate1_school=$_REQUEST['mate1_school'] or die('{"code":"-9","msg":"mate1_school是必须的"}');
@$mate1_subject=$_REQUEST['mate1_subject'] or die('{"code":"-10","msg":"mate1_subject是必须的"}');
@$mate2_utel=$_REQUEST['mate2_utel'] or die('{"code":"-11","msg":"mate2_utel是必须的"}');
@$mate2_uname=$_REQUEST['mate2_uname'] or die('{"code":"-12","msg":"mate2_uname是必须的"}');
@$mate2_school=$_REQUEST['mate2_school'] or die('{"code":"-13","msg":"mate2_school是必须的"}');
@$mate2_subject=$_REQUEST['mate2_subject'] or die('{"code":"-14","msg":"mate2_subject是必须的"}');
@$mate3_utel=$_REQUEST['mate3_utel'] or die('{"code":"-15","msg":"mate3_utel是必须的"}');
@$mate3_uname=$_REQUEST['mate3_uname'] or die('{"code":"-16","msg":"mate3_uname是必须的"}');
@$mate3_school=$_REQUEST['mate3_school'] or die('{"code":"-17","msg":"mate3_school是必须的"}');
@$mate3_subject=$_REQUEST['mate3_subject'] or die('{"code":"-18","msg":"mate3_subject是必须的"}');
@$team_id=$_REQUEST['team_id'] or die('{"code":"-19","msg":"team_id是必须的"}');
require('init.php');
$sql="UPDATE test_user SET uname='$uname',school='$school',subject='无',team_id='$team_id' WHERE utel='$utel'";
$result=mysqli_query($conn,$sql);
//确定电话号码是否存在
	//学生一验证
	$sql_isExist="SELECT uid FROM test_user WHERE utel='$mate1_utel'";
	$result_isExist=mysqli_query($conn,$sql_isExist);
	$row_isExist=mysqli_fetch_assoc($result_isExist);
	//学生二验证
	$sql2_isExist="SELECT uid FROM test_user WHERE utel='$mate2_utel'";
	$result2_isExist=mysqli_query($conn,$sql2_isExist);
	$row2_isExist=mysqli_fetch_assoc($result2_isExist);
	//学生三验证
	$sql3_isExist="SELECT uid FROM test_user WHERE utel='$mate3_utel'";
	$result3_isExist=mysqli_query($conn,$sql3_isExist);
	$row3_isExist=mysqli_fetch_assoc($result3_isExist);
	if($row_isExist['uid']!=null){
		echo '{"code":"-20","msg":"学生一电话号码已存在！"}';
		return;
	}
	if($row2_isExist['uid']!=null){
		echo '{"code":"-21","msg":"学生二电话号码已存在！"}';
		return;
	}
	if($row3_isExist['uid']!=null){
		echo '{"code":"-22","msg":"学生三电话号码已存在！"}';
		return;
	}
	if($row_isExist['uid']==null){
		$sql2="INSERT INTO test_user VALUES(null,'$mate1_uname','$mate1_utel','$area','学生','$mate1_school','$mate1_subject','$team_id')";
		$result2=mysqli_query($conn,$sql2);
	}
	if($row2_isExist['uid']==null){
		$sql3="INSERT INTO test_user VALUES(null,'$mate2_uname','$mate2_utel','$area','学生','$mate2_school','$mate2_subject','$team_id')";
		$result3=mysqli_query($conn,$sql3);
	}
	if($row3_isExist['uid']==null){
		$sql4="INSERT INTO test_user VALUES(null,'$mate3_uname','$mate3_utel','$area','学生','$mate3_school','$mate3_subject','$team_id')";
		$result4=mysqli_query($conn,$sql4);
	}
	if($result===true){
		echo '{"code":"1","msg":"信息更新成功！"}';
	}else{
		echo '{"code":"-1","msg":"信息更新失败！"}';
	}
?>