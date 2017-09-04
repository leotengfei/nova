<?php
/*添加到有抽奖资格列表*/
    header('content-type:application/json;charset=utf-8');
    require('init.php');
    @$stel=$_REQUEST['stel'] or die('{"code":-2,"msg":"stel是必须的！"}');
    @$sname=$_REQUEST['sname'] or die('{"code":-3,"msg":"sname是必须的！"}');
    $sql="INSERT INTO lotterylist VALUES(null,'$stel','$sname',1)";
    $result=mysqli_query($conn,$sql);
    if($result==true){
        echo '{"code":1,"msg":"添加到有抽奖资格列表成功！"}';
    }else{
        echo '{"code":-1,"msg":"插入失败！"}';
    }
?>