<?php
/*确认是否添加到过lotterylist*/
    header('content-type:application/json;charset=utf-8');
    require('init.php');
    @$stel=$_REQUEST['stel'] or die('{"code":-2,"msg":"stel是必须的"}');
    $sql="SELECT lid FROM lotterylist WHERE stel='$stel'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    if($row!=null){
        echo '{"code":1,"msg":"添加过，不能再次添加"}';
    }else{
        echo '{"code":-1,"msg":"没有添加过！"}';
    }
?>