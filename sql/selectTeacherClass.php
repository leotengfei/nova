<?php
//名师介绍模态框页面查询老师课表信息
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tname=$_REQUEST['tname'] or die('{"code":-3,"msg":"tname是必须的"}');
@$grade=$_REQUEST['grade'] or die('{"code":-4,"msg":"grade是必须的"}');
//改变字符串格式为[][][];
/*function mb_str_split($str){  
    return preg_split('/(?<!^)(?!$)/u', $str );  
}  
  
$str=$tname;  
$arr=mb_str_split($str);

$str=join("][",$arr);
$str="[".$str."]";*/
//echo $str;
//查询高中表
$posts = array();
if($grade==='高考'){
$sql1="SELECT * FROM gaozhong WHERE teacher LIKE '%$tname%'";
$result1=mysqli_query($conn,$sql1);
while($row1 = mysqli_fetch_assoc($result1)) {
    $posts[] = $row1;}
}else if($grade==='中考'){
//查询初中表
 $sql2="SELECT * FROM chuzhong WHERE teacher LIKE '%$tname%'";
 $result2=mysqli_query($conn,$sql2);
 while($row2 = mysqli_fetch_assoc($result2)) {
     $posts[] = $row2;}
 }else{
 //查询小学表
 $sql3="SELECT * FROM xiaoxue WHERE teacher LIKE '%$tname%'";
 $result3=mysqli_query($conn,$sql3);
 while($row3 = mysqli_fetch_assoc($result3)) {
     $posts[] = $row3;}
 }
$json=json_encode($posts);
echo $json;
?>