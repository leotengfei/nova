<?php
//var_dump($_FILES);
//foreach循环实现多个文件同时上传
foreach($_FILES as $key => $value){
if ($_FILES[$key]["error"] > 0)
  {
 echo 'Problem:';
 switch ($_FILES[$key]['error']>0)
	  {
	case 1:echo 'File exceeded upload_max_filesize';
		break;
	case 2:echo 'File exceeded max_file_size';
		break;
	case 3:echo 'File only partially uploaded';
		break;
	case 4:echo 'No file uploaded';
		break;
	case 6:echo 'Cannot uploaded file:No temp directory specified';
		break;
	case 7:echo 'Upload failed:Cannot write to disk';
		break;
 }
 exit;
  }
if(($_FILES[$key]['type']!='image/png')&&($_FILES[$key]['type']!='image/jpeg')){
	echo 'Problem:file is not picture';
	exit;
}
//汉字编码方式修改为gbk有中文名称的文件才能上传成功
$_FILES[$key]['name']=iconv('UTF-8','GB2312',$_FILES[$key]['name']);
$upfile='C:\xampp\htdocs\nova\images/'.$_FILES[$key]['name'];
//echo is_uploaded_file($_FILES[$key]['tmp_name']);
if(is_uploaded_file($_FILES[$key]['tmp_name'])){
	if(!move_uploaded_file($_FILES[$key]['tmp_name'],$upfile)){
		echo 'Problem:Could not move file to destination directory';
		exit;
	}
}else{
	echo 'Problem:Possible file upload attack. Filename';
	echo $_FILES[$key]['name'];
	exit;
}
$_FILES[$key]['name']=iconv('GB2312','UTF-8',$_FILES[$key]['name']);
echo $_FILES[$key]['name'];
echo '文件上传成功     ';
}
//$contents=file_get_contents($upfile);
//$contents=strip_tags($contents);
//file_put_contents($_FILES[$key]['name'],$contents);
//echo 'Preview of uploaded file contents:';
?>