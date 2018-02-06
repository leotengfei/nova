<?php
//选课中心课程信息查询
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tag=$_REQUEST['tag'] or die('{"code":-2,"msg":"tag是必须的"}');
@$grade=$_REQUEST['grade'] or die('{"code":-3,"msg":"grade是必须的"}');
@$project=$_REQUEST['project'] or die('{"code":-4,"msg":"project是必须的"}');
if($tag=='all'){
	$sql="SELECT * FROM class_info";
}else{
	if($grade=='all'){
		$sql="SELECT * FROM class_info WHERE tag='$tag'";
		if($project=='all'){
			$sql="SELECT * FROM class_info WHERE tag='$tag'";
		}else{
			$sql="SELECT * FROM class_info WHERE tag='$tag' AND project='$project'";	
		}
	}else{
		if($project=='all'){
			$sql="SELECT * FROM class_info WHERE tag='$tag' AND grade='$grade'";
		}else{
			$sql="SELECT * FROM class_info WHERE tag='$tag' AND grade='$grade' AND project='$project'";	
		}
	}
}
$result=mysqli_query($conn,$sql);
$posts = array();
while($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;}
$json=json_encode($posts);
echo $json;
?>