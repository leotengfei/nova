<?php
//领导信息查询
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"uid是必须的"}');
	$sql="SELECT uname FROM question_user WHERE uid='$uid'";//获取uname
	$result=mysqli_query($conn,$sql);
	$posts = array();
	$row = mysqli_fetch_assoc($result);
	//获取leaderNum
	$sql_leadernum="SELECT leaders FROM question_leader WHERE uid='$uid'";
	$result_leaderNum=mysqli_query($conn,$sql_leadernum);
	$row_leaderNum=mysqli_fetch_assoc($result_leaderNum);
	$str=$row_leaderNum['leaders'];
	$leader_arr=explode(',',$str);//领导数组
	//var_dump($leader_arr);
	//echo count($leader_arr);
	$row['leaderNum']=count($leader_arr);
    $posts[] = $row;
	//var_dump($posts);
	//获取该uid是否对该领导投过票
	for($i=0;$i<count($leader_arr);$i++){
		$sql_leaderE="SELECT sid FROM question_score WHERE uid=$uid AND leader='$leader_arr[$i]'";
		$result_leaderE=mysqli_query($conn,$sql_leaderE);
		$row_leaderE=mysqli_fetch_assoc($result_leaderE);
		//var_dump($row_leaderE);
		if($row_leaderE===null){
			$submited="-1";
		}else{
			$submited="1";
		}
		$new_arr=array("leader"=>$leader_arr[$i],"submited"=>$submited);
		array_push($posts,$new_arr);
	}
	$json=json_encode($posts);
	echo $json;
?>