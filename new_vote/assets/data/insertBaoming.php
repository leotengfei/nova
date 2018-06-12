<?php
//判断uid；
header("content-type:application/json;charset=utf-8");
@$bname=$_REQUEST['bname'] or die('{"code":"-2","msg":"名字是必须的"}');
@$btel=$_REQUEST['btel'] or die('{"code":"-3","msg":"电话号码是必须的"}');
@$xiaoqu=$_REQUEST['xiaoqu'] or die('{"code":"-4","msg":"校区是必须的"}');
require('init.php');
$sql="INSERT INTO lbaoming VALUES(null,'$bname','$btel','$xiaoqu')";
$result=mysqli_query($conn,$sql);
if($result===true){
    echo '{"code":"1","msg":"信息插入成功"}';
}else{
     echo '{"code":"-1","msg":"信息插入失败"}';
}
?>