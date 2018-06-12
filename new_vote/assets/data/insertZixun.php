<?php
//判断uid；
header("content-type:application/json;charset=utf-8");
@$zname=$_REQUEST['zname'] or die('{"code":"-2","msg":"名字是必须的"}');
@$ztel=$_REQUEST['ztel'] or die('{"code":"-3","msg":"电话号码是必须的"}');
require('init.php');
$sql="INSERT INTO lzixun VALUES(null,'$zname','$ztel')";
$result=mysqli_query($conn,$sql);
if($result===true){
    echo '{"code":"1","msg":"信息插入成功"}';
}else{
     echo '{"code":"-1","msg":"信息插入失败"}';
}
?>