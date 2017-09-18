<?php
//初中信息添加到数据库
header("content-type:application/json;charset=utf-8");
require('init.php');
@$arr=$_REQUEST['arr'] or die('{"code":-2,"msg":"arr是必须的！"}');
$arrlength=count($arr);
$sql="TRUNCATE TABLE chuzhong";
mysqli_query($conn,$sql);
$sql="INSERT INTO chuzhong VALUES";
for($x=0;$x<$arrlength;$x++){
	$arr[$x]=json_decode($arr[$x],true);
	//var_dump($arr[$x]);
	//echo $arr[$x]['gid'];
	$sql=$sql."(".$arr[$x]['gid'].",";
	$sql=$sql."'".$arr[$x]['classname']."',";
	$sql=$sql."'".$arr[$x]['grade']."',";
	$sql=$sql."'".$arr[$x]['project']."',";
	$sql=$sql."'".$arr[$x]['gbegin']."',";
	$sql=$sql."'".$arr[$x]['gend']."',";
	$sql=$sql."'".$arr[$x]['gtime']."',";
	$sql=$sql."'".$arr[$x]['location']."',";
	$sql=$sql."'".$arr[$x]['teacher']."',";
	$sql=$sql."'".$arr[$x]['money']."'),";
}
$sql=chop($sql,',');
//$sql=$sql.';';
$result=mysqli_query($conn,$sql);
if($result===true){
	echo '{"code":1,"msg":"更新成功！"}';
}else{
	echo '{"code":-1,"msg":"更新失败！"}';
}
?>