<?php
//处理答案
header("content-type:application/json;charset=utf-8");
@$paperID=$_REQUEST['paperID'] or die('{"code":"-2","msg":"paperID是必须的"}');
@$answer_arr=$_REQUEST['answer_arr'] or die('{"code":"-3","msg":"answer_arr是必须的"}');
require('init.php');
$user_arr=json_decode($answer_arr);
//var_dump($user_arr);
$sql_find_answer="SELECT answer FROM test_answer WHERE paperID='$paperID'";
$result_find_answer=mysqli_query($conn,$sql_find_answer);
$correct_answer_arr = array();
while($row = mysqli_fetch_row($result_find_answer)) {
    $correct_answer_arr[] = $row[0];}
//var_dump($correct_answer_arr);
$correct_count=0;//题目正确个数
for ($x=0; $x<count($user_arr); $x++) {
  if($user_arr[$x]==$correct_answer_arr[$x]){
	$correct_count++;
  }
} 
//echo $correct_count;
$score=$correct_count*10;//考试分数
session_start();
$uid=$_SESSION['uid'];//用户id;
$test_date=date("Y/m/d");
//echo $test_date;
$sql_insert_score="INSERT INTO test_score VALUES(null,$uid,'$score','$test_date')";
$result_score=mysqli_query($conn,$sql_insert_score);
if($result_score===true){
	echo '{"code":"1","msg":"成绩提交成功"}';
}else{
	echo '{"code":"-1","msg":"成绩提交失败"}';
}
?>