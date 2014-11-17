<?php
//redirect
$host=$_SERVER['HTTP_HOST'];
$url = $_SERVER['PHP_SELF'];
$querystring = $_SERVER["QUERY_STRING"];
$userIp = $_SERVER["REMOTE_ADDR"];

if ($host=='www.baby666.cn' || $host=='baby666.cn') {
	Header('HTTP/1.1 301 Moved Permanently');
	if ($querystring !== '') {
	Header('Location:http://www.ztree.me'.$url.'?'.$querystring);
	} else {
	Header('Location:http://www.ztree.me'.$url);
	}
	exit();
}

$release = "2013031101";

function startsWith($haystack, $needle) {
    $length = strlen($needle);
 return (substr($haystack, 0, $length) === $needle);
}
function endsWith($haystack, $needle) {
    $length = strlen($needle);
 $start =  $length *-1; //negative
 return (substr($haystack, $start, $length) === $needle);
}

$isHome = "";$homejs = "";
$isDemo = "";$demojs = "";
$isApi = "";$apijs = "";
$isFaq = "";$faqjs = "";
$isDonate = "";$donatejs = "";
$isDownload = ""; $downloadjs = "";
$page = strrchr($_SERVER['REQUEST_URI'], "/");
$page = strtolower(substr($page, 1, strpos($page, '.')-1));
if ($page == "main") {
	$isHome = "selected";
	$homejs = "onclick='return false;'";
} else if ($page == "demo") {
	$isDemo = "selected";
	$demojs = "onclick='return false;'";
} else if ($page == "api") {
	$isApi = "selected";
	$apijs = "onclick='return false;'";
} else if ($page == "faq") {
	$isFaq = "selected";
	$faqjs = "onclick='return false;'";
} else if ($page == "donate") {
	$isDonate = "selected";
	$donatejs = "onclick='return false;'";
} else if ($page == "download") {
	$isDownload = "selected";
	$downloadjs = "onclick='return false;'";
}

$lang = "";
if(array_key_exists( 'lang',$_REQUEST)) {
	$lang=$_REQUEST['lang'];
} else if(array_key_exists( 'lang',$_COOKIE)) {
	$lang=$_COOKIE['lang'];
} else {
	$lang_Browser = $_SERVER["HTTP_ACCEPT_LANGUAGE"];
	$lang = startsWith(strtolower($lang_Browser), 'zh-cn') ? "cn":"en";
}
if ($lang==null || $lang=="" || ($lang!="cn" && $lang!="en")) {
	$lang = "cn";
}
//$lang = "cn";
require("lang/" . $lang . "/comm.php");
require("lang/" . $lang . "/" . $page . ".php");
if ($lang == "cn") {
	$menu_lang = $menu_english;
	$chgLang = "en";
} else {
	$menu_lang = $menu_chinese;
	$chgLang = "cn";
}
// 过期时间：30天
setcookie("lang", $lang, time()+2592000);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="description" content="zTree 是一个依靠 jQuery 实现的多功能 “树插件”。优异的性能、灵活的配置、多种功能的组合是 zTree 最大优点。专门适合项目开发，尤其是 树状菜单、树状数据的Web显示、权限管理等等。zTree 是开源免费的软件（MIT 许可证）。在开源的作用下，zTree 越来越完善，目前已经拥有了不少粉丝，并且今后还会推出更多的 zTree 扩展功能库，让 zTree 更加强大。" />
		<meta name="keywords" content="jQuery, javascript, Tree, plugIn, 树, 插件, 树插件, Web, Web前端" />
		<title><?php echo $web_title?></title>
		<link rel="stylesheet" href="css/common.css?<?php echo $release?>" type="text/css">
		<link rel="shortcut icon" href="favicon.ico">
<?php
if ($page == "main") {
} else if ($page == "demo") {
	echo "<link rel='stylesheet' href='css/zTreeStyle/zTreeStyleForDemo.css?".$release."' type='text/css'>";
} else if ($page == "api") {
	echo "<link rel='stylesheet' href='css/zTreeStyle/zTreeStyleForApi.css?".$release."' type='text/css'>";
} else if ($page == "faq") {
	echo "<link rel='stylesheet' href='css/zTreeStyle/zTreeStyleForDemo.css?".$release."' type='text/css'>";
} else if ($page == "download") {
}
?>		
		<script type="text/javascript" src="js/babyFirst.js?<?php echo $release?>"></script>
		<script type="text/javascript">
		var lang = "<?php echo $lang?>";
		</script>
	</head>
	<body><?php include_once("analyticstracking.php") ?>
<div id="header_wrap" class="header_wrap">
	<div id="header" class="header round">
		<!--<div class="light-bulb" alt=""></div>-->
		<div class="qq-group" title="<?php echo $qq_group_icon?>"></div>
		<div class="ieSuggest"><?php echo $suggestNoIE?></div>
		<div class="google_plus"><g:plusone></g:plusone></div>
		<div class="header-text">
			<h1><em><?php echo $title?></em></h1><p></p>
			<p><?php echo $title_info?></p>
		</div>
		<ul class="shortcuts">
			<li><a href="main.php" <?php echo $homejs?> target="_self"><button class="ico home" onfocus="this.blur();"></button><span class="<?php echo $isHome?>"><?php echo $menu_home?></span></a></li>
			<li><a href="demo.php" <?php echo $demojs?> target="_zTreeDemo"><button class="ico demo" onfocus="this.blur();"></button><span class="<?php echo $isDemo?>"><?php echo $menu_demo?></span></a></li>
			<li><a href="api.php" <?php echo $apijs?> target="_zTreeApi"><button class="ico api" onfocus="this.blur();"></button><span class="<?php echo $isApi?>"><?php echo $menu_api?></span></a></li>
			<li><a href="faq.php" <?php echo $faqjs?> target="_self"><button class="ico faq" onfocus="this.blur();"></button><span class="<?php echo $isFaq?>"><?php echo $menu_faq?></span></a></li>
			<li><a href="donate.php" <?php echo $donatejs?> target="_self"><button class="ico donate" onfocus="this.blur();"></button><span class="<?php echo $isDonate?>"><?php echo $menu_donate?></span></a></li>
			<li><a href="https://git.oschina.net/zTree/zTree_v3/repository/archive?ref=master" <?php echo $downloadjs?> target="_self"><button class="ico download" onfocus="this.blur();"></button><span class="<?php echo $isDownload?>"><?php echo $menu_download?></span></a></li>
		</ul>
		<ul class="shortcuts language">
			<li><a href="#" <?php echo $isHome?> onclick="chgLang('<?php echo $chgLang?>'); return false;"><button class="ico <?php echo $chgLang?>" onfocus="this.blur();" title="<?php echo $menu_lang?>"></button><span class=""></span></a></li>
		</ul>
	</div>
</div>
<div id="ad_120_600_right" class="ad" style="position:absolute; top:0px; display:none;">
	<IFRAME ID="adIframe" Name="adIframe" class="adRight" FRAMEBORDER=0 SCROLLING=NO width=120 height=600 SRC="googleAD.html" style="display:none;"></IFRAME>
</div>
<div id="ad_120_600_left" class="ad" style="top:0px; display:none;">
	<div id="ad_120_600_wiz" class="adLeft ad" style="top:0px; left:120px;">
		<a href="http://www.wiz.cn/i/ef16c35f" target="_blank"><div class="ad_wiz" ></div></a>
	</div>
<?php
if ($userIp != "125.35.86.74") {
?>
	<div id="ad_120_600_qui" class="adLeft ad" style="top:0px; left:120px;">
		<a href="http://www.quickui.net/" target="_blank"><div class="ad_qui" ></div></a>
	</div>
<?php
}
?>
</div>