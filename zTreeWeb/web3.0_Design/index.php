<?php
//redirect
$host=$_SERVER['HTTP_HOST'];
$url = $_SERVER['PHP_SELF'];
$querystring = $_SERVER["QUERY_STRING"];

Header('HTTP/1.1 301 Moved Permanently');
Header('Location:main.php');

exit();
?>