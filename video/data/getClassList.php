<?php
//选课页面列表信息
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tag=$_REQUEST['tag'] or die('{"code":-2,"msg":"tag是必须的"}');
@$grade=$_REQUEST['grade'] or die('{"code":-3,"msg":"grade是必须的"}');
$sql_tag="SELECT DISTINCT tag FROM class_info WHERE tag NOT LIKE '%每日一题%'";
$result_tag=mysqli_query($conn,$sql_tag);
$total_arr=array();
$posts = array();
while($row = mysqli_fetch_assoc($result_tag)) {
    $posts[] = $row;}
$total_arr['tag']=$posts;

if($tag=='all'){
	$sql_grade="SELECT DISTINCT grade FROM class_info";
	if($grade=='all'){
		$sql_project="SELECT DISTINCT project FROM class_info";
	}else{
		$sql_project="SELECT DISTINCT project FROM class_info WHERE grade='$grade'";
	}
}else{
	$sql_grade="SELECT DISTINCT grade FROM class_info WHERE tag='$tag'";
	if($grade=='all'){
		$sql_project="SELECT DISTINCT project FROM class_info WHERE tag='$tag'";
	}else{
		$sql_project="SELECT DISTINCT project FROM class_info WHERE tag='$tag' AND grade='$grade'";
	}
}
$result_grade=mysqli_query($conn,$sql_grade);
$posts = array();
while($row_grade = mysqli_fetch_assoc($result_grade)) {
    $posts[] = $row_grade;}
$total_arr['grade']=$posts;


$result_project=mysqli_query($conn,$sql_project);
$posts = array();
while($row_project = mysqli_fetch_assoc($result_project)) {
    array_push($posts,$row_project);}
$total_arr['project']=$posts;
$json=json_encode($total_arr);
echo $json;
?>