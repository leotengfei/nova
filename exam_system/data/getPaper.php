<?php
//获取题目
header("content-type:application/json;charset=utf-8");
@$uid=$_REQUEST['uid'] or die('{"code":"-2","msg":"uid是必须的"}');
require('init.php');
$sql_score="SELECT count(sid) FROM test_score WHERE uid='$uid'";
$result_score=mysqli_query($conn,$sql_score);
$row_score=mysqli_fetch_assoc($result_score);
//var_dump($row_score['count(sid)']);
if($row_score['count(sid)']=="0"){
	//出题选择A卷
	$sql_select_paper="SELECT paperID,title,answerA,answerB,answerC,answerD FROM test_answer WHERE paperID=(SELECT min(paperID) FROM test_paper WHERE course=(SELECT subject FROM test_user WHERE uid='$uid'))";
	$result_select_paper=mysqli_query($conn,$sql_select_paper);
	//var_dump($result_select_paper);
	$posts = array();
	while($row = mysqli_fetch_assoc($result_select_paper)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
}elseif($row_score['count(sid)']=="1"){
	//出题选择B卷
	$sql_select_paper="SELECT paperID,title,answerA,answerB,answerC,answerD FROM test_answer WHERE paperID=(SELECT max(paperID) FROM test_paper WHERE course=(SELECT subject FROM test_user WHERE uid='$uid'))";
	$result_select_paper=mysqli_query($conn,$sql_select_paper);
	//var_dump($result_select_paper);
	$posts = array();
	while($row = mysqli_fetch_assoc($result_select_paper)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
}
?>