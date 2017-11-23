<?php
//判断账户基本信息，做出响应；
header("content-type:application/json;charset=utf-8");
@$utel=$_REQUEST['utel'] or die('{"code":"-2","msg":"utel是必须的"}');
@$area=$_REQUEST['area'] or die('{"code":"-3","msg":"area是必须的"}');
require('init.php');
$sql_exist="SELECT uid FROM test_user WHERE utel='$utel'";
$result_exist=mysqli_query($conn,$sql_exist);
$row_exist=mysqli_fetch_assoc($result_exist);
$uid=$row_exist['uid'];
//var_dump($row_exist['uid']);
if($row_exist['uid']==null){
//如果utel不存在，注册用户
	$sql_insert="INSERT INTO test_user VALUES(null,'','$utel','$area','','','','')";
	mysqli_query($conn,$sql_insert);
	$result_exist=mysqli_query($conn,$sql_exist);
	$row_exist=mysqli_fetch_assoc($result_exist);
	$uid=$row_exist['uid'];
	echo '{"code":"1","msg":"跳转至shenfen.html"}';
}else{
//如果utel存在，判断信息是否完整
	$sql_complete="SELECT uname FROM test_user WHERE utel='$utel'";
	$result_complete=mysqli_query($conn,$sql_complete);
	$row_complete=mysqli_fetch_assoc($result_complete);
	if($row_complete['uname']==null){
	//如果信息不完整让页面跳至shenfen.html
		echo '{"code":"2","msg":"跳转至shenfen.html"}';
	}else{
		//如果信息完整，判断身份
		$sql_shenfen="SELECT identify FROM test_user WHERE utel='$utel'";
		$result_shenfen=mysqli_query($conn,$sql_shenfen);
		$row_shenfen=mysqli_fetch_assoc($result_shenfen);
		if($row_shenfen['identify']=='老师'){
		//如果是老师跳转至score.html
		echo '{"code":"3","msg":"跳转至score.html"}';
		}else{
		//如果是学生，判断是否有成绩
			$sql_hasScore="SELECT sid FROM test_score WHERE uid='$uid'";
			$result_hasScore=mysqli_query($conn,$sql_hasScore);
			$row_hasScore=mysqli_fetch_assoc($result_hasScore);
			if($row_hasScore['sid']==null){
				//如果没有成绩，跳转至test.html
				echo '{"code":"4","msg":"跳转至test.html"}';
			}else{
				//如果有成绩,跳转至score.html;
				echo '{"code":"5","msg":"跳转至score.html"}';
			}
		}
	}
}
 session_start();
  $_SESSION['utel'] = $utel;
  $_SESSION['uid']=$uid;
?>