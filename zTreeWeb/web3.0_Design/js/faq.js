var faqContent = {
	zTree_Menu: null,
	curMenu: null,
	curDemo: null,
	faqIframe: null,

	_init: function() {
		this.faqIframe = $("#faqIframe");
		var setting = {
			view: {
				showIcon: this.showIcon,
				showLine: false,
				selectedMulti: false,
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable:true,
					rootPId: ""
				}
			},
			callback: {
				onNodeCreated: this.onNodeCreated,
				beforeClick: this.beforeClick,
				onClick: this.onClick
			}
		}
		faqContent.zTree_Menu = $.fn.zTree.init($("#menuTree"), $.fn.zTree._z.tools.clone(setting), menu_nodes);
		this.bindEvent();
		faqContent.showContent();

	},
	bindEvent: function() {
		this.faqIframe.bind("load", faqContent.onload);
	},
	showIcon: function(treeId, node) {
		return !!node.iconSkin;
	},
	showContent: function(node) {
		var url = window.location.href, demoId = window.location.hash;
		if (url.indexOf("#")>-1) {
			url = url.substring(0, url.indexOf("#"));
			demoId = demoId.substr(2);
		}
		if (!node) {
			if (!node && demoId.length>0) {
				node = faqContent.zTree_Menu.getNodeByParam("id", demoId);
			}
			if (!node) node = faqContent.zTree_Menu.getNodes()[0].children[0];
			faqContent.zTree_Menu.selectNode(node);
		}

		if (node) {
			faqContent.curMenu = node.getParentNode();
			faqContent.faqIframe.attr("src", "faq/" + lang + "/" + node.file + ".html");
			window.location.href = url + "#_" + node.id;
		}
	},
	onload: function(e) {
		faqContent.faqIframe.fadeIn("fast");
		var h = Math.min(faqContent.faqIframe.contents().find("body").get(0).scrollHeight, faqContent.faqIframe.contents().find("html").get(0).scrollHeight);
		if (h < 300) h = 300;
		if (ie) {
			faqContent.faqIframe.height(h);
		} else {
			faqContent.faqIframe.animate({height:h}, {duration: "normal",easing: "swing", complete:null});
		}
	},
	onNodeCreated: function (e, treeId, node) {
		var a = $("#" + node.tId + "_a");
		if (node.blank) {
			a.css({cursor: "default"});
		}
		a.hover(function() {
			if (faqContent.curMenu != node) {
				a.addClass("cur");
			}
			}, function(){
			if (faqContent.curMenu != node) {
				a.removeClass("cur");
			}
		})
	},
	beforeClick: function (treeId, node) {
//		if (node.level == 0 && faqContent.curMenu != node) {
//			faqContent.zTree_Menu.expandNode(node, true);
//			faqContent.zTree_Menu.expandNode(faqContent.curMenu, false);
//			var a1 = $("#" + faqContent.curMenu.tId + "_a");
//			a1.removeClass("cur");
//			var a2 = $("#" + node.tId + "_a");
//			a2.addClass("cur");
//			faqContent.curMenu = node;
//		}
		return (!node.blank && node.level != 0 && !faqContent.zTree_Menu.isSelectedNode(node));
	},
	onClick: function (e, treeId, node) {
		faqContent.showContent(node);
	}
}