<?php
//登陆信息保存
header("content-type:application/json;charset=utf-8");
session_start();
@$output['utel'] = $_SESSION['loginTel'];
@$output['uid'] = $_SESSION['loginUid'];
echo json_encode($output);