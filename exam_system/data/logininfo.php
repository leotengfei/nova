<?php
//登陆信息保存
header("content-type:application/json;charset=utf-8");
session_start();
@$output['utel'] = $_SESSION['utel'];
@$output['uid'] = $_SESSION['uid'];
echo json_encode($output);