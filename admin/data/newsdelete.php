<?php
//新闻列表删除功能
	header("content-type:application/json;charset=utf-8");
	@$nid=$_REQUEST['nid'] or die('{"code":-2,"msg":"nid是必须的"}');
	require('init.php');
	$sql="DELETE FROM t_news WHERE nid='$nid'";
	$result=mysqli_query($conn,$sql);
	if($result===true){
	  echo '{"code":1,"msg":"删除成功"}';
	}else{
	  echo '{"code":-1,"msg":"删除失败"}';
	}
?>