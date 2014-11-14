<?php
include( "head.php")
?>
<div id="content_wrap" class="content_wrap">
	<div id="content" class="content">
		<div class="nav_section">
			<ul>
				<li class="first"><?php echo $api_subtitle?></li>
				<li><button class="ico16 z_core" onfocus="this.blur();"></button><span><?php echo $api_sub_core?></span></li>
				<li><button class="ico16 z_check" onfocus="this.blur();"></button><span><?php echo $api_sub_check?></span></li>
				<li><button class="ico16 z_edit" onfocus="this.blur();"></button><span><?php echo $api_sub_edit?></span></li>
				<li><button class="ico16 z_hide" onfocus="this.blur();"></button><span><?php echo $api_sub_hide?></span></li>
				<li class="noline">
					<button class="ico16 z_search" onfocus="this.blur();" title="<?php echo $api_search_btn?>"></button>
					<input type="text" class="searchKey search" value="" style="">
					<input type="text" class="searchResult search" value="" style="">
					<button class="ico16 searchPrev disabled" onfocus="this.blur();" title="<?php echo $api_search_btn?>"></button><button class="ico16 searchNext disabled" onfocus="this.blur();" title="<?php echo $api_search_btn?>"></button>
				</li>
			</ul>
		</div>

		<div id="contentBox" class="contentBox round clearfix">
			<div id="apiContent" class="apiContent">
				<div id="api_setting" class="api_setting left">
					<ul class="api_content_title"><li><?php echo $api_settingTitle?></li></ul>
					<ul id="settingTree" class="ztree"></ul>
				</div>
				<div id="api_function" class="api_function right">
					<ul class="api_content_title"><li><?php echo $api_functionTitle?></li></ul>
					<ul id="functionTree" class="ztree"></ul>
					<ul class="api_content_title"><li><?php echo $api_treenodeTitle?></li></ul>
					<ul id="treenodeTree" class="ztree"></ul>
				</div>
			</div>

		</div>
		<div class="clear"></div>
	</div>
</div>

<!-- overlayed -->
<div id="overlayDiv" class="baby_overlay">
	<div id="overlayContent" class="content round clearfix">
		<div class="overlaySearch">
			<button class="ico16 z_search" onfocus="this.blur();" title="<?php echo $api_search_btn?>"></button>
			<input type="text" class="searchKey search" value=""><input type="text" class="searchResult search" value="">
			<button class="ico16 searchPrev disabled" onfocus="this.blur();" title="<?php echo $api_search_btn?>"></button><button class="ico16 searchNext disabled" onfocus="this.blur();" title="<?php echo $api_search_btn?>"></button>
		</div>
		<a id="overlayDivCloseBtn" class="close"></a>
		<div id="overlayDetailDiv" class="details"></div>
	</div>
	<div id="overlayDivArrow" class="baby_overlay_arrow"></div>
</div>
<?php
include( "foot.php")
?>