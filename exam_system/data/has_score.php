<?php
//查询成绩个数
header("content-type:application/json;charset=utf-8");
session_start();
$uid=$_SESSION['uid'];
require('init.php');
$sql="SELECT count(sid) FROM test_score WHERE uid='$uid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//var_dump($row['count(sid)']);
if($row['count(sid)']=="2"){
	echo '{"code":"1","msg":"无答题权限"}';
}else if($row['count(sid)']=="1"){
	echo '{"code":"2","msg":"还有一次答题机会"}';
}
?>