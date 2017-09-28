<?php
//登陆验证
header("content-type:application/json;charset=utf-8");

@$n = $_REQUEST['loginTel'] or die('{"code:-2","msg":"loginTel是必须的"}');
@$p = $_REQUEST['loginUpwd'] or die('{"code:-3","msg":"loginUpwd是必须的"}');

require('init.php');
$sql = "SELECT uid FROM user_info WHERE utel='$n' AND upwd='$p'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$uid=$row['uid'];
if($row===null){
  echo '{"code":400,"msg":"uname or upwd err"}';
}else {
  session_start();
  $_SESSION['loginTel'] = $n;
  $_SESSION['loginUid']=$row['uid'];
  echo '{"code":200,"msg":"login succ","uid":'.$uid.'}';
}