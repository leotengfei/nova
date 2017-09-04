<?php
/*更新奖池数量和获奖学生名单*/
header('content-type:application/json;charset=utf-8');
require('init.php');
@$stel=$_REQUEST['stel'] or die('{"code":-2,"msg":"电话号码是必须的！"}');
@$awardName=$_REQUEST['awardName'] or die('{"code":-3,"msg":"奖项类型是必须的！"}');
if($awardName=='一等奖'){
	$sql1="UPDATE awardpool SET firstprize=firstprize-1 WHERE aid=1";
}else if($awardName=='二等奖'){
	$sql1="UPDATE awardpool SET secondprize=secondprize-1 WHERE aid=1";
}else if($awardName=='三等奖'){
	$sql1="UPDATE awardpool SET thirdprize=thirdprize-1 WHERE aid=1";
}else if($awardName=='幸运奖'){
	$sql1="UPDATE awardpool SET luckprize=luckprize-1 WHERE aid=1";
}
$result1=mysqli_query($conn,$sql1);
if($result1==true){
	echo '{"code":1,"msg":"更新奖池数据成功"}';
}else{
	echo '{"code":-1,"msg":"更新奖池数据失败"}';
}
$sql2="SELECT sname from lotterylist WHERE stel='$stel'";
$result2=mysqli_query($conn,$sql2);
$row = mysqli_fetch_assoc($result2);
$sname=$row['sname'];
$sql3="INSERT INTO awardstulist VALUES(null,'$stel','$sname','$awardName')";
$result3=mysqli_query($conn,$sql3);
if($result3==true){
	echo '{"code":2,"msg":"更新获奖学生名单成功"}';
}else{
	echo '{"code":-4,"msg":"更新获奖学生名单失败"}';
}
?>