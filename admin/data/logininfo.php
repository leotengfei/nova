<?php
header('Content-Type: application/json');
session_start();
@$output['uname'] = $_SESSION['loginUname'];
@$output['uid'] = $_SESSION['loginUid'];
echo json_encode($output);