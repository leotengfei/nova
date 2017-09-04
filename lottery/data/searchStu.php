<?php
/*查询已经注册名单*/
	header('content-type:application/json;charset=utf-8');
	require('init.php');
	@$kw=$_REQUEST['kw'] or die('{"code":-2,"msg":"kw是必须的"}');
	if($kw=='all'){
                $sql="SELECT * FROM teachersday";
	}else{
                $sql="SELECT * FROM teachersday WHERE sname LIKE '%$kw%'";
	}
	$result=mysqli_query($conn,$sql);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$json=json_encode($posts);
	echo $json;
?>