var mainContent = {
	moveFlag: 7,
	curId: null,
	curBtn: null,
	contentBox:null,
	siteTag:null,
	zTreeInfoBtn: null,
	licenseBtn: null,
	contactBtn: null,

	divList: [],
	_init: function() {
		this.contentBox = $("#contentBox");
		this.siteTag = $(".siteTag");
		this.zTreeInfoBtn = $(".zTreeInfoBtn");
		this.licenseBtn = $(".licenseBtn");
		this.contactBtn = $(".contactBtn");
		this.divList["zTreeInfo"] = $("#zTreeInfo");
		this.divList["license"] = $("#license");
		this.divList["contact"] = $("#contact");
		this.divList["links"] = $("#links");
		this.contentBox.css("height", this.divList["zTreeInfo"].height());
		this._bindEvents();
		this.showContent({data:{id: "", _this: this}});
	},
	_bindEvents: function() {
		var _this = this;
		this.zTreeInfoBtn.bind("click", {id: "zTreeInfo",_this:_this}, _this.showContent);
		this.licenseBtn.bind("click", {id: "license",_this:_this}, _this.showContent);
		this.contactBtn.bind("click", {id: "contact",_this:_this}, _this.showContent);

	},
	showContent: function(e) {
		var cId = e.data.id,
		_this = e.data._this,
		curContent = _this.divList[_this.curId],
		url = window.location.href, subTag = window.location.hash;
		if (url.indexOf("#")>-1) {
			url = url.substring(0, url.indexOf("#"));
			subTag = subTag.substr(2);
		}
		if (!cId) {
			if (subTag == "" || !_this.divList[subTag]) {
				subTag = "zTreeInfo";
			}
			cId = subTag;
		}

		if (_this.curId === cId) {
			return;
		} else if (_this.moveFlag !== 7) {
			return;
		}
		var newTarget = _this.divList[cId],
		m = _this.getMoveType(curContent, newTarget);

		if (_this.curBtn) {
			_this.curBtn.removeClass("selected");
		} 
		if (!e.target) {
			switch (cId) {
				case "zTreeInfo" :
				_this.curBtn = _this.zTreeInfoBtn;
				break;
				case "license":
				_this.curBtn = _this.licenseBtn;
				break;
				case "contact":
				_this.curBtn = _this.contactBtn;
				break;
			}
		} else {
			_this.curBtn = $(e.target);
		}
		_this.curBtn.addClass("selected");


		var targetHeight = newTarget.height();
		var targetPaddingBottom = 0;
		if (targetHeight < 400) {
			targetPaddingBottom = (400 - targetHeight)
		}

		if (ie) {
			newTarget.css({top: 0,left: 0});
			newTarget.show();
			if (curContent) {
				curContent.hide();
			}
			_this.contentBox.css({"height":newTarget.height(), "margin-bottom":targetPaddingBottom});
		} else {
			_this.moveFlag = !curContent? 1 : 0;
			if (curContent) {
				curContent.animate({top:m.otop,left:m.oleft}, {duration: "normal",easing: "swing",
					complete:function(){
						curContent.hide();
						_this.moveFlag = _this.moveFlag | 1;
					}
				});
			}
			newTarget.css({top: m.ntop,left: m.nleft});
			newTarget.show();
			newTarget.animate({top:0,left:0}, {duration: "normal",easing: "swing",
				complete:function(){
					_this.moveFlag = _this.moveFlag | 2;
				}
			});
			_this.contentBox.animate({"height":newTarget.height(), "margin-bottom":targetPaddingBottom}, {duration: "normal",easing: "swing",
				complete:function(){
					_this.moveFlag = _this.moveFlag | 4;
				}
			});
		}
		_this.siteTag.removeClass("tag_" + _this.curId).addClass("tag_" + cId);
		_this.curId = cId;
		window.location.href = url + "#_" + cId;

	},

	lastMoveType:0,
	getMoveType: function(objOld, objNew) {
		if (!objOld || !objNew) return {otop:0,oleft:0, ntop:0, nleft:0};
		var m = Math.floor(Math.random()*8),
		r = {otop: objOld.height(), oleft: objOld.width(),
			ntop: objNew.height(), nleft: objNew.width()};
		if (m===this.lastMoveType) {
			m = (--m < 0 ) ? 7 : m;
		}
		this.lastMoveType = m;
		switch(m) {
			case 0:
				r.otop = 0;
				r.ntop = 0;r.nleft = -r.nleft;
				break;
			case 1:
				r.ntop = -r.ntop;r.nleft = -r.nleft;
				break;
			case 2:
				r.oleft = 0;
				r.ntop = -r.ntop;r.nleft = 0;
				break;
			case 3:
				r.oleft = -r.oleft;
				r.ntop = -r.ntop;
				break;
			case 4:
				r.otop = 0;r.oleft = -r.oleft;
				r.ntop = 0;
				break;
			case 5:
				r.otop = -r.otop;r.oleft = -r.oleft;
				break;
			case 6:
				r.otop = -r.otop;r.oleft = 0;
				r.nleft = 0;
				break;
			case 7:
				r.otop = -r.otop;
				r.nleft = -r.nleft;
		}
		return r;
	}
}