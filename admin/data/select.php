<?php
//新闻列表分页的查询
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	@$pageNum=$_REQUEST['pageNum'] or die('{"code":-2,"msg":"pageNum是必须的"}');
	$page=($pageNum-1)*10;
	$sql="SELECT * FROM t_news ORDER BY date DESC LIMIT $page,10";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>