<?php
//判断uid；
header("content-type:application/json;charset=utf-8");
@$vid=$_REQUEST['vid'] or die('{"code":"-2","msg":"vid是必须的"}');
@$ruid=$_REQUEST['ruid'] or die('{"code":"-3","msg":"ruid是必须的"}');
require('init.php');
$sql_exist="SELECT max(rtime) rtime FROM lvote_record WHERE ruid='$ruid'";
$result_exist=mysqli_query($conn,$sql_exist);
$row_exist=mysqli_fetch_assoc($result_exist);
$vtime=$row_exist['rtime'];
$vtime_now=date('Y-n-j',time());
// var_dump($vtime);
if($vtime===NULL){
    //如果没有投过票，直接插入数据库
    $sql_insert="INSERT INTO lvote_record VALUES(null,'$ruid','$vtime_now')";
    $result_insert=mysqli_query($conn,$sql_insert);
    $sql2="UPDATE lvote_msg SET vnum=vnum+1 WHERE vid=$vid";
    $result2=mysqli_query($conn,$sql2);
    if($result_insert===true&&$result2===true){
        echo '{"code":"1","msg":"信息插入成功"}';
    }else{
        echo '{"code":"-1","msg":"信息插入失败"}';
    }

}else{
    //如果投过票，判断日期
    // echo $vtime;
    // echo $vtime_now;
    // var_dump($vtime_now!==$vtime);
    if($vtime_now!==$vtime){
        //如果日期过了一天
        $sql_insert="INSERT INTO lvote_record VALUES(null,'$ruid','$vtime_now')";
        $result_insert=mysqli_query($conn,$sql_insert);
        $sql2="UPDATE lvote_msg SET vnum=vnum+1 WHERE vid=$vid";
        $result2=mysqli_query($conn,$sql2);
        if($result_insert===true&&$result2===true){
            echo '{"code":"1","msg":"信息插入成功"}';
        }else{
            echo '{"code":"-1","msg":"信息插入失败"}';
        }
    }else{
        //如果是同一天
        echo '{"code":"-2","msg":"同一天不能投两次票"}';
    }

}
?>