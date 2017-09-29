<?php
//判断是否付款成功；
    header("content-type:application/json;charset=utf-8");
    require('init.php');
    @$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"uid是必须的"}');
    @$cid=$_REQUEST['cid'] or die('{"code":-3,"msg":"cid是必须的"}');
    $sql1="SELECT WIDout_trade_no FROM shoppingcart WHERE uid='$uid' AND cid='$cid'";
    //查询shoppingcart是否有记录uid,cid
    $result1=mysqli_query($conn,$sql1);
    if($result1===null){
        //如果无记录  说明没有支付过
        echo '{"code":-1,"msg":"无支付记录"}';
    }else{
        //如果有记录 获取WIDout_trade_no查询trade_history trade_status是否为success
        $row1 = mysqli_fetch_assoc($result1);
        $WIDout_trade_no=$row1['WIDout_trade_no'];
        $sql2="SELECT trade_status FROM trade_history WHERE WIDout_trade_no='$WIDout_trade_no'";
        $result2=mysqli_query($conn,$sql2);
        $row2=mysqli_fetch_assoc($result2);
        if($row2['trade_status']=='TRADE_SUCCESS'||$row2['trade_status']=='TRADE_FINISHED'){
            echo '{"code":1,"msg":"支付成功"}';
        }else{
            echo '{"code":-1,"msg":"支付失败"}';
        }

    }
?>