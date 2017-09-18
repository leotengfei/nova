<?php
//删除教师管理相关图片
	header('content-type:application/json;charset=utf-8');
	@$photo_lg=$_REQUEST['photo_lg'] or die('{"code":-3,"msg":"photo_lg是必须的！"}');
	@$photo_sm=$_REQUEST['photo_sm'] or die('{"code":-4,"msg":"photo_sm是必须的！"}');
	$photo_lg=iconv('UTF-8','GB2312',$photo_lg);
	$photo_sm=iconv('UTF-8','GB2312',$photo_sm);
	$result_lg=unlink("C:/xampp/htdocs/nova/images/$photo_lg");
	$result_sm=unlink("C:/xampp/htdocs/nova/images/$photo_sm");
	if($result_lg&&$result_sm){
		echo '{"code":1,"msg":"删除成功！"}';
	}else{
		echo '{"code":-1,"msg":"删除失败！"}';
	}
?>