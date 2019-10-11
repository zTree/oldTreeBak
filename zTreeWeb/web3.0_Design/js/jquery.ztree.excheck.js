/*
 * JQuery zTree excheck v3.5.41
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2019-10-11
 */
(function(m){var p,q,r,o={event:{CHECK:"ztree_check"},id:{CHECK:"_check"},checkbox:{STYLE:"checkbox",DEFAULT:"chk",DISABLED:"disable",FALSE:"false",TRUE:"true",FULL:"full",PART:"part",FOCUS:"focus"},radio:{STYLE:"radio",TYPE_ALL:"all",TYPE_LEVEL:"level"}},v={check:{enable:!1,autoCheckTrigger:!1,chkStyle:o.checkbox.STYLE,nocheckInherit:!1,chkDisabledInherit:!1,radioType:o.radio.TYPE_LEVEL,chkboxType:{Y:"ps",N:"ps"}},data:{key:{checked:"checked"}},callback:{beforeCheck:null,onCheck:null}};p=function(c,
a){if(a.chkDisabled===!0)return!1;var b=f.getSetting(c.data.treeId);if(i.apply(b.callback.beforeCheck,[b.treeId,a],!0)==!1)return!0;var d=f.nodeChecked(b,a);f.nodeChecked(b,a,!d);e.checkNodeRelation(b,a);d=n(a,h.id.CHECK,b);e.setChkClass(b,d,a);e.repairParentChkClassWithSelf(b,a);b.treeObj.trigger(h.event.CHECK,[c,b.treeId,a]);return!0};q=function(c,a){if(a.chkDisabled===!0)return!1;var b=f.getSetting(c.data.treeId),d=n(a,h.id.CHECK,b);a.check_Focus=!0;e.setChkClass(b,d,a);return!0};r=function(c,
a){if(a.chkDisabled===!0)return!1;var b=f.getSetting(c.data.treeId),d=n(a,h.id.CHECK,b);a.check_Focus=!1;e.setChkClass(b,d,a);return!0};m.extend(!0,m.fn.zTree.consts,o);m.extend(!0,m.fn.zTree._z,{tools:{},view:{checkNodeRelation:function(c,a){var b,d,j;d=h.radio;b=f.nodeChecked(c,a);if(c.check.chkStyle==d.STYLE){var g=f.getRadioCheckedList(c);if(b)if(c.check.radioType==d.TYPE_ALL){for(d=g.length-1;d>=0;d--){b=g[d];var k=f.nodeChecked(c,b);k&&b!=a&&(f.nodeChecked(c,b,!1),g.splice(d,1),e.setChkClass(c,
n(b,h.id.CHECK,c),b),b.parentTId!=a.parentTId&&e.repairParentChkClassWithSelf(c,b))}g.push(a)}else{g=a.parentTId?a.getParentNode():f.getRoot(c);g=f.nodeChildren(c,g);for(d=0,j=g.length;d<j;d++)if(b=g[d],(k=f.nodeChecked(c,b))&&b!=a)f.nodeChecked(c,b,!1),e.setChkClass(c,n(b,h.id.CHECK,c),b)}else if(c.check.radioType==d.TYPE_ALL)for(d=0,j=g.length;d<j;d++)if(a==g[d]){g.splice(d,1);break}}else g=f.nodeChildren(c,a),b&&(!g||g.length==0||c.check.chkboxType.Y.indexOf("s")>-1)&&e.setSonNodeCheckBox(c,a,
!0),!b&&(!g||g.length==0||c.check.chkboxType.N.indexOf("s")>-1)&&e.setSonNodeCheckBox(c,a,!1),b&&c.check.chkboxType.Y.indexOf("p")>-1&&e.setParentNodeCheckBox(c,a,!0),!b&&c.check.chkboxType.N.indexOf("p")>-1&&e.setParentNodeCheckBox(c,a,!1)},makeChkClass:function(c,a){var b=h.checkbox,d=h.radio,j="",g=f.nodeChecked(c,a),j=a.chkDisabled===!0?b.DISABLED:a.halfCheck?b.PART:c.check.chkStyle==d.STYLE?a.check_Child_State<1?b.FULL:b.PART:g?a.check_Child_State===2||a.check_Child_State===-1?b.FULL:b.PART:
a.check_Child_State<1?b.FULL:b.PART,d=c.check.chkStyle+"_"+(g?b.TRUE:b.FALSE)+"_"+j,d=a.check_Focus&&a.chkDisabled!==!0?d+"_"+b.FOCUS:d;return h.className.BUTTON+" "+b.DEFAULT+" "+d},repairAllChk:function(c,a){if(c.check.enable&&c.check.chkStyle===h.checkbox.STYLE)for(var b=f.getRoot(c),b=f.nodeChildren(c,b),d=0,j=b.length;d<j;d++){var g=b[d];g.nocheck!==!0&&g.chkDisabled!==!0&&f.nodeChecked(c,g,a);e.setSonNodeCheckBox(c,g,a)}},repairChkClass:function(c,a){if(a&&(f.makeChkFlag(c,a),a.nocheck!==!0)){var b=
n(a,h.id.CHECK,c);e.setChkClass(c,b,a)}},repairParentChkClass:function(c,a){if(a&&a.parentTId){var b=a.getParentNode();e.repairChkClass(c,b);e.repairParentChkClass(c,b)}},repairParentChkClassWithSelf:function(c,a){if(a){var b=f.nodeChildren(c,a);b&&b.length>0?e.repairParentChkClass(c,b[0]):e.repairParentChkClass(c,a)}},repairSonChkDisabled:function(c,a,b,d){if(a){if(a.chkDisabled!=b)a.chkDisabled=b;e.repairChkClass(c,a);if((a=f.nodeChildren(c,a))&&d)for(var j=0,g=a.length;j<g;j++)e.repairSonChkDisabled(c,
a[j],b,d)}},repairParentChkDisabled:function(c,a,b,d){if(a){if(a.chkDisabled!=b&&d)a.chkDisabled=b;e.repairChkClass(c,a);e.repairParentChkDisabled(c,a.getParentNode(),b,d)}},setChkClass:function(c,a,b){a&&(b.nocheck===!0?a.hide():a.show(),a.attr("class",e.makeChkClass(c,b)))},setParentNodeCheckBox:function(c,a,b,d){var j=n(a,h.id.CHECK,c);d||(d=a);f.makeChkFlag(c,a);a.nocheck!==!0&&a.chkDisabled!==!0&&(f.nodeChecked(c,a,b),e.setChkClass(c,j,a),c.check.autoCheckTrigger&&a!=d&&c.treeObj.trigger(h.event.CHECK,
[null,c.treeId,a]));if(a.parentTId){j=!0;if(!b)for(var g=f.nodeChildren(c,a.getParentNode()),k=0,w=g.length;k<w;k++){var l=g[k],i=f.nodeChecked(c,l);if(l.nocheck!==!0&&l.chkDisabled!==!0&&i||(l.nocheck===!0||l.chkDisabled===!0)&&l.check_Child_State>0){j=!1;break}}j&&e.setParentNodeCheckBox(c,a.getParentNode(),b,d)}},setSonNodeCheckBox:function(c,a,b,d){if(a){var j=n(a,h.id.CHECK,c);d||(d=a);var g=!1,k=f.nodeChildren(c,a);if(k)for(var i=0,l=k.length;i<l;i++){var m=k[i];e.setSonNodeCheckBox(c,m,b,d);
m.chkDisabled===!0&&(g=!0)}if(a!=f.getRoot(c)&&a.chkDisabled!==!0){g&&a.nocheck!==!0&&f.makeChkFlag(c,a);if(a.nocheck!==!0&&a.chkDisabled!==!0){if(f.nodeChecked(c,a,b),!g)a.check_Child_State=k&&k.length>0?b?2:0:-1}else a.check_Child_State=-1;e.setChkClass(c,j,a);c.check.autoCheckTrigger&&a!=d&&a.nocheck!==!0&&a.chkDisabled!==!0&&c.treeObj.trigger(h.event.CHECK,[null,c.treeId,a])}}}},event:{},data:{getRadioCheckedList:function(c){for(var a=f.getRoot(c).radioCheckedList,b=0,d=a.length;b<d;b++)f.getNodeCache(c,
a[b].tId)||(a.splice(b,1),b--,d--);return a},getCheckStatus:function(c,a){if(!c.check.enable||a.nocheck||a.chkDisabled)return null;var b=f.nodeChecked(c,a);return{checked:b,half:a.halfCheck?a.halfCheck:c.check.chkStyle==h.radio.STYLE?a.check_Child_State===2:b?a.check_Child_State>-1&&a.check_Child_State<2:a.check_Child_State>0}},getTreeCheckedNodes:function(c,a,b,d){if(!a)return[];for(var j=b&&c.check.chkStyle==h.radio.STYLE&&c.check.radioType==h.radio.TYPE_ALL,d=!d?[]:d,g=0,e=a.length;g<e;g++){var i=
a[g],l=f.nodeChildren(c,i),m=f.nodeChecked(c,i);if(i.nocheck!==!0&&i.chkDisabled!==!0&&m==b&&(d.push(i),j))break;f.getTreeCheckedNodes(c,l,b,d);if(j&&d.length>0)break}return d},getTreeChangeCheckedNodes:function(c,a,b){if(!a)return[];for(var b=!b?[]:b,d=0,j=a.length;d<j;d++){var g=a[d],e=f.nodeChildren(c,g),h=f.nodeChecked(c,g);g.nocheck!==!0&&g.chkDisabled!==!0&&h!=g.checkedOld&&b.push(g);f.getTreeChangeCheckedNodes(c,e,b)}return b},makeChkFlag:function(c,a){if(a){var b=-1,d=f.nodeChildren(c,a);
if(d)for(var j=0,g=d.length;j<g;j++){var e=d[j],i=f.nodeChecked(c,e),l=-1;if(c.check.chkStyle==h.radio.STYLE)if(l=e.nocheck===!0||e.chkDisabled===!0?e.check_Child_State:e.halfCheck===!0?2:i?2:e.check_Child_State>0?2:0,l==2){b=2;break}else l==0&&(b=0);else if(c.check.chkStyle==h.checkbox.STYLE)if(l=e.nocheck===!0||e.chkDisabled===!0?e.check_Child_State:e.halfCheck===!0?1:i?e.check_Child_State===-1||e.check_Child_State===2?2:1:e.check_Child_State>0?1:0,l===1){b=1;break}else if(l===2&&b>-1&&j>0&&l!==
b){b=1;break}else if(b===2&&l>-1&&l<2){b=1;break}else l>-1&&(b=l)}a.check_Child_State=b}}}});var m=m.fn.zTree,i=m._z.tools,h=m.consts,e=m._z.view,f=m._z.data,n=i.$;f.nodeChecked=function(c,a,b){if(!a)return!1;c=c.data.key.checked;typeof b!=="undefined"?(typeof b==="string"&&(b=i.eqs(b,"true")),a[c]=!!b):a[c]=typeof a[c]=="string"?i.eqs(a[c],"true"):!!a[c];return a[c]};f.exSetting(v);f.addInitBind(function(c){c.treeObj.bind(h.event.CHECK,function(a,b,d,e){a.srcEvent=b;i.apply(c.callback.onCheck,[a,
d,e])})});f.addInitUnBind(function(c){c.treeObj.unbind(h.event.CHECK)});f.addInitCache(function(){});f.addInitNode(function(c,a,b,d){if(b){a=f.nodeChecked(c,b);b.checkedOld=a;if(typeof b.nocheck=="string")b.nocheck=i.eqs(b.nocheck,"true");b.nocheck=!!b.nocheck||c.check.nocheckInherit&&d&&!!d.nocheck;if(typeof b.chkDisabled=="string")b.chkDisabled=i.eqs(b.chkDisabled,"true");b.chkDisabled=!!b.chkDisabled||c.check.chkDisabledInherit&&d&&!!d.chkDisabled;if(typeof b.halfCheck=="string")b.halfCheck=i.eqs(b.halfCheck,
"true");b.halfCheck=!!b.halfCheck;b.check_Child_State=-1;b.check_Focus=!1;b.getCheckStatus=function(){return f.getCheckStatus(c,b)};c.check.chkStyle==h.radio.STYLE&&c.check.radioType==h.radio.TYPE_ALL&&a&&f.getRoot(c).radioCheckedList.push(b)}});f.addInitProxy(function(c){var a=c.target,b=f.getSetting(c.data.treeId),d="",e=null,g="",k=null;if(i.eqs(c.type,"mouseover")){if(b.check.enable&&i.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+h.id.CHECK)!==null)d=i.getNodeMainDom(a).id,g="mouseoverCheck"}else if(i.eqs(c.type,
"mouseout")){if(b.check.enable&&i.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+h.id.CHECK)!==null)d=i.getNodeMainDom(a).id,g="mouseoutCheck"}else if(i.eqs(c.type,"click")&&b.check.enable&&i.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+h.id.CHECK)!==null)d=i.getNodeMainDom(a).id,g="checkNode";if(d.length>0)switch(e=f.getNodeCache(b,d),g){case "checkNode":k=p;break;case "mouseoverCheck":k=q;break;case "mouseoutCheck":k=r}return{stop:g==="checkNode",node:e,nodeEventType:g,nodeEventCallback:k,
treeEventType:"",treeEventCallback:null}},!0);f.addInitRoot(function(c){f.getRoot(c).radioCheckedList=[]});f.addBeforeA(function(c,a,b){c.check.enable&&(f.makeChkFlag(c,a),b.push("<span ID='",a.tId,h.id.CHECK,"' class='",e.makeChkClass(c,a),"' treeNode",h.id.CHECK,a.nocheck===!0?" style='display:none;'":"","></span>"))});f.addZTreeTools(function(c,a){a.checkNode=function(a,b,g,k){var m=f.nodeChecked(c,a);if(a.chkDisabled!==!0&&(b!==!0&&b!==!1&&(b=!m),k=!!k,(m!==b||g)&&!(k&&i.apply(this.setting.callback.beforeCheck,
[this.setting.treeId,a],!0)==!1)&&i.uCanDo(this.setting)&&this.setting.check.enable&&a.nocheck!==!0))f.nodeChecked(c,a,b),b=n(a,h.id.CHECK,this.setting),(g||this.setting.check.chkStyle===h.radio.STYLE)&&e.checkNodeRelation(this.setting,a),e.setChkClass(this.setting,b,a),e.repairParentChkClassWithSelf(this.setting,a),k&&this.setting.treeObj.trigger(h.event.CHECK,[null,this.setting.treeId,a])};a.checkAllNodes=function(a){e.repairAllChk(this.setting,!!a)};a.getCheckedNodes=function(a){var a=a!==!1,b=
f.nodeChildren(c,f.getRoot(this.setting));return f.getTreeCheckedNodes(this.setting,b,a)};a.getChangeCheckedNodes=function(){var a=f.nodeChildren(c,f.getRoot(this.setting));return f.getTreeChangeCheckedNodes(this.setting,a)};a.setChkDisabled=function(a,b,c,f){b=!!b;c=!!c;e.repairSonChkDisabled(this.setting,a,b,!!f);e.repairParentChkDisabled(this.setting,a.getParentNode(),b,c)};var b=a.updateNode;a.updateNode=function(c,f){b&&b.apply(a,arguments);if(c&&this.setting.check.enable&&n(c,this.setting).get(0)&&
i.uCanDo(this.setting)){var g=n(c,h.id.CHECK,this.setting);(f==!0||this.setting.check.chkStyle===h.radio.STYLE)&&e.checkNodeRelation(this.setting,c);e.setChkClass(this.setting,g,c);e.repairParentChkClassWithSelf(this.setting,c)}}});var s=e.createNodes;e.createNodes=function(c,a,b,d,f){s&&s.apply(e,arguments);b&&e.repairParentChkClassWithSelf(c,d)};var t=e.removeNode;e.removeNode=function(c,a){var b=a.getParentNode();t&&t.apply(e,arguments);a&&b&&(e.repairChkClass(c,b),e.repairParentChkClass(c,b))};
var u=e.appendNodes;e.appendNodes=function(c,a,b,d,h,g,i){var m="";u&&(m=u.apply(e,arguments));d&&f.makeChkFlag(c,d);return m}})(jQuery);
