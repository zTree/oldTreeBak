var demoContent = {
	zTree_Menu: null,
	curMenu: null,
	curDemo: null,
	demoIframe: null,

	_init: function() {
		this.demoIframe = $("#demoIframe");
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
		demoContent.zTree_Menu = $.fn.zTree.init($("#menuTree"), $.fn.zTree._z.tools.clone(setting), menu_nodes);
		this.bindEvent();
		demoContent.showContent();

	},
	bindEvent: function() {
		this.demoIframe.bind("load", demoContent.onload);		
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
				node = demoContent.zTree_Menu.getNodeByParam("id", demoId);
			}
			if (!node) node = demoContent.zTree_Menu.getNodes()[0].children[0];
			demoContent.zTree_Menu.selectNode(node);
		}

		if (node) {
			demoContent.curMenu = node.getParentNode();
			demoContent.demoIframe.attr("src", "demo/" + lang + "/" + node.file + ".html");
			window.location.href = url + "#_" + node.id;
		}
	},
	onload: function(e) {
		demoContent.demoIframe.fadeIn("fast");
		var bodyH = demoContent.demoIframe.contents().find("body").get(0).scrollHeight,
		htmlH = demoContent.demoIframe.contents().find("html").get(0).scrollHeight,
		maxH = Math.max(bodyH, htmlH), minH = Math.min(bodyH, htmlH),
		h = demoContent.demoIframe.height() >= maxH ? minH:maxH ;
		if (h < 530) h = 530;
		if (ie) {
			demoContent.demoIframe.height(h);
		} else {
			demoContent.demoIframe.animate({height:h}, {duration: "normal",easing: "swing", complete:null});
		}
	},
	onNodeCreated: function (e, treeId, node) {
		var a = $("#" + node.tId + "_a");
		if (node.blank) {
			a.css({cursor: "default"});
		}
		a.hover(function() {
			if (demoContent.curMenu != node) {
				a.addClass("cur");
			}
			}, function(){
			if (demoContent.curMenu != node) {
				a.removeClass("cur");
			}
		})
	},
	beforeClick: function (treeId, node) {
		if (node.level == 0 && demoContent.curMenu != node) {
			demoContent.zTree_Menu.expandNode(node, true);
			demoContent.zTree_Menu.expandNode(demoContent.curMenu, false);
			var a1 = $("#" + demoContent.curMenu.tId + "_a");
			a1.removeClass("cur");
			var a2 = $("#" + node.tId + "_a");
			a2.addClass("cur");
			demoContent.curMenu = node;
		}
		return (!node.blank && node.level != 0 && !demoContent.zTree_Menu.isSelectedNode(node));
	},
	onClick: function (e, treeId, node) {
		demoContent.showContent(node);
	}
}