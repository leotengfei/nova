<?php
header("content-type:application/json;charset=utf-8");
require('init.php');
@$tid=$_REQUEST['tid'] or die('{"code":-2,"msg":"tid是必须的！"}');
$sql="DELETE FROM teacher WHERE tid='$tid'";
$result=mysqli_query($conn,$sql);
if($result===true){
    echo '{"code":1,"msg":"删除成功！"}';
}else{
    echo '{"code":-1,"msg":"删除失败！"}';
}