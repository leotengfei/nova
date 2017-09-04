<?php
/*显示得奖人名单*/
	header('content-type:application/json;charset=utf-8');
	require('init.php');
	$sql="SELECT * FROM awardstulist WHERE awardName!='未中奖' ORDER BY sid DESC;";
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>