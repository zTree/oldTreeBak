<?php
//redirect
$host=$_SERVER['HTTP_HOST'];
$url = $_SERVER['PHP_SELF'];
$https = $_SERVER['HTTPS'];
$querystring = $_SERVER["QUERY_STRING"];
$userIp = $_SERVER["REMOTE_ADDR"];

if ($host=='www.baby666.cn' || $host=='baby666.cn' ||
    $host=='www.ztree.me' || $host=='ztree.me' || $https != 'on') {
	Header('HTTP/1.1 301 Moved Permanently');
	if ($querystring !== '') {
	Header('Location:https://treejs.cn'.$url.'?'.$querystring);
	} else {
	Header('Location:https://treejs.cn'.$url);
	}
	exit();
}

$release = "2018041601";

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
	$lang_Browser = isset($_SERVER["HTTP_ACCEPT_LANGUAGE"]) ? $_SERVER["HTTP_ACCEPT_LANGUAGE"] : '';
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
	$headerAdFile = "enhancer-ads-cn.png?20190424";
	$headerAdUrl = "https://enhancer.io";
} else {
	$menu_lang = $menu_chinese;
	$chgLang = "cn";
	$headerAdFile = "enhancer-ads-en.png?20190424";
	$headerAdUrl = "https://enhancer.io?lang=en";
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
		<a href="https://www.wiz.cn/wapp/pages/wdj/3fe9d146-6498-4882-b75c-f533442aba5b" target="_blank"><div class="qq-group" title="<?php echo $qq_group_icon?>"></div></a>
		<div class="ieSuggest"><?php echo $suggestNoIE?></div>
		<div class="header-text">
			<h1><em><?php echo $title?></em></h1>
			<p><?php echo $title_info?></p>
		</div>
		<ul class="shortcuts">
			<li><a href="main.php" <?php echo $homejs?> target="_self"><button class="ico home" onfocus="this.blur();"></button><span class="<?php echo $isHome?>"><?php echo $menu_home?></span></a></li>
			<li><a href="demo.php" <?php echo $demojs?> target="_zTreeDemo"><button class="ico demo" onfocus="this.blur();"></button><span class="<?php echo $isDemo?>"><?php echo $menu_demo?></span></a></li>
			<li><a href="api.php" <?php echo $apijs?> target="_zTreeApi"><button class="ico api" onfocus="this.blur();"></button><span class="<?php echo $isApi?>"><?php echo $menu_api?></span></a></li>
			<li><a href="faq.php#_206" <?php echo $faqjs?> target="_self"><button class="ico faq" onfocus="this.blur();"></button><span class="<?php echo $isFaq?>"><?php echo $menu_faq?></span></a></li>
			<li><a href="donate.php" <?php echo $donatejs?> target="_self"><button class="ico donate" onfocus="this.blur();"></button><span class="<?php echo $isDonate?>"><?php echo $menu_donate?></span></a></li>
			<li><a href="https://gitee.com/zTree/zTree_v3" <?php echo $downloadjs?> target="_blank">
                <span class="<?php echo $isDownload?>"><?php echo $menu_download?></span>
                </a>
			<a href="https://gitee.com/zTree/zTree_v3" <?php echo $downloadjs?> target="_blank" style="margin-right: 5px;position: relative;top: 5px;">
			<svg width="28px" height="24px" viewBox="0 0 38 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><g>
			        <polygon id="XMLID_215_" fill="#C71D24" points="27.1407407 15.9833333 27.1407407 19.7166667 27.1407407 23.5666667 23.3481481 23.5666667 19.437037 23.5666667 15.6444444 23.5666667 11.7333333 23.5666667 7.82222222 23.5666667 4.02962963 23.5666667 4.02962963 19.7166667 4.02962963 15.9833333 4.02962963 12.1333333 4.02962963 8.28333333 4.02962963 4.55 7.82222222 4.55 11.7333333 4.55 15.6444444 4.55 19.437037 4.55 19.437037 8.28333333 19.437037 12.1333333 19.437037 15.9833333 15.6444444 15.9833333 11.7333333 15.9833333 11.7333333 12.1333333 15.6444444 12.1333333 15.6444444 8.28333333 11.7333333 8.28333333 7.82222222 8.28333333 7.82222222 12.1333333 7.82222222 15.9833333 7.82222222 19.7166667 11.7333333 19.7166667 15.6444444 19.7166667 19.437037 19.7166667 23.3481481 19.7166667 23.3481481 15.9833333 23.3481481 12.1333333 23.3481481 8.28333333 23.3481481 4.55 23.3481481 0.7 19.437037 0.7 15.6444444 0.7 11.7333333 0.7 7.82222222 0.7 4.02962963 0.7 0.118518519 0.7 0.118518519 4.55 0.118518519 8.28333333 0.118518519 12.1333333 0.118518519 15.9833333 0.118518519 19.7166667 0.118518519 23.5666667 0.118518519 27.4166667 4.02962963 27.4166667 7.82222222 27.4166667 11.7333333 27.4166667 15.6444444 27.4166667 19.437037 27.4166667 23.3481481 27.4166667 27.1407407 27.4166667 31.0518519 27.4166667 31.0518519 23.5666667 31.0518519 19.7166667 31.0518519 15.9833333"></polygon>
			        <rect id="XMLID_212_" fill="#C71D24" opacity="0.600000024" x="27.1407407" y="0.7" width="3.91111111" height="3.85"></rect>
                    <rect id="XMLID_209_" fill="#C71D24" opacity="0.800000012" x="27.1407407" y="8.86666667" width="3.91111111" height="3.85"></rect>
                </g></g></g>
            </svg>
            </a>
			<a href="https://github.com/zTree/zTree_v3" <?php echo $downloadjs?> target="_blank" style="position: relative;top: 5px;">
            <svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 18 18" width="24">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            </a>
			</li>
		</ul>
		<ul class="shortcuts language">
			<li><a href="#" <?php echo $isHome?> onclick="chgLang('<?php echo $chgLang?>'); return false;"><button class="ico <?php echo $chgLang?>" onfocus="this.blur();" title="<?php echo $menu_lang?>"></button><span class=""></span></a></li>
		</ul>
	</div>
	<div class="header-ad-container round">
        <div class="header-ad"><a href="<?php echo $headerAdUrl?>" target="_blank"><img src="./img/ad/<?php echo $headerAdFile?>" /></a></div>
        <span class="ad-alert"><?php echo $adAlert?></span>
    </div>
</div>
<?php
//<div id="ad_120_600_right" class="ad" style="position:absolute; top:0px; display:none;">
//	<IFRAME ID="adIframe" Name="adIframe" class="adRight" FRAMEBORDER=0 SCROLLING=NO width=120 height=600 SRC="googleAD.html" style="display:none;"></IFRAME>
//</div>
?>
<div id="ad_120_600_left" class="ad ad_120_600" style="top:0px; display:none;">
	<div id="ad_120_600_wiz" class="adLeft ad" style="top:0px; left:120px;">
	    <a href="http://www.wiz.cn/i/ef16c35f" target="_blank"><div class="ad_wiz" ></div></a>
	    <span class="ad-alert"><?php echo $adAlert?></span>
	</div>
</div>
<div id="ad_120_600_right" class="ad ad_120_600" style="position:absolute; top:0px; display:none;">
	<div id="ad_120_600_wiz" class="adRight ad adEmpty" style="top:0px; left:120px;">
	    <!-- <a href="http://www.wiz.cn/i/ef16c35f" target="_blank"><div class="ad_wiz" ></div></a> -->
	    <span class="ad-alert"><?php echo $adAlertEmpty?></span>
	<?php
	    //<a href="http://www.uileader.com" target="_blank"><div class="ad_uileader" ></div></a>
        //<a href="http://www.wiz.cn/i/ef16c35f" target="_blank"><div class="ad_wiz" ></div></a>
        //<a href="http://www.jianma123.com/ztreelandpage.aardio?hmsr=ztree&hmpl=1&hmcu=2&hmkw=3&hmci=4" target="_blank"><div class="ad_ztreelandpage" ></div></a>
    ?>
	</div>
</div>
