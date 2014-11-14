<?php
$HOST=$_SERVER['HTTP_HOST'];
$PATH=$_SERVER['PHP_SELF'];
$QUERY=$_SERVER['QUERY_STRING'];
echo ($HOST."<br/>".$PATH."<br/>".$QUERY);
if (stripos($HOST, "baby666.cn")===0) {
    Header("HTTP/1.1 301 Moved Permanently");
    Header("Location:http://www.".$HOST.$PATH."?".$QUERY);
    exit();
}
?>