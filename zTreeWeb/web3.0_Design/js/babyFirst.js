var ie = (function(){
	var undef,
	v = 3,
	div = document.createElement('div'),
	all = div.getElementsByTagName('i');
	while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		all[0]
		){};
	return v > 4 ? v : undef;
}()), ie6 = (ie === 6),
path = window.location.pathname.replace(/.*\/([^\/\.]*)\..*/g,"$1"),
langLib = [];
ie = ie<9;
if(ie) {
	document.write('<link rel="stylesheet" href="css/common_ie6.css" type="text/css">');
}

function chgLang(newLang) {
	var Days = 30;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = "lang="+ escape (newLang) + ";expires=" + exp.toGMTString();
	window.location.reload();
}