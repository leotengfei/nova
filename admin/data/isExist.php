<?php
header("content-type:application/json;charset=utf-8");
@$fileName=$_REQUEST['fileName'] or die('{"code":-2,"msg":"fileName是必须的"}');
//echo $fileName;
$current_dir='../../images/';
$dir=opendir($current_dir);
$canUpload=1;
while(false !== ($file = readdir($dir))){
	if($file != "." && $file != ".."){
		if($fileName===$file){
			$canUpload=-1;
		}
	}
}
echo $canUpload;
closedir($dir);
?>