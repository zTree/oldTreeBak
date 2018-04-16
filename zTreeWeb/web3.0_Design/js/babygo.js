window.___gcfg = {
  lang: 'zh-CN',
  parsetags: 'onload'
}; //for google+

var body,
  ad_right = {
    isStart: true,
    list: [],
    div: null,
    cur: 0,
    animate: 0,
    sleep: 10000
  },
  ad_left = {
    isStart: true,
    list: [],
    div: null,
    cur: 0,
    animate: 0,
    sleep: 10000
  };
$(document).ready(function () {
  body = $('body');
  // var plusone = document.createElement ("script");
  // plusone.type = 'text/javascript'; plusone.async = true;
  // plusone.src = "https://apis.google.com/js/plusone.js";
  // body.append(plusone);

  var tmpAdList = $(".adLeft");
  ad_left.div = $("#ad_120_600_left");
  for (var i = 0, l = tmpAdList.length; i < l; i++) {
    ad_left.list[i] = $(tmpAdList.get(i));
  }
  tmpAdList = $(".adRight");
  ad_right.div = $("#ad_120_600_right");
  for (var i = 0, l = tmpAdList.length; i < l; i++) {
    ad_right.list[i] = $(tmpAdList.get(i));
  }
  setAd();
  setTimeout(setAd, 1000);

  // footer
  $("#footer_siteMap").hover(function () {
    $("#footer_siteMap_ul").fadeIn("normal");
  }, function () {
    $("#footer_siteMap_ul").fadeOut("normal");
  });
  $("#footer_contact").hover(function () {
    $("#footer_contact_ul").fadeIn("normal");
  }, function () {
    $("#footer_contact_ul").fadeOut("normal");
  });
  $("#footer_download").hover(function () {
    $("#footer_download_ul").fadeIn("normal");
  }, function () {
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
  $(window).bind("resize", function () {
    setAd();
  });

});

function setAd() {
  var head = $("#header");
  ad_left.headOffset = head.offset();
  ad_left.left = ad_left.headOffset.left - 120 - 20;
  clearTimeout(ad_left.timer);
  clearTimeout(ad_left.resizeTimer);

  ad_right.headOffset = ad_left.headOffset;
  ad_right.left = ad_right.headOffset.left + head.width() + 20;
  clearTimeout(ad_right.timer);
  clearTimeout(ad_right.resizeTimer);

  ad_left.resizeTimer = setTimeout(function () {
    adSwitch(ad_left);
  }, 200);
  ad_right.resizeTimer = setTimeout(function () {
    adSwitch(ad_right);
  }, 200);
  // if (ad_right.left < 0) {
  // rightAdSwitch();
  // } else {
  // ad_right.resizeTimer = setTimeout(rightAdSwitch, 200);
  // }

  //ad_right.css({top: ad_left.headOffset.top + 50, left: ad_left.headOffset.left + head.width() + 20}).show();
}

function adSwitch(adObj) {
  var head = $("#header");
  if (document.body.clientWidth - head.width() < 280) {
    adObj.div.hide();
    return;
  }

  if (adObj === ad_left) {
      adObj.div.css({top: adObj.headOffset.top + 50, left: adObj.left}).show();
  } else {
      adObj.div.css({top: adObj.headOffset.top + 50, left: adObj.headOffset.left + head.width() + 20}).show();
  }

  var curObj = getCurAd(adObj);
  if (!!curObj.last) curObj.last.css({left: "-120px"});
  curObj.cur.css({left: 0});
  adObj.timer = setTimeout(function () {
    adSwitch(adObj);
  }, adObj.sleep);
}

function getCurAd(adObj) {
  adObj.animate = adObj.isStart ? 1 : 3;
  adObj.last = adObj.isStart ? null : adObj.cur;
//	adObj.cur  = adObj.isStart ? Math.round(Math.random()*(adObj.list.length - 1)) : ((adObj.cur == adObj.list.length - 1) ? 0 : adObj.cur + 1);
  adObj.cur = adObj.isStart ? (adObj.list.length - 1) : ((adObj.cur == adObj.list.length - 1) ? 0 : adObj.cur + 1);
  adObj.isStart = false;
  return {last: adObj.list[adObj.last], cur: adObj.list[adObj.cur]};
}
