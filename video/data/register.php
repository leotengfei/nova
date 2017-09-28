<?php
//注册
header("content-type:application/json;charset=utf-8");

$n = $_REQUEST['registerTel'] or die('{"code:-2","msg":"registerTel是必须的"}');
$p = $_REQUEST['registerUpwd'] or die('{"code:-3","msg":"registerUpwd是必须的"}');

require('init.php');
$sql1="SELECT uid FROM user_info WHERE utel='$n'";
$result1=mysqli_query($conn,$sql1);
$row_att = mysqli_fetch_assoc($result1);
$sql2 = "INSERT INTO user_info VALUES(null,'$n','$p')";
$result2 = mysqli_query($conn, $sql2);
if($row_att!==null){
	echo '{"code":401,"msg":"utel already exists"}';
}else{
if($result2!==true){
  echo '{"code":400,"msg":"regis fail"}';
}else {
  session_start();
  $_SESSION['loginTel'] = $n;
  $sql3="SELECT uid FROM user_info WHERE utel='$n'";
  $result3 = mysqli_query($conn, $sql3);
  $row = mysqli_fetch_assoc($result3);
  $_SESSION['loginUid']=$row['uid'];
  echo '{"code":200,"msg":"regis succ","uid":'.$row['uid'].'}';
}
}
