<?php
/*查询电话号码是否有抽奖资格*/
    header('content-type:application/json;charset=utf-8');
    require('init.php');
    @$stel=$_REQUEST['stel'] or die('{"code":-2,"msg":"stel是必须的"}');
    $sql="SELECT count FROM lotterylist WHERE stel='$stel'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    if($row!=null){
        $json=json_encode($row);
        echo $json;
    }else{
        echo '{"code":-3,"msg":"该电话号码没有抽奖资格！"}';
    }
?>