<?php
//查询座位信息
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	/*@$tel=$_REQUEST['tel'] or die('{"code":-2,"msg":"tel是必须的"}');
	//如果是vip
	$sql_isvip="SELECT vid FROM apoint_vip WHERE vtel='$tel'";
	$result_isvip=mysqli_query($conn,$sql_isvip);
	$row_isvip=mysqli_fetch_assoc($result_isvip);
	//var_dump($row_isvip['vid']);
	if($row_isvip['vid']===NULL){
		//echo '不是vip';
		$basic_arr=array();
		for($i=0;$i<192;$i++){
			$basic_arr[$i]=["seat"=>$i+1];
		}
		//var_dump($basic_arr);
	}else{
		//echo '是vip';
		$basic_arr=array();
		for($i=0;$i<48;$i++){
			$basic_arr[$i]=["seat"=>$i+1];
		}
	}

*/
$basic_arr=array();
for($i=0;$i<48;$i++){
	$basic_arr[$i]=["seat"=>$i+1];
}
	$sql="SELECT seat FROM apoint_msg";
	$result=mysqli_query($conn,$sql);
	//var_dump($result);
	$posts = array();
	while($row = mysqli_fetch_assoc($result)) {
    	$posts[] = $row;}
	$posts=array_merge($basic_arr,$posts);
	$json=json_encode($posts);
	echo $json;
?>
