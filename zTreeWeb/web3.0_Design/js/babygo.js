window.___gcfg = {
	lang: 'zh-CN',
	parsetags: 'onload'
}; //for google+

var body, ad_right,
ad_left = {
	isStart: true,
	list: [],
	div: null,
	cur: 0,
	animate: 0,
	sleep: 10000
};
$(document).ready(function(){
	body = $('body');
	var plusone = document.createElement ("script");
	plusone.type = 'text/javascript'; plusone.async = true;
	plusone.src = "https://apis.google.com/js/plusone.js";
	body.append(plusone);
	
	ad_right = $("#ad_120_600_right");
	ad_right.sleep = 9500;
	
	var tmpAdList = $(".adLeft");
	ad_left.div = $("#ad_120_600_left");
	for (var i=0, l=tmpAdList.length; i<l; i++) {
		ad_left.list[i] = $(tmpAdList.get(i));
	}
	setAd();

	// footer
	$("#footer_siteMap").hover(function(){
		$("#footer_siteMap_ul").fadeIn("normal");
	}, function(){
		$("#footer_siteMap_ul").fadeOut("normal");
	});
	$("#footer_contact").hover(function(){
		$("#footer_contact_ul").fadeIn("normal");
	}, function(){
		$("#footer_contact_ul").fadeOut("normal");
	});
	$("#footer_download").hover(function(){
		$("#footer_download_ul").fadeIn("normal");
	}, function(){
		$("#footer_download_ul").fadeOut("normal");
	});

	if (path == "main") {
		mainContent._init();
		
	} else if (path == "demo") {
		demoContent._init();

	} else if (path == "api") {
		apiContent._init();

	} else if (path == "faq") {
		faqContent._init();
		
	} else if (path == "donate") {
		donateContent._init();

//	} else if (path == "download") {
		
	}
	$(window).bind("resize", function(){
		setAd();
	});

});

function setAd() {
	var head = $("#header");
	ad_left.headOffset = head.offset();
	ad_left.left = ad_left.headOffset.left - 120 - 20;
	clearTimeout(ad_left.timer);
	clearTimeout(ad_left.resizeTimer);
	if (ad_left.left < 0) {
		leftAdSwitch();
	} else {
		ad_left.resizeTimer = setTimeout(leftAdSwitch, 200);
	}
	ad_right.css({top:ad_left.headOffset.top+50, left:ad_left.headOffset.left + head.width()+20}).show();
	var rightChildren = ad_right.children();
	var child = rightChildren[Math.round(Math.random()*1000)%rightChildren.length];
	if (child) {
		child.style.display = "block";
	}
	if (!ad_right.ads) {
		ad_right.timer = setTimeout(function() {
			rightAdSwitch();
		}, ad_right.sleep);
	}

}

function rightAdSwitch() {
	var i, j;
	if(!ad_right.ads) {
		ad_right.ads = ad_right.children();
		ad_right.curIndex = 0;
		for(i=0; i<ad_right.ads.length; i++) {
			if (ad_right.ads[i].style.display != "none") {
				ad_right.curIndex = i;
			}
			ad_right.ads[i] = $(ad_right.ads[i]);
		}
	} else {
		ad_right.ads[ad_right.curIndex].hide();
		ad_right.curIndex ++;
		if (ad_right.curIndex == ad_right.ads.length) {
			ad_right.curIndex = 0;
		}
		ad_right.ads[ad_right.curIndex].show(0);
	}
	clearTimeout(ad_right.timer);
	ad_right.timer = setTimeout(function() {
		rightAdSwitch();
	}, ad_right.sleep);
}

function leftAdSwitch() {
	if (ad_left.left > 0 ){
		ad_left.div.css({top:ad_left.headOffset.top+50, left:ad_left.left}).show();
	} else {
		ad_left.div.hide();
		return;
	}
	if (ie) {
		curObj = getLeftCur();
		if (!!curObj.last) curObj.last.css({left:"-120px"})
		curObj.cur.css({left:0})
		ad_left.timer = setTimeout(leftAdSwitch, ad_left.sleep);
	} else if (ad_left.animate == 0) {
		curObj = getLeftCur();
		if (!!curObj.last) {
			curObj.last.animate({left:-120}, {duration: 1500,easing: "swing",
				complete:function(){
					ad_left.animate = ad_left.animate ^ 2;
					if (ad_left.animate == 0 && !ad_left.div.is(":hidden")) {
						ad_left.timer = setTimeout(leftAdSwitch, ad_left.sleep);
					}
				}
			});
		}
		curObj.cur.css({left:120}).show();
		curObj.cur.animate({left:0}, {duration: 1500,easing: "swing",
			complete:function(){
				if (ad_left.list.length <=1) return;
				ad_left.animate = ad_left.animate ^ 1;
				if (ad_left.animate == 0 && !ad_left.div.is(":hidden")) {
					ad_left.timer = setTimeout(leftAdSwitch, ad_left.sleep);
				}
			}
		});
	}
}
function getLeftCur() {
	ad_left.animate = ad_left.isStart ? 1 : 3;
	ad_left.last = ad_left.isStart ? null : ad_left.cur;
//	ad_left.cur  = ad_left.isStart ? Math.round(Math.random()*(ad_left.list.length - 1)) : ((ad_left.cur == ad_left.list.length - 1) ? 0 : ad_left.cur + 1);
	ad_left.cur  = ad_left.isStart ? (ad_left.list.length - 1) : ((ad_left.cur == ad_left.list.length - 1) ? 0 : ad_left.cur + 1);
	ad_left.isStart = false;
	return {last: ad_left.list[ad_left.last], cur: ad_left.list[ad_left.cur]};
}
