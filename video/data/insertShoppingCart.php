<?php
//添加到购物车信息表
header("content-type:application/json;charset=utf-8");
require('init.php');
@$WIDout_trade_no=$_REQUEST['WIDout_trade_no'] or die('{"code":-2,"msg":"WIDout_trade_no是必须的"}');
@$uid=$_REQUEST['uid'] or die('{"code":-3,"msg":"uid是必须的"}');
@$cid=$_REQUEST['cid'] or die('{"code":-4,"msg":"cid是必须的"}');
@$WIDsubject=$_REQUEST['WIDsubject'] or die('{"code":-5,"msg":"WIDsubject是必须的"}');
@$WIDtotal_amount=$_REQUEST['WIDtotal_amount'] or die('{"code":-6,"msg":"WIDtotal_amount"}');
@$WIDbody=$_REQUEST['WIDbody'] or die('{"code":-7,"msg":"WIDbody是必须的"}');
$sql="INSERT INTO shoppingcart VALUES('$WIDout_trade_no','$uid','$cid','$WIDsubject','$WIDtotal_amount','$WIDbody')";
$result=mysqli_query($conn,$sql);
if($result===true){
    echo '{"code":1,"msg":"添加成功"}';
}else{
    echo '{"code":-1,"msg":"添加失败"}';
}
?>