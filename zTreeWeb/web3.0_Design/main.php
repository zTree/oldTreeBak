<?php
include( "head.php")
?>
<div id="content_wrap" class="content_wrap">
    <div id="content" class="content">
		<div class="nav_section">
			<ul>
				<li class="first"><?php echo $main_subtitle ?></li>
				<li><a href="#" class="zTreeInfoBtn" onclick="return false;"><?php echo $main_sub_info ?></a></li>
				<li><a href="#" class="licenseBtn" onclick="return false;"><?php echo $main_sub_license ?></a></li>
				<li><a href="#" class="contactBtn" onclick="return false;"><?php echo $main_sub_contact ?></a></li>
				<li><a href="#" class="linksBtn" onclick="return false;"><?php echo $main_sub_links ?></a></li>
			</ul>
		</div>

		<div class="siteTag tag_zTreeInfo" alt=""></div>

		<div id="contentBox" class="contentBox round clearfix">
			<div id="zTreeInfo" class="zTreeInfo">
				<div class="title">
					<h1 ><?php echo $info_title ?></h1>
					<h4 ><?php echo $info_title_sub1 ?></h4>
					<h4 ><?php echo $info_title_sub2 ?></h4>
				</div>

				<div id="zTreeInfo-left" class="zTreeInfo-left"></div>
				<div id="zTreeInfo-right" class="zTreeInfo-right">
					<ul>
						<li><span ><?php echo $info_feature1 ?></span></li>
						<li><span ><?php echo $info_feature2 ?></span></li>
						<li><span ><?php echo $info_feature3 ?></span></li>
						<li><span ><?php echo $info_feature4 ?></span></li>
						<li><span ><?php echo $info_feature5 ?></span></li>
						<li><span ><?php echo $info_feature6 ?></span></li>
						<li><span ><?php echo $info_feature7 ?></span></li>
						<li><span ><?php echo $info_feature8 ?></span></li>
						<li><span ><?php echo $info_feature9 ?></span></li>
						<li><span ><?php echo $info_feature10 ?></span></li>
						<li><span ><?php echo $info_feature11 ?></span></li>
					</ul>
				</div>
			</div>

			<div id="license" class="license">
				<div class="title">
					<h1 ><?php echo $license_title ?></h1>
					<p ><?php echo $license_content ?></p>
				</div>
			</div>

			<div id="links" class="links">
				<div class="title">
					<h1 ><?php echo $links_title ?></h1>
				</div>
				<div class="content first">
					<ul>
						<li><?php echo $link_wiz ?></li>
						<li><?php echo $link_youyax ?></li>
					</ul>
				</div>
				<div class="content">
					<ul>
						<li><?php echo $link_qui ?></li>
						<li><?php echo $link_fineui ?></li>
					</ul>
				</div>
				<div class="content">
					<ul>
						<li><?php echo $link_qingyuan ?></li>
						<li><?php echo $link_zuicode ?></li>
					</ul>
				</div>
				<div class="content">
					<ul>
						<li><?php echo $link_sufeinet ?></li>
						<li></li>
					</ul>
				</div>
				<div class="content">
					<ul>
						<li><?php echo $link_16aspx ?></li>
						<li></li>
					</ul>
				</div>
			</div>

			<div id="contact" class="contact">
				<div class="title">
					<h1 ><?php echo $contact_title ?></h1>
					<br/>
					<ul class="list">
						<li><span ><?php echo $contact_option1 ?></span><a href="http://code.google.com/p/jquerytree/" target="_blank">http://code.google.com/p/jquerytree/</a></li>
						<li><span ><?php echo $contact_option6 ?></span><a href="https://github.com/zTree/zTree_v3" target="_blank">https://github.com/zTree/zTree_v3</a></li>
						<li><span ><?php echo $contact_option2 ?></span><a href="http://my.oschina.net/dyhunter" target="_blank">http://my.oschina.net/dyhunter</a></li>
						<li><span ><?php echo $contact_option3 ?></span><a href="http://ztreeapi.iteye.com/" target="_blank">http://ztreeapi.iteye.com/</a></li>
						<li><span ><?php echo $contact_option4 ?></span><a href="http://tieba.baidu.com/f?kw=zTree" target="_blank">http://tieba.baidu.com/f?kw=zTree</a></li>
						<li><span ><?php echo $contact_option5 ?></span><a href="mailto:hunter.z@263.net">hunter.z@263.net</a></li>
					</ul>
					<br/>
				</div>
				<div class="myhome" title="<?php echo $contact_myhome ?>"></div>    
			</div>

		</div>
		<div class="clear"></div>
    </div>
</div>
<?php
include( "foot.php")
?>