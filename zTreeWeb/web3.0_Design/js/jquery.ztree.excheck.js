/*
 * JQuery zTree excheck v3.5.32
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2018-01-06
 */
(function(n){var q,r,s,p={event:{CHECK:"ztree_check"},id:{CHECK:"_check"},checkbox:{STYLE:"checkbox",DEFAULT:"chk",DISABLED:"disable",FALSE:"false",TRUE:"true",FULL:"full",PART:"part",FOCUS:"focus"},radio:{STYLE:"radio",TYPE_ALL:"all",TYPE_LEVEL:"level"}},w={check:{enable:!1,autoCheckTrigger:!1,chkStyle:p.checkbox.STYLE,nocheckInherit:!1,chkDisabledInherit:!1,radioType:p.radio.TYPE_LEVEL,chkboxType:{Y:"ps",N:"ps"}},data:{key:{checked:"checked"}},callback:{beforeCheck:null,onCheck:null}};q=function(c,
a){if(a.chkDisabled===!0)return!1;var b=e.getSetting(c.data.treeId);if(i.apply(b.callback.beforeCheck,[b.treeId,a],!0)==!1)return!0;var d=e.nodeChecked(b,a);e.nodeChecked(b,a,!d);f.checkNodeRelation(b,a);d=m(a,h.id.CHECK,b);f.setChkClass(b,d,a);f.repairParentChkClassWithSelf(b,a);b.treeObj.trigger(h.event.CHECK,[c,b.treeId,a]);return!0};r=function(c,a){if(a.chkDisabled===!0)return!1;var b=e.getSetting(c.data.treeId),d=m(a,h.id.CHECK,b);a.check_Focus=!0;f.setChkClass(b,d,a);return!0};s=function(c,
a){if(a.chkDisabled===!0)return!1;var b=e.getSetting(c.data.treeId),d=m(a,h.id.CHECK,b);a.check_Focus=!1;f.setChkClass(b,d,a);return!0};n.extend(!0,n.fn.zTree.consts,p);n.extend(!0,n.fn.zTree._z,{tools:{},view:{checkNodeRelation:function(c,a){var b,d,j;d=h.radio;b=e.nodeChecked(c,a);if(c.check.chkStyle==d.STYLE){var g=e.getRadioCheckedList(c);if(b)if(c.check.radioType==d.TYPE_ALL){for(d=g.length-1;d>=0;d--){b=g[d];var k=e.nodeChecked(c,b);k&&b!=a&&(e.nodeChecked(c,b,!1),g.splice(d,1),f.setChkClass(c,
m(b,h.id.CHECK,c),b),b.parentTId!=a.parentTId&&f.repairParentChkClassWithSelf(c,b))}g.push(a)}else{g=a.parentTId?a.getParentNode():e.getRoot(c);g=e.nodeChildren(c,g);for(d=0,j=g.length;d<j;d++)if(b=g[d],(k=e.nodeChecked(c,b))&&b!=a)e.nodeChecked(c,b,!1),f.setChkClass(c,m(b,h.id.CHECK,c),b)}else if(c.check.radioType==d.TYPE_ALL)for(d=0,j=g.length;d<j;d++)if(a==g[d]){g.splice(d,1);break}}else g=e.nodeChildren(c,a),b&&(!g||g.length==0||c.check.chkboxType.Y.indexOf("s")>-1)&&f.setSonNodeCheckBox(c,a,
!0),!b&&(!g||g.length==0||c.check.chkboxType.N.indexOf("s")>-1)&&f.setSonNodeCheckBox(c,a,!1),b&&c.check.chkboxType.Y.indexOf("p")>-1&&f.setParentNodeCheckBox(c,a,!0),!b&&c.check.chkboxType.N.indexOf("p")>-1&&f.setParentNodeCheckBox(c,a,!1)},makeChkClass:function(c,a){var b=h.checkbox,d=h.radio,j="",g=e.nodeChecked(c,a),j=a.chkDisabled===!0?b.DISABLED:a.halfCheck?b.PART:c.check.chkStyle==d.STYLE?a.check_Child_State<1?b.FULL:b.PART:g?a.check_Child_State===2||a.check_Child_State===-1?b.FULL:b.PART:
a.check_Child_State<1?b.FULL:b.PART,d=c.check.chkStyle+"_"+(g?b.TRUE:b.FALSE)+"_"+j,d=a.check_Focus&&a.chkDisabled!==!0?d+"_"+b.FOCUS:d;return h.className.BUTTON+" "+b.DEFAULT+" "+d},repairAllChk:function(c,a){if(c.check.enable&&c.check.chkStyle===h.checkbox.STYLE)for(var b=e.getRoot(c),b=e.nodeChildren(c,b),d=0,j=b.length;d<j;d++){var g=b[d];g.nocheck!==!0&&g.chkDisabled!==!0&&e.nodeChecked(c,g,a);f.setSonNodeCheckBox(c,g,a)}},repairChkClass:function(c,a){if(a&&(e.makeChkFlag(c,a),a.nocheck!==!0)){var b=
m(a,h.id.CHECK,c);f.setChkClass(c,b,a)}},repairParentChkClass:function(c,a){if(a&&a.parentTId){var b=a.getParentNode();f.repairChkClass(c,b);f.repairParentChkClass(c,b)}},repairParentChkClassWithSelf:function(c,a){if(a){var b=e.nodeChildren(c,a);b&&b.length>0?f.repairParentChkClass(c,b[0]):f.repairParentChkClass(c,a)}},repairSonChkDisabled:function(c,a,b,d){if(a){if(a.chkDisabled!=b)a.chkDisabled=b;f.repairChkClass(c,a);if((a=e.nodeChildren(c,a))&&d)for(var j=0,g=a.length;j<g;j++)f.repairSonChkDisabled(c,
a[j],b,d)}},repairParentChkDisabled:function(c,a,b,d){if(a){if(a.chkDisabled!=b&&d)a.chkDisabled=b;f.repairChkClass(c,a);f.repairParentChkDisabled(c,a.getParentNode(),b,d)}},setChkClass:function(c,a,b){a&&(b.nocheck===!0?a.hide():a.show(),a.attr("class",f.makeChkClass(c,b)))},setParentNodeCheckBox:function(c,a,b,d){var j=m(a,h.id.CHECK,c);d||(d=a);e.makeChkFlag(c,a);a.nocheck!==!0&&a.chkDisabled!==!0&&(e.nodeChecked(c,a,b),f.setChkClass(c,j,a),c.check.autoCheckTrigger&&a!=d&&c.treeObj.trigger(h.event.CHECK,
[null,c.treeId,a]));if(a.parentTId){j=!0;if(!b)for(var g=e.nodeChildren(c,a.getParentNode()),k=0,o=g.length;k<o;k++){var l=g[k],i=e.nodeChecked(c,l);if(l.nocheck!==!0&&l.chkDisabled!==!0&&i||(l.nocheck===!0||l.chkDisabled===!0)&&l.check_Child_State>0){j=!1;break}}j&&f.setParentNodeCheckBox(c,a.getParentNode(),b,d)}},setSonNodeCheckBox:function(c,a,b,d){if(a){var j=m(a,h.id.CHECK,c);d||(d=a);var g=!1,k=e.nodeChildren(c,a);if(k)for(var o=0,l=k.length;o<l;o++){var i=k[o];f.setSonNodeCheckBox(c,i,b,d);
i.chkDisabled===!0&&(g=!0)}if(a!=e.getRoot(c)&&a.chkDisabled!==!0){g&&a.nocheck!==!0&&e.makeChkFlag(c,a);if(a.nocheck!==!0&&a.chkDisabled!==!0){if(e.nodeChecked(c,a,b),!g)a.check_Child_State=k&&k.length>0?b?2:0:-1}else a.check_Child_State=-1;f.setChkClass(c,j,a);c.check.autoCheckTrigger&&a!=d&&a.nocheck!==!0&&a.chkDisabled!==!0&&c.treeObj.trigger(h.event.CHECK,[null,c.treeId,a])}}}},event:{},data:{getRadioCheckedList:function(c){for(var a=e.getRoot(c).radioCheckedList,b=0,d=a.length;b<d;b++)e.getNodeCache(c,
a[b].tId)||(a.splice(b,1),b--,d--);return a},getCheckStatus:function(c,a){if(!c.check.enable||a.nocheck||a.chkDisabled)return null;var b=e.nodeChecked(c,a);return{checked:b,half:a.halfCheck?a.halfCheck:c.check.chkStyle==h.radio.STYLE?a.check_Child_State===2:b?a.check_Child_State>-1&&a.check_Child_State<2:a.check_Child_State>0}},getTreeCheckedNodes:function(c,a,b,d){if(!a)return[];for(var j=b&&c.check.chkStyle==h.radio.STYLE&&c.check.radioType==h.radio.TYPE_ALL,d=!d?[]:d,g=0,f=a.length;g<f;g++){var i=
a[g],l=e.nodeChildren(c,i),m=e.nodeChecked(c,i);if(i.nocheck!==!0&&i.chkDisabled!==!0&&m==b&&(d.push(i),j))break;e.getTreeCheckedNodes(c,l,b,d);if(j&&d.length>0)break}return d},getTreeChangeCheckedNodes:function(c,a,b){if(!a)return[];for(var b=!b?[]:b,d=0,j=a.length;d<j;d++){var g=a[d],f=e.nodeChildren(c,g),h=e.nodeChecked(c,g);g.nocheck!==!0&&g.chkDisabled!==!0&&h!=g.checkedOld&&b.push(g);e.getTreeChangeCheckedNodes(c,f,b)}return b},makeChkFlag:function(c,a){if(a){var b=-1,d=e.nodeChildren(c,a);
if(d)for(var j=0,g=d.length;j<g;j++){var f=d[j],i=e.nodeChecked(c,f),l=-1;if(c.check.chkStyle==h.radio.STYLE)if(l=f.nocheck===!0||f.chkDisabled===!0?f.check_Child_State:f.halfCheck===!0?2:i?2:f.check_Child_State>0?2:0,l==2){b=2;break}else l==0&&(b=0);else if(c.check.chkStyle==h.checkbox.STYLE)if(l=f.nocheck===!0||f.chkDisabled===!0?f.check_Child_State:f.halfCheck===!0?1:i?f.check_Child_State===-1||f.check_Child_State===2?2:1:f.check_Child_State>0?1:0,l===1){b=1;break}else if(l===2&&b>-1&&j>0&&l!==
b){b=1;break}else if(b===2&&l>-1&&l<2){b=1;break}else l>-1&&(b=l)}a.check_Child_State=b}}}});var n=n.fn.zTree,i=n._z.tools,h=n.consts,f=n._z.view,e=n._z.data,m=i.$;e.nodeChecked=function(c,a,b){if(!a)return!1;c=c.data.key.checked;typeof b!=="undefined"&&(typeof b==="string"&&(b=i.eqs(checked,"true")),a[c]=!!b);return a[c]};e.exSetting(w);e.addInitBind(function(c){c.treeObj.bind(h.event.CHECK,function(a,b,d,e){a.srcEvent=b;i.apply(c.callback.onCheck,[a,d,e])})});e.addInitUnBind(function(c){c.treeObj.unbind(h.event.CHECK)});
e.addInitCache(function(){});e.addInitNode(function(c,a,b,d){if(b){a=e.nodeChecked(c,b);a=e.nodeChecked(c,b,a);b.checkedOld=a;if(typeof b.nocheck=="string")b.nocheck=i.eqs(b.nocheck,"true");b.nocheck=!!b.nocheck||c.check.nocheckInherit&&d&&!!d.nocheck;if(typeof b.chkDisabled=="string")b.chkDisabled=i.eqs(b.chkDisabled,"true");b.chkDisabled=!!b.chkDisabled||c.check.chkDisabledInherit&&d&&!!d.chkDisabled;if(typeof b.halfCheck=="string")b.halfCheck=i.eqs(b.halfCheck,"true");b.halfCheck=!!b.halfCheck;
b.check_Child_State=-1;b.check_Focus=!1;b.getCheckStatus=function(){return e.getCheckStatus(c,b)};c.check.chkStyle==h.radio.STYLE&&c.check.radioType==h.radio.TYPE_ALL&&a&&e.getRoot(c).radioCheckedList.push(b)}});e.addInitProxy(function(c){var a=c.target,b=e.getSetting(c.data.treeId),d="",f=null,g="",k=null;if(i.eqs(c.type,"mouseover")){if(b.check.enable&&i.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+h.id.CHECK)!==null)d=i.getNodeMainDom(a).id,g="mouseoverCheck"}else if(i.eqs(c.type,"mouseout")){if(b.check.enable&&
i.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+h.id.CHECK)!==null)d=i.getNodeMainDom(a).id,g="mouseoutCheck"}else if(i.eqs(c.type,"click")&&b.check.enable&&i.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+h.id.CHECK)!==null)d=i.getNodeMainDom(a).id,g="checkNode";if(d.length>0)switch(f=e.getNodeCache(b,d),g){case "checkNode":k=q;break;case "mouseoverCheck":k=r;break;case "mouseoutCheck":k=s}return{stop:g==="checkNode",node:f,nodeEventType:g,nodeEventCallback:k,treeEventType:"",treeEventCallback:null}},
!0);e.addInitRoot(function(c){e.getRoot(c).radioCheckedList=[]});e.addBeforeA(function(c,a,b){c.check.enable&&(e.makeChkFlag(c,a),b.push("<span ID='",a.tId,h.id.CHECK,"' class='",f.makeChkClass(c,a),"' treeNode",h.id.CHECK,a.nocheck===!0?" style='display:none;'":"","></span>"))});e.addZTreeTools(function(c,a){a.checkNode=function(a,b,g,k){var o=e.nodeChecked(c,a);if(a.chkDisabled!==!0&&(b!==!0&&b!==!1&&(b=!o),k=!!k,(o!==b||g)&&!(k&&i.apply(this.setting.callback.beforeCheck,[this.setting.treeId,a],
!0)==!1)&&i.uCanDo(this.setting)&&this.setting.check.enable&&a.nocheck!==!0))e.nodeChecked(c,a,b),b=m(a,h.id.CHECK,this.setting),(g||this.setting.check.chkStyle===h.radio.STYLE)&&f.checkNodeRelation(this.setting,a),f.setChkClass(this.setting,b,a),f.repairParentChkClassWithSelf(this.setting,a),k&&this.setting.treeObj.trigger(h.event.CHECK,[null,this.setting.treeId,a])};a.checkAllNodes=function(a){f.repairAllChk(this.setting,!!a)};a.getCheckedNodes=function(a){var a=a!==!1,b=e.nodeChildren(c,e.getRoot(this.setting));
return e.getTreeCheckedNodes(this.setting,b,a)};a.getChangeCheckedNodes=function(){var a=e.nodeChildren(c,e.getRoot(this.setting));return e.getTreeChangeCheckedNodes(this.setting,a)};a.setChkDisabled=function(a,b,c,e){b=!!b;c=!!c;f.repairSonChkDisabled(this.setting,a,b,!!e);f.repairParentChkDisabled(this.setting,a.getParentNode(),b,c)};var b=a.updateNode;a.updateNode=function(c,e){b&&b.apply(a,arguments);if(c&&this.setting.check.enable&&m(c,this.setting).get(0)&&i.uCanDo(this.setting)){var g=m(c,
h.id.CHECK,this.setting);(e==!0||this.setting.check.chkStyle===h.radio.STYLE)&&f.checkNodeRelation(this.setting,c);f.setChkClass(this.setting,g,c);f.repairParentChkClassWithSelf(this.setting,c)}}});var t=f.createNodes;f.createNodes=function(c,a,b,d,e){t&&t.apply(f,arguments);b&&f.repairParentChkClassWithSelf(c,d)};var u=f.removeNode;f.removeNode=function(c,a){var b=a.getParentNode();u&&u.apply(f,arguments);a&&b&&(f.repairChkClass(c,b),f.repairParentChkClass(c,b))};var v=f.appendNodes;f.appendNodes=
function(c,a,b,d,h,g,i){var m="";v&&(m=v.apply(f,arguments));d&&e.makeChkFlag(c,d);return m}})(jQuery);
