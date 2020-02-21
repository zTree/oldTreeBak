<?php
?>
<div id="footer_wrap" class="footer_wrap">
	<div id="footer" class="footer">
		<a href="main.php" style="display:inline;" title="zTree Home"><div class="footer-logo"></div></a>

		<!-- Site Switcher -->
		<div id="footer_mii" class="footer_mii">
			<a href="http://www.beian.miit.gov.cn/?spm=a2c4g.11186623.2.15.66207dc6fwRr8n" target="_blank"><?php echo $footer_miibeian?></a>
		</div>
		<div id="footer_siteMap" class="footer_siteMap open">
			<div class="footer_siteMap_header" title="<?php echo $footer_menu_siteMap?>"><?php echo $footer_menu_siteMap?></div>
			<ul id="footer_siteMap_ul" class="up" style="display: none;">
				<li><a href="main.php#_zTreeInfo" class="zTreeInfoBtn"><?php echo $footer_siteMap_zTreeInfo?></a></li>
				<li><a href="main.php#_license" class="licenseBtn"><?php echo $footer_siteMap_license?></a></li>
				<li><a href="donate.php" class="donateBtn"><?php echo $footer_siteMap_donate?></a></li>
				<li><a href="demo.php"><?php echo $footer_siteMap_demo?></a></li>
				<li><a href="api.php"><?php echo $footer_siteMap_api?></a></li>
				<li><a href="faq.php"><?php echo $footer_siteMap_faq?></a></li>
				<li><a href="/hunter/index.html" target="_blank"><?php echo $footer_siteMap_v26?></a></li>
				<li><a href="main.php#_links" class="linksBtn"><?php echo $footer_siteMap_links?></a></li>
			</ul>
		</div>
		<div id="footer_contact" class="footer_contact open">
			<div class="footer_contact_header" title="<?php echo $footer_menu_contact?>"><?php echo $footer_menu_contact?></div>
			<ul id="footer_contact_ul" class="up" style="display: none; ">
				<li><a href="https://gitee.com/zTree/zTree_v3" target="_blank"><?php echo $footer_contact_gitee?></a></li>
				<li><a href="https://github.com/zTree/zTree_v3" target="_blank"><?php echo $footer_contact_github?></a></li>
				<li><a href="http://my.oschina.net/dyhunter" target="_blank"><?php echo $footer_contact_blog_oschina?></a></li>
				<li><a href="http://ztreeapi.iteye.com/" target="_blank"><?php echo $footer_contact_blog_iteye?></a></li>
				<li><a href="http://tieba.baidu.com/f?kw=zTree" target="_blank"><?php echo $footer_contact_zTreeHi?></a></li>
				<li><a href="mailto:hunter.z@263.net"><?php echo $footer_contact_email?></a></li>
				
			</ul>
		</div>
		<div id="footer_download" class="footer_download open">
			<div class="footer_download_header" title="<?php echo $footer_menu_download?>"><?php echo $footer_menu_download?></div>
			<ul id="footer_download_ul" class="up" style="display: none; ">
				<li><a href="https://github.com/zTree/zTree_v3" target="_blank"><?php echo $footer_download_git?></a></li>
				<li><a href="https://gitee.com/zTree/zTree_v3" target="_blank"><?php echo $footer_download_oschina?></a></li>
				<li><a href="https://code.google.com/p/jquerytree/" target="_blank"><?php echo $footer_download_google?></a></li>
			</ul>
		</div>
		<!-- [END] Site Switcher -->

	</div>
</div>
<script type="text/javascript" src="js/jquery-1.6.2.min.js?<?php echo $release?>"></script>
<script type="text/javascript" src="js/babygo.js?<?php echo $release?>"></script>
<?php
if ($page == "main") {
	echo "<script type='text/javascript' src='js/main.js?".$release."'></script>";
} else if ($page == "demo") {
	echo "<script type='text/javascript' src='js/jquery.ztree.core.js?".$release."'></script>";
	echo "<script type='text/javascript' src='js/demo.js?".$release."'></script>";
} else if ($page == "api") {
	echo "<script type='text/javascript' src='js/jquery.ztree.core.js?".$release."'></script>";
	echo "<script type='text/javascript' src='js/api.js?".$release."'></script>";
} else if ($page == "faq") {
	echo "<script type='text/javascript' src='js/jquery.ztree.core.js?".$release."'></script>";
	echo "<script type='text/javascript' src='js/faq.js?".$release."'></script>";
} else if ($page == "donate") {
	echo "<script type='text/javascript' src='js/donate.js?".$release."'></script>";
} else if ($page == "download") {
}
?>
	</body>
</html>