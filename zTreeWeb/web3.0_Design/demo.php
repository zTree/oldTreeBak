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
			<div id="demoContent" class="demoContent">
				<div id="demo_menu" class="demo_menu left ">
					<ul id="menuTree" class="ztree"></ul>
				</div>
				<div id="demo_viewer" class="demo_viewer right">
					<IFRAME ID="demoIframe" Name="demoIframe" FRAMEBORDER=0 SCROLLING=NO SRC="" style="display:none;"></IFRAME>
				</div>
			</div>

		</div>
		<div class="clear"></div>
	</div>
</div>
<script type="text/javascript">
var menu_nodes =[
	{id:1, pId:0, name:"<?php echo $demo_menu_1?>", open:false},
	{id:101, pId:1, name:"<?php echo $demo_menu_101?>", iconSkin:"menu", file:"core/standardData"},
	{id:102, pId:1, name:"<?php echo $demo_menu_102?>", iconSkin:"menu", file:"core/simpleData"},
	{id:103, pId:1, name:"<?php echo $demo_menu_103?>", iconSkin:"menu", file:"core/noline"},
	{id:104, pId:1, name:"<?php echo $demo_menu_104?>", iconSkin:"menu", file:"core/noicon"},
	{id:105, pId:1, name:"<?php echo $demo_menu_105?>", iconSkin:"menu", file:"core/custom_icon"},
	{id:106, pId:1, name:"<?php echo $demo_menu_106?>", iconSkin:"menu", file:"core/custom_iconSkin"},
	{id:107, pId:1, name:"<?php echo $demo_menu_107?>", iconSkin:"menu", file:"core/custom_font"},
	{id:115, pId:1, name:"<?php echo $demo_menu_115?>", iconSkin:"menu", file:"core/url"},
	{id:108, pId:1, name:"<?php echo $demo_menu_108?>", iconSkin:"menu", file:"core/async"},
	{id:109, pId:1, name:"<?php echo $demo_menu_109?>", iconSkin:"menu", file:"core/async_fun"},
	{id:110, pId:1, name:"<?php echo $demo_menu_110?>", iconSkin:"menu", file:"core/update_fun"},
	{id:111, pId:1, name:"<?php echo $demo_menu_111?>", iconSkin:"menu", file:"core/click"},
	{id:112, pId:1, name:"<?php echo $demo_menu_112?>", iconSkin:"menu", file:"core/expand"},
	{id:113, pId:1, name:"<?php echo $demo_menu_113?>", iconSkin:"menu", file:"core/searchNodes"},
	{id:114, pId:1, name:"<?php echo $demo_menu_114?>", iconSkin:"menu", file:"core/otherMouse"},

	{id:2, pId:0, name:"<?php echo $demo_menu_2?>", open:false},
	{id:201, pId:2, name:"<?php echo $demo_menu_201?>", iconSkin:"menu", file:"excheck/checkbox"},
	{id:206, pId:2, name:"<?php echo $demo_menu_206?>", iconSkin:"menu", file:"excheck/checkbox_nocheck"},
	{id:207, pId:2, name:"<?php echo $demo_menu_207?>", iconSkin:"menu", file:"excheck/checkbox_chkDisabled"},
	{id:208, pId:2, name:"<?php echo $demo_menu_208?>", iconSkin:"menu", file:"excheck/checkbox_halfCheck"},
	{id:202, pId:2, name:"<?php echo $demo_menu_202?>", iconSkin:"menu", file:"excheck/checkbox_count"},
	{id:203, pId:2, name:"<?php echo $demo_menu_203?>", iconSkin:"menu", file:"excheck/checkbox_fun"},
	{id:204, pId:2, name:"<?php echo $demo_menu_204?>", iconSkin:"menu", file:"excheck/radio"},
	{id:209, pId:2, name:"<?php echo $demo_menu_209?>", iconSkin:"menu", file:"excheck/radio_nocheck"},
	{id:210, pId:2, name:"<?php echo $demo_menu_210?>", iconSkin:"menu", file:"excheck/radio_chkDisabled"},
	{id:211, pId:2, name:"<?php echo $demo_menu_211?>", iconSkin:"menu", file:"excheck/radio_halfCheck"},
	{id:205, pId:2, name:"<?php echo $demo_menu_205?>", iconSkin:"menu", file:"excheck/radio_fun"},
	{id:212, pId:2, name:"", blank:true},
	{id:213, pId:2, name:"", blank:true},
	{id:214, pId:2, name:"", blank:true},
	{id:215, pId:2, name:"", blank:true},

	{id:3, pId:0, name:"<?php echo $demo_menu_3?>", open:false},
	{id:301, pId:3, name:"<?php echo $demo_menu_301?>", iconSkin:"menu", file:"exedit/drag"},
	{id:302, pId:3, name:"<?php echo $demo_menu_302?>", iconSkin:"menu", file:"exedit/drag_super"},
	{id:303, pId:3, name:"<?php echo $demo_menu_303?>", iconSkin:"menu", file:"exedit/drag_fun"},
	{id:304, pId:3, name:"<?php echo $demo_menu_304?>", iconSkin:"menu", file:"exedit/edit"},
	{id:305, pId:3, name:"<?php echo $demo_menu_305?>", iconSkin:"menu", file:"exedit/edit_super"},
	{id:306, pId:3, name:"<?php echo $demo_menu_306?>", iconSkin:"menu", file:"exedit/edit_fun"},
	{id:307, pId:3, name:"<?php echo $demo_menu_307?>", iconSkin:"menu", file:"exedit/async_edit"},
	{id:308, pId:3, name:"<?php echo $demo_menu_308?>", iconSkin:"menu", file:"exedit/multiTree"},
	{id:309, pId:3, name:"", blank:true},
	{id:310, pId:3, name:"", blank:true},
	{id:311, pId:3, name:"", blank:true},
	{id:312, pId:3, name:"", blank:true},
	{id:313, pId:3, name:"", blank:true},
	{id:314, pId:3, name:"", blank:true},
	{id:315, pId:3, name:"", blank:true},

	{id:4, pId:0, name:"<?php echo $demo_menu_4?>", open:false},
	{id:401, pId:4, name:"<?php echo $demo_menu_401?>", iconSkin:"menu", file:"bigdata/common"},
	{id:402, pId:4, name:"<?php echo $demo_menu_402?>", iconSkin:"menu", file:"bigdata/diy_async"},
	{id:403, pId:4, name:"<?php echo $demo_menu_403?>", iconSkin:"menu", file:"bigdata/page"},
	{id:404, pId:4, name:"", blank:true},
	{id:405, pId:4, name:"", blank:true},
	{id:406, pId:4, name:"", blank:true},
	{id:407, pId:4, name:"", blank:true},
	{id:408, pId:4, name:"", blank:true},
	{id:409, pId:4, name:"", blank:true},
	{id:410, pId:4, name:"", blank:true},
	{id:411, pId:4, name:"", blank:true},
	{id:412, pId:4, name:"", blank:true},
	{id:413, pId:4, name:"", blank:true},
	{id:414, pId:4, name:"", blank:true},
	{id:415, pId:4, name:"", blank:true},

	{id:5, pId:0, name:"<?php echo $demo_menu_5?>", open:false},
	{id:501, pId:5, name:"<?php echo $demo_menu_501?>", iconSkin:"menu", file:"super/oneroot"},
	{id:502, pId:5, name:"<?php echo $demo_menu_502?>", iconSkin:"menu", file:"super/oneclick"},
	{id:503, pId:5, name:"<?php echo $demo_menu_503?>", iconSkin:"menu", file:"super/singlepath"},
	{id:516, pId:5, name:"<?php echo $demo_menu_516?>", iconSkin:"menu", file:"super/fuzzySearch"},
	{id:504, pId:5, name:"<?php echo $demo_menu_504?>", iconSkin:"menu", file:"super/diydom"},
	{id:505, pId:5, name:"<?php echo $demo_menu_505?>", iconSkin:"menu", file:"super/checkbox_radio"},
	{id:506, pId:5, name:"<?php echo $demo_menu_506?>", iconSkin:"menu", file:"super/left_menu"},
	{id:513, pId:5, name:"<?php echo $demo_menu_513?>", iconSkin:"menu", file:"super/left_menuForOutLook"},
	{id:514, pId:5, name:"<?php echo $demo_menu_514?>", iconSkin:"menu", file:"super/metro"},
	{id:515, pId:5, name:"<?php echo $demo_menu_515?>", iconSkin:"menu", file:"super/awesome"},
	{id:507, pId:5, name:"<?php echo $demo_menu_507?>", iconSkin:"menu", file:"super/select_menu"},
	{id:509, pId:5, name:"<?php echo $demo_menu_509?>", iconSkin:"menu", file:"super/select_menu_checkbox"},
	{id:510, pId:5, name:"<?php echo $demo_menu_510?>", iconSkin:"menu", file:"super/select_menu_radio"},
	{id:508, pId:5, name:"<?php echo $demo_menu_508?>", iconSkin:"menu", file:"super/rightClickMenu"},
	{id:511, pId:5, name:"<?php echo $demo_menu_511?>", iconSkin:"menu", file:"super/dragWithOther"},
	{id:512, pId:5, name:"<?php echo $demo_menu_512?>", iconSkin:"menu", file:"super/asyncForAll"},
	{id:516, pId:5, name:"", blank:true},

	{id:6, pId:0, name:"<?php echo $demo_menu_6?>", open:false},
	{id:601, pId:6, name:"<?php echo $demo_menu_601?>", iconSkin:"menu", file:"exhide/common"},
	{id:602, pId:6, name:"<?php echo $demo_menu_602?>", iconSkin:"menu", file:"exhide/checkbox"},
	{id:603, pId:6, name:"<?php echo $demo_menu_603?>", iconSkin:"menu", file:"exhide/radio"},
	{id:604, pId:6, name:"", blank:true},
	{id:605, pId:6, name:"", blank:true},
	{id:606, pId:6, name:"", blank:true},
	{id:607, pId:6, name:"", blank:true},
	{id:608, pId:6, name:"", blank:true},
	{id:609, pId:6, name:"", blank:true},
	{id:610, pId:6, name:"", blank:true},
	{id:611, pId:6, name:"", blank:true},
	{id:612, pId:6, name:"", blank:true},
	{id:613, pId:6, name:"", blank:true},
	{id:614, pId:6, name:"", blank:true},
	{id:615, pId:6, name:"", blank:true}
];
</script>
<?php
include( "foot.php");
?>