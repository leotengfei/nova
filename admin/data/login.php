<?php
//登陆验证
header("content-type:application/json;charset=utf-8");

$n = $_REQUEST['uname'];
$p = $_REQUEST['upwd'];

require('init.php');
$sql = "SELECT uid FROM adminuser WHERE uname='$n' AND upwd='$p'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if($row===null){
  echo '{"code":400,"msg":"uname or upwd err"}';
}else {
  session_start();
  $_SESSION['loginUname'] = $n;
  $_SESSION['loginUid']=$row['uid'];
  echo '{"code":200,"msg":"login succ"}';
}


