<?php
include( "head.php");
?>
<div id="content_wrap" class="content_wrap">
	<div id="content" class="content">
		<div class="nav_section">
			<ul>
			</ul>
		</div>

		<div id="contentBox" class="contentBox round clearfix">
			<div id="faqContent" class="faqContent">
				<div id="faq_menu" class="faq_menu left">
					<ul id="menuTree" class="ztree"></ul>
				</div>
				<div id="demo_viewer" class="demo_viewer right">
					<IFRAME ID="faqIframe" Name="faqIframe" FRAMEBORDER=0 SCROLLING=NO SRC="" style="display:none;"></IFRAME>
				</div>
			</div>

		</div>
		<div class="clear"></div>
	</div>
</div>
<script type="text/javascript">
var menu_nodes =[
	{id:1, pId:0, name:"<?php echo $faq_menu_1?>", open:true},
	{id:101, pId:1, name:"<?php echo $faq_menu_101?>", iconSkin:"menu", file:"v2_v3/file"},
	{id:102, pId:1, name:"<?php echo $faq_menu_102?>", iconSkin:"menu", file:"v2_v3/setting"},
	{id:103, pId:1, name:"<?php echo $faq_menu_103?>", iconSkin:"menu", file:"v2_v3/treeNode"},
	{id:104, pId:1, name:"<?php echo $faq_menu_104?>", iconSkin:"menu", file:"v2_v3/function"},

	{id:2, pId:0, name:"<?php echo $faq_menu_2?>", open:true},
	{id:201, pId:2, name:"<?php echo $faq_menu_201?>", iconSkin:"menu", file:"v3/standard"},
	{id:206, pId:2, name:"<?php echo $faq_menu_206?>", iconSkin:"menu", file:"v3/lessonOne"},
	{id:202, pId:2, name:"<?php echo $faq_menu_202?>", iconSkin:"menu", file:"v3/jquery"},
	{id:203, pId:2, name:"<?php echo $faq_menu_203?>", iconSkin:"menu", file:"v3/css"},
	{id:204, pId:2, name:"<?php echo $faq_menu_204?>", iconSkin:"menu", file:"v3/json"},
	{id:205, pId:2, name:"<?php echo $faq_menu_205?>", iconSkin:"menu", file:"v3/submit"},
	{id:207, pId:2, name:"<?php echo $faq_menu_207?>", iconSkin:"menu", file:"v3/ajax"}
];
</script>
<?php
include( "foot.php");
?>