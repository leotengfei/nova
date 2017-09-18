<?php
//课表更新相关
	header("content-type:application/json;charset=utf-8");
	@$date=$_REQUEST['date'] or die('{"code":-2,"msg":"date是必须的"}');
	@$pub=$_REQUEST['pub'] or die('{"code":-3,"msg":"pub是必须的"}');
	@$classify=$_REQUEST['classify'] or die('{"code":-4,"msg":"classify是必须的"}');
	@$direction=$_REQUEST['direction'] or die('{"code":-5,"msg":"direction是必须的"}');
	@$title=$_REQUEST['title'] or die('{"code":-6,"msg":"title是必须的"}');
	@$url=$_REQUEST['url'] or die('{"code":-7,"msg":"url是必须的"}');
	@$imgUrl=$_REQUEST['imgUrl'] or die('{"code":-8,"msg":"imgUrl是必须的"}');
	require('init.php');
	$sql="INSERT INTO t_news VALUES(null,'$date','$pub','$classify','$direction','$title','$url','$imgUrl')";
	$result=mysqli_query($conn,$sql);
	if($result===true){
	  echo '{"code":1,"msg":"更新成功"}';
	}else{
	  echo '{"code":-1,"msg":"更新失败"}';
	}
?>