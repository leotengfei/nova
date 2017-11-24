<?php
//登陆信息保存
header("content-type:application/json;charset=utf-8");
session_start();
$_SESSION['utel']=null;
$_SESSION['uid']=null;
echo '{"code":"1","msg":"退出登陆成功！"}';