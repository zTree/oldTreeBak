/*
 * JQuery zTree exedit v3.5.32
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
(function(B){var I={event:{DRAG:"ztree_drag",DROP:"ztree_drop",RENAME:"ztree_rename",DRAGMOVE:"ztree_dragmove"},id:{EDIT:"_edit",INPUT:"_input",REMOVE:"_remove"},move:{TYPE_INNER:"inner",TYPE_PREV:"prev",TYPE_NEXT:"next"},node:{CURSELECTED_EDIT:"curSelectedNode_Edit",TMPTARGET_TREE:"tmpTargetzTree",TMPTARGET_NODE:"tmpTargetNode"}},v={onHoverOverNode:function(a,b){var c=i.getSetting(a.data.treeId),d=i.getRoot(c);if(d.curHoverNode!=b)v.onHoverOutNode(a);d.curHoverNode=b;e.addHoverDom(c,b)},onHoverOutNode:function(a){var a=
i.getSetting(a.data.treeId),b=i.getRoot(a);if(b.curHoverNode&&!i.isSelectedNode(a,b.curHoverNode))e.removeTreeDom(a,b.curHoverNode),b.curHoverNode=null},onMousedownNode:function(a,b){function c(a){if(m.dragFlag==0&&Math.abs(N-a.clientX)<f.edit.drag.minMoveSize&&Math.abs(O-a.clientY)<f.edit.drag.minMoveSize)return!0;var b,c,g,j;L.css("cursor","pointer");if(m.dragFlag==0){if(k.apply(f.callback.beforeDrag,[f.treeId,n],!0)==!1)return l(a),!0;for(b=0,c=n.length;b<c;b++){if(b==0)m.dragNodeShowBefore=[];
g=n[b];i.nodeIsParent(f,g)&&g.open?(e.expandCollapseNode(f,g,!g.open),m.dragNodeShowBefore[g.tId]=!0):m.dragNodeShowBefore[g.tId]=!1}m.dragFlag=1;y.showHoverDom=!1;k.showIfameMask(f,!0);j=!0;var p=-1;if(n.length>1){var o=n[0].parentTId?i.nodeChildren(f,n[0].getParentNode()):i.getNodes(f);g=[];for(b=0,c=o.length;b<c;b++)if(m.dragNodeShowBefore[o[b].tId]!==void 0&&(j&&p>-1&&p+1!==b&&(j=!1),g.push(o[b]),p=b),n.length===g.length){n=g;break}}j&&(H=n[0].getPreNode(),Q=n[n.length-1].getNextNode());C=q("<ul class='zTreeDragUL'></ul>",
f);for(b=0,c=n.length;b<c;b++)g=n[b],g.editNameFlag=!1,e.selectNode(f,g,b>0),e.removeTreeDom(f,g),b>f.edit.drag.maxShowNodeNum-1||(j=q("<li id='"+g.tId+"_tmp'></li>",f),j.append(q(g,d.id.A,f).clone()),j.css("padding","0"),j.children("#"+g.tId+d.id.A).removeClass(d.node.CURSELECTED),C.append(j),b==f.edit.drag.maxShowNodeNum-1&&(j=q("<li id='"+g.tId+"_moretmp'><a>  ...  </a></li>",f),C.append(j)));C.attr("id",n[0].tId+d.id.UL+"_tmp");C.addClass(f.treeObj.attr("class"));C.appendTo(L);u=q("<span class='tmpzTreeMove_arrow'></span>",
f);u.attr("id","zTreeMove_arrow_tmp");u.appendTo(L);f.treeObj.trigger(d.event.DRAG,[a,f.treeId,n])}if(m.dragFlag==1){t&&u.attr("id")==a.target.id&&w&&a.clientX+G.scrollLeft()+2>B("#"+w+d.id.A,t).offset().left?(g=B("#"+w+d.id.A,t),a.target=g.length>0?g.get(0):a.target):t&&(t.removeClass(d.node.TMPTARGET_TREE),w&&B("#"+w+d.id.A,t).removeClass(d.node.TMPTARGET_NODE+"_"+d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_INNER));
w=t=null;J=!1;h=f;g=i.getSettings();for(var z in g)if(g[z].treeId&&g[z].edit.enable&&g[z].treeId!=f.treeId&&(a.target.id==g[z].treeId||B(a.target).parents("#"+g[z].treeId).length>0))J=!0,h=g[z];z=G.scrollTop();j=G.scrollLeft();p=h.treeObj.offset();b=h.treeObj.get(0).scrollHeight;g=h.treeObj.get(0).scrollWidth;c=a.clientY+z-p.top;var E=h.treeObj.height()+p.top-a.clientY-z,r=a.clientX+j-p.left,s=h.treeObj.width()+p.left-a.clientX-j,p=c<f.edit.drag.borderMax&&c>f.edit.drag.borderMin,o=E<f.edit.drag.borderMax&&
E>f.edit.drag.borderMin,F=r<f.edit.drag.borderMax&&r>f.edit.drag.borderMin,v=s<f.edit.drag.borderMax&&s>f.edit.drag.borderMin,E=c>f.edit.drag.borderMin&&E>f.edit.drag.borderMin&&r>f.edit.drag.borderMin&&s>f.edit.drag.borderMin,r=p&&h.treeObj.scrollTop()<=0,s=o&&h.treeObj.scrollTop()+h.treeObj.height()+10>=b,M=F&&h.treeObj.scrollLeft()<=0,P=v&&h.treeObj.scrollLeft()+h.treeObj.width()+10>=g;if(a.target&&k.isChildOrSelf(a.target,h.treeId)){for(var D=a.target;D&&D.tagName&&!k.eqs(D.tagName,"li")&&D.id!=
h.treeId;)D=D.parentNode;var R=!0;for(b=0,c=n.length;b<c;b++)if(g=n[b],D.id===g.tId){R=!1;break}else if(q(g,f).find("#"+D.id).length>0){R=!1;break}if(R&&a.target&&k.isChildOrSelf(a.target,D.id+d.id.A))t=B(D),w=D.id}g=n[0];if(E&&k.isChildOrSelf(a.target,h.treeId)){if(!t&&(a.target.id==h.treeId||r||s||M||P)&&(J||!J&&g.parentTId))t=h.treeObj;p?h.treeObj.scrollTop(h.treeObj.scrollTop()-10):o&&h.treeObj.scrollTop(h.treeObj.scrollTop()+10);F?h.treeObj.scrollLeft(h.treeObj.scrollLeft()-10):v&&h.treeObj.scrollLeft(h.treeObj.scrollLeft()+
10);t&&t!=h.treeObj&&t.offset().left<h.treeObj.offset().left&&h.treeObj.scrollLeft(h.treeObj.scrollLeft()+t.offset().left-h.treeObj.offset().left)}C.css({top:a.clientY+z+3+"px",left:a.clientX+j+3+"px"});b=j=0;if(t&&t.attr("id")!=h.treeId){var A=w==null?null:i.getNodeCache(h,w),p=(a.ctrlKey||a.metaKey)&&f.edit.drag.isMove&&f.edit.drag.isCopy||!f.edit.drag.isMove&&f.edit.drag.isCopy;c=!!(H&&w===H.tId);F=!!(Q&&w===Q.tId);o=g.parentTId&&g.parentTId==w;g=(p||!F)&&k.apply(h.edit.drag.prev,[h.treeId,n,A],
!!h.edit.drag.prev);c=(p||!c)&&k.apply(h.edit.drag.next,[h.treeId,n,A],!!h.edit.drag.next);p=(p||!o)&&!(h.data.keep.leaf&&!i.nodeIsParent(f,A))&&k.apply(h.edit.drag.inner,[h.treeId,n,A],!!h.edit.drag.inner);o=function(){t=null;w="";x=d.move.TYPE_INNER;u.css({display:"none"});if(window.zTreeMoveTimer)clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null};if(!g&&!c&&!p)o();else if(F=B("#"+w+d.id.A,t),v=A.isLastNode?null:B("#"+A.getNextNode().tId+d.id.A,t.next()),E=F.offset().top,r=
F.offset().left,s=g?p?0.25:c?0.5:1:-1,M=c?p?0.75:g?0.5:0:-1,z=(a.clientY+z-E)/F.height(),(s==1||z<=s&&z>=-0.2)&&g?(j=1-u.width(),b=E-u.height()/2,x=d.move.TYPE_PREV):(M==0||z>=M&&z<=1.2)&&c?(j=1-u.width(),b=v==null||i.nodeIsParent(f,A)&&A.open?E+F.height()-u.height()/2:v.offset().top-u.height()/2,x=d.move.TYPE_NEXT):p?(j=5-u.width(),b=E,x=d.move.TYPE_INNER):o(),t){u.css({display:"block",top:b+"px",left:r+j+"px"});F.addClass(d.node.TMPTARGET_NODE+"_"+x);if(S!=w||T!=x)K=(new Date).getTime();if(A&&i.nodeIsParent(f,
A)&&x==d.move.TYPE_INNER&&(z=!0,window.zTreeMoveTimer&&window.zTreeMoveTargetNodeTId!==A.tId?(clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null):window.zTreeMoveTimer&&window.zTreeMoveTargetNodeTId===A.tId&&(z=!1),z))window.zTreeMoveTimer=setTimeout(function(){x==d.move.TYPE_INNER&&A&&i.nodeIsParent(f,A)&&!A.open&&(new Date).getTime()-K>h.edit.drag.autoOpenTime&&k.apply(h.callback.beforeDragOpen,[h.treeId,A],!0)&&(e.switchNode(h,A),h.edit.drag.autoExpandTrigger&&h.treeObj.trigger(d.event.EXPAND,
[h.treeId,A]))},h.edit.drag.autoOpenTime+50),window.zTreeMoveTargetNodeTId=A.tId}}else if(x=d.move.TYPE_INNER,t&&k.apply(h.edit.drag.inner,[h.treeId,n,null],!!h.edit.drag.inner)?t.addClass(d.node.TMPTARGET_TREE):t=null,u.css({display:"none"}),window.zTreeMoveTimer)clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null;S=w;T=x;f.treeObj.trigger(d.event.DRAGMOVE,[a,f.treeId,n])}return!1}function l(a){if(window.zTreeMoveTimer)clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=
null;T=S=null;G.unbind("mousemove",c);G.unbind("mouseup",l);G.unbind("selectstart",g);L.css("cursor","");t&&(t.removeClass(d.node.TMPTARGET_TREE),w&&B("#"+w+d.id.A,t).removeClass(d.node.TMPTARGET_NODE+"_"+d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_INNER));k.showIfameMask(f,!1);y.showHoverDom=!0;if(m.dragFlag!=0){m.dragFlag=0;var b,j,o;for(b=0,j=n.length;b<j;b++)o=n[b],i.nodeIsParent(f,o)&&m.dragNodeShowBefore[o.tId]&&
!o.open&&(e.expandCollapseNode(f,o,!o.open),delete m.dragNodeShowBefore[o.tId]);C&&C.remove();u&&u.remove();var r=(a.ctrlKey||a.metaKey)&&f.edit.drag.isMove&&f.edit.drag.isCopy||!f.edit.drag.isMove&&f.edit.drag.isCopy;!r&&t&&w&&n[0].parentTId&&w==n[0].parentTId&&x==d.move.TYPE_INNER&&(t=null);if(t){var p=w==null?null:i.getNodeCache(h,w);if(k.apply(f.callback.beforeDrop,[h.treeId,n,p,x,r],!0)==!1)e.selectNodes(v,n);else{var s=r?k.clone(n):n;b=function(){if(J){if(!r)for(var b=0,c=n.length;b<c;b++)e.removeNode(f,
n[b]);x==d.move.TYPE_INNER?e.addNodes(h,p,-1,s):e.addNodes(h,p.getParentNode(),x==d.move.TYPE_PREV?p.getIndex():p.getIndex()+1,s)}else if(r&&x==d.move.TYPE_INNER)e.addNodes(h,p,-1,s);else if(r)e.addNodes(h,p.getParentNode(),x==d.move.TYPE_PREV?p.getIndex():p.getIndex()+1,s);else if(x!=d.move.TYPE_NEXT)for(b=0,c=s.length;b<c;b++)e.moveNode(h,p,s[b],x,!1);else for(b=-1,c=s.length-1;b<c;c--)e.moveNode(h,p,s[c],x,!1);e.selectNodes(h,s);b=q(s[0],f).get(0);e.scrollIntoView(f,b);f.treeObj.trigger(d.event.DROP,
[a,h.treeId,s,p,x,r])};x==d.move.TYPE_INNER&&k.canAsync(h,p)?e.asyncNode(h,p,!1,b):b()}}else e.selectNodes(v,n),f.treeObj.trigger(d.event.DROP,[a,f.treeId,n,null,null,null])}}function g(){return!1}var o,j,f=i.getSetting(a.data.treeId),m=i.getRoot(f),y=i.getRoots();if(a.button==2||!f.edit.enable||!f.edit.drag.isCopy&&!f.edit.drag.isMove)return!0;var r=a.target,s=i.getRoot(f).curSelectedList,n=[];if(i.isSelectedNode(f,b))for(o=0,j=s.length;o<j;o++){if(s[o].editNameFlag&&k.eqs(r.tagName,"input")&&r.getAttribute("treeNode"+
d.id.INPUT)!==null)return!0;n.push(s[o]);if(n[0].parentTId!==s[o].parentTId){n=[b];break}}else n=[b];e.editNodeBlur=!0;e.cancelCurEditNode(f);var G=B(f.treeObj.get(0).ownerDocument),L=B(f.treeObj.get(0).ownerDocument.body),C,u,t,J=!1,h=f,v=f,H,Q,S=null,T=null,w=null,x=d.move.TYPE_INNER,N=a.clientX,O=a.clientY,K=(new Date).getTime();k.uCanDo(f)&&G.bind("mousemove",c);G.bind("mouseup",l);G.bind("selectstart",g);a.preventDefault&&a.preventDefault();return!0}};B.extend(!0,B.fn.zTree.consts,I);B.extend(!0,
B.fn.zTree._z,{tools:{getAbs:function(a){a=a.getBoundingClientRect();return[a.left+(document.body.scrollLeft+document.documentElement.scrollLeft),a.top+(document.body.scrollTop+document.documentElement.scrollTop)]},inputFocus:function(a){a.get(0)&&(a.focus(),k.setCursorPosition(a.get(0),a.val().length))},inputSelect:function(a){a.get(0)&&(a.focus(),a.select())},setCursorPosition:function(a,b){if(a.setSelectionRange)a.focus(),a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();
c.collapse(!0);c.moveEnd("character",b);c.moveStart("character",b);c.select()}},showIfameMask:function(a,b){for(var c=i.getRoot(a);c.dragMaskList.length>0;)c.dragMaskList[0].remove(),c.dragMaskList.shift();if(b)for(var d=q("iframe",a),g=0,e=d.length;g<e;g++){var j=d.get(g),f=k.getAbs(j),j=q("<div id='zTreeMask_"+g+"' class='zTreeMask' style='top:"+f[1]+"px; left:"+f[0]+"px; width:"+j.offsetWidth+"px; height:"+j.offsetHeight+"px;'></div>",a);j.appendTo(q("body",a));c.dragMaskList.push(j)}}},view:{addEditBtn:function(a,
b){if(!(b.editNameFlag||q(b,d.id.EDIT,a).length>0)&&k.apply(a.edit.showRenameBtn,[a.treeId,b],a.edit.showRenameBtn)){var c=q(b,d.id.A,a),l="<span class='"+d.className.BUTTON+" edit' id='"+b.tId+d.id.EDIT+"' title='"+k.apply(a.edit.renameTitle,[a.treeId,b],a.edit.renameTitle)+"' treeNode"+d.id.EDIT+" style='display:none;'></span>";c.append(l);q(b,d.id.EDIT,a).bind("click",function(){if(!k.uCanDo(a)||k.apply(a.callback.beforeEditName,[a.treeId,b],!0)==!1)return!1;e.editNode(a,b);return!1}).show()}},
addRemoveBtn:function(a,b){if(!(b.editNameFlag||q(b,d.id.REMOVE,a).length>0)&&k.apply(a.edit.showRemoveBtn,[a.treeId,b],a.edit.showRemoveBtn)){var c=q(b,d.id.A,a),l="<span class='"+d.className.BUTTON+" remove' id='"+b.tId+d.id.REMOVE+"' title='"+k.apply(a.edit.removeTitle,[a.treeId,b],a.edit.removeTitle)+"' treeNode"+d.id.REMOVE+" style='display:none;'></span>";c.append(l);q(b,d.id.REMOVE,a).bind("click",function(){if(!k.uCanDo(a)||k.apply(a.callback.beforeRemove,[a.treeId,b],!0)==!1)return!1;e.removeNode(a,
b);a.treeObj.trigger(d.event.REMOVE,[a.treeId,b]);return!1}).bind("mousedown",function(){return!0}).show()}},addHoverDom:function(a,b){if(i.getRoots().showHoverDom)b.isHover=!0,a.edit.enable&&(e.addEditBtn(a,b),e.addRemoveBtn(a,b)),k.apply(a.view.addHoverDom,[a.treeId,b])},cancelCurEditNode:function(a,b,c){var l=i.getRoot(a),g=l.curEditNode;if(g){var o=l.curEditInput,b=b?b:c?i.nodeName(a,g):o.val();if(k.apply(a.callback.beforeRename,[a.treeId,g,b,c],!0)===!1)return!1;i.nodeName(a,g,b);q(g,d.id.A,
a).removeClass(d.node.CURSELECTED_EDIT);o.unbind();e.setNodeName(a,g);g.editNameFlag=!1;l.curEditNode=null;l.curEditInput=null;e.selectNode(a,g,!1);a.treeObj.trigger(d.event.RENAME,[a.treeId,g,c])}return l.noSelection=!0},editNode:function(a,b){var c=i.getRoot(a);e.editNodeBlur=!1;if(i.isSelectedNode(a,b)&&c.curEditNode==b&&b.editNameFlag)setTimeout(function(){k.inputFocus(c.curEditInput)},0);else{b.editNameFlag=!0;e.removeTreeDom(a,b);e.cancelCurEditNode(a);e.selectNode(a,b,!1);q(b,d.id.SPAN,a).html("<input type=text class='rename' id='"+
b.tId+d.id.INPUT+"' treeNode"+d.id.INPUT+" >");var l=q(b,d.id.INPUT,a);l.attr("value",i.nodeName(a,b));a.edit.editNameSelectAll?k.inputSelect(l):k.inputFocus(l);l.bind("blur",function(){e.editNodeBlur||e.cancelCurEditNode(a)}).bind("keydown",function(b){b.keyCode=="13"?(e.editNodeBlur=!0,e.cancelCurEditNode(a)):b.keyCode=="27"&&e.cancelCurEditNode(a,null,!0)}).bind("click",function(){return!1}).bind("dblclick",function(){return!1});q(b,d.id.A,a).addClass(d.node.CURSELECTED_EDIT);c.curEditInput=l;
c.noSelection=!1;c.curEditNode=b}},moveNode:function(a,b,c,l,g,k){var j=i.getRoot(a);if(b!=c&&(!a.data.keep.leaf||!b||i.nodeIsParent(a,b)||l!=d.move.TYPE_INNER)){var f=c.parentTId?c.getParentNode():j,m=b===null||b==j;m&&b===null&&(b=j);if(m)l=d.move.TYPE_INNER;j=b.parentTId?b.getParentNode():j;if(l!=d.move.TYPE_PREV&&l!=d.move.TYPE_NEXT)l=d.move.TYPE_INNER;if(l==d.move.TYPE_INNER)if(m)c.parentTId=null;else{if(!i.nodeIsParent(a,b))i.nodeIsParent(a,b,!0),b.open=!!b.open,e.setNodeLineIcos(a,b);c.parentTId=
b.tId}var y;m?y=m=a.treeObj:(!k&&l==d.move.TYPE_INNER?e.expandCollapseNode(a,b,!0,!1):k||e.expandCollapseNode(a,b.getParentNode(),!0,!1),m=q(b,a),y=q(b,d.id.UL,a),m.get(0)&&!y.get(0)&&(y=[],e.makeUlHtml(a,b,y,""),m.append(y.join(""))),y=q(b,d.id.UL,a));var r=q(c,a);r.get(0)?m.get(0)||r.remove():r=e.appendNodes(a,c.level,[c],null,-1,!1,!0).join("");y.get(0)&&l==d.move.TYPE_INNER?y.append(r):m.get(0)&&l==d.move.TYPE_PREV?m.before(r):m.get(0)&&l==d.move.TYPE_NEXT&&m.after(r);var s;y=-1;var r=0,n=null,
m=null,B=c.level,v=i.nodeChildren(a,f),C=i.nodeChildren(a,j),u=i.nodeChildren(a,b);if(c.isFirstNode){if(y=0,v.length>1)n=v[1],n.isFirstNode=!0}else if(c.isLastNode)y=v.length-1,n=v[y-1],n.isLastNode=!0;else for(j=0,s=v.length;j<s;j++)if(v[j].tId==c.tId){y=j;break}y>=0&&v.splice(y,1);if(l!=d.move.TYPE_INNER)for(j=0,s=C.length;j<s;j++)C[j].tId==b.tId&&(r=j);if(l==d.move.TYPE_INNER){u||(u=i.nodeChildren(a,b,[]));if(u.length>0)m=u[u.length-1],m.isLastNode=!1;u.splice(u.length,0,c);c.isLastNode=!0;c.isFirstNode=
u.length==1}else b.isFirstNode&&l==d.move.TYPE_PREV?(C.splice(r,0,c),m=b,m.isFirstNode=!1,c.parentTId=b.parentTId,c.isFirstNode=!0,c.isLastNode=!1):b.isLastNode&&l==d.move.TYPE_NEXT?(C.splice(r+1,0,c),m=b,m.isLastNode=!1,c.parentTId=b.parentTId,c.isFirstNode=!1,c.isLastNode=!0):(l==d.move.TYPE_PREV?C.splice(r,0,c):C.splice(r+1,0,c),c.parentTId=b.parentTId,c.isFirstNode=!1,c.isLastNode=!1);i.fixPIdKeyValue(a,c);i.setSonNodeLevel(a,c.getParentNode(),c);e.setNodeLineIcos(a,c);e.repairNodeLevelClass(a,
c,B);!a.data.keep.parent&&v.length<1?(i.nodeIsParent(a,f,!1),f.open=!1,b=q(f,d.id.UL,a),l=q(f,d.id.SWITCH,a),j=q(f,d.id.ICON,a),e.replaceSwitchClass(f,l,d.folder.DOCU),e.replaceIcoClass(f,j,d.folder.DOCU),b.css("display","none")):n&&e.setNodeLineIcos(a,n);m&&e.setNodeLineIcos(a,m);a.check&&a.check.enable&&e.repairChkClass&&(e.repairChkClass(a,f),e.repairParentChkClassWithSelf(a,f),f!=c.parent&&e.repairParentChkClassWithSelf(a,c));k||e.expandCollapseParentNode(a,c.getParentNode(),!0,g)}},removeEditBtn:function(a,
b){q(b,d.id.EDIT,a).unbind().remove()},removeRemoveBtn:function(a,b){q(b,d.id.REMOVE,a).unbind().remove()},removeTreeDom:function(a,b){b.isHover=!1;e.removeEditBtn(a,b);e.removeRemoveBtn(a,b);k.apply(a.view.removeHoverDom,[a.treeId,b])},repairNodeLevelClass:function(a,b,c){if(c!==b.level){var e=q(b,a),g=q(b,d.id.A,a),a=q(b,d.id.UL,a),c=d.className.LEVEL+c,b=d.className.LEVEL+b.level;e.removeClass(c);e.addClass(b);g.removeClass(c);g.addClass(b);a.removeClass(c);a.addClass(b)}},selectNodes:function(a,
b){for(var c=0,d=b.length;c<d;c++)e.selectNode(a,b[c],c>0)}},event:{},data:{setSonNodeLevel:function(a,b,c){if(c){var d=i.nodeChildren(a,c);c.level=b?b.level+1:0;if(d)for(var b=0,g=d.length;b<g;b++)d[b]&&i.setSonNodeLevel(a,c,d[b])}}}});var H=B.fn.zTree,k=H._z.tools,d=H.consts,e=H._z.view,i=H._z.data,q=k.$;i.exSetting({edit:{enable:!1,editNameSelectAll:!1,showRemoveBtn:!0,showRenameBtn:!0,removeTitle:"remove",renameTitle:"rename",drag:{autoExpandTrigger:!1,isCopy:!0,isMove:!0,prev:!0,next:!0,inner:!0,
minMoveSize:5,borderMax:10,borderMin:-5,maxShowNodeNum:5,autoOpenTime:500}},view:{addHoverDom:null,removeHoverDom:null},callback:{beforeDrag:null,beforeDragOpen:null,beforeDrop:null,beforeEditName:null,beforeRename:null,onDrag:null,onDragMove:null,onDrop:null,onRename:null}});i.addInitBind(function(a){var b=a.treeObj,c=d.event;b.bind(c.RENAME,function(b,c,d,e){k.apply(a.callback.onRename,[b,c,d,e])});b.bind(c.DRAG,function(b,c,d,e){k.apply(a.callback.onDrag,[c,d,e])});b.bind(c.DRAGMOVE,function(b,
c,d,e){k.apply(a.callback.onDragMove,[c,d,e])});b.bind(c.DROP,function(b,c,d,e,f,i,q){k.apply(a.callback.onDrop,[c,d,e,f,i,q])})});i.addInitUnBind(function(a){var a=a.treeObj,b=d.event;a.unbind(b.RENAME);a.unbind(b.DRAG);a.unbind(b.DRAGMOVE);a.unbind(b.DROP)});i.addInitCache(function(){});i.addInitNode(function(a,b,c){if(c)c.isHover=!1,c.editNameFlag=!1});i.addInitProxy(function(a){var b=a.target,c=i.getSetting(a.data.treeId),e=a.relatedTarget,g="",o=null,j="",f=null,m=null;if(k.eqs(a.type,"mouseover")){if(m=
k.getMDom(c,b,[{tagName:"a",attrName:"treeNode"+d.id.A}]))g=k.getNodeMainDom(m).id,j="hoverOverNode"}else if(k.eqs(a.type,"mouseout"))m=k.getMDom(c,e,[{tagName:"a",attrName:"treeNode"+d.id.A}]),m||(g="remove",j="hoverOutNode");else if(k.eqs(a.type,"mousedown")&&(m=k.getMDom(c,b,[{tagName:"a",attrName:"treeNode"+d.id.A}])))g=k.getNodeMainDom(m).id,j="mousedownNode";if(g.length>0)switch(o=i.getNodeCache(c,g),j){case "mousedownNode":f=v.onMousedownNode;break;case "hoverOverNode":f=v.onHoverOverNode;
break;case "hoverOutNode":f=v.onHoverOutNode}return{stop:!1,node:o,nodeEventType:j,nodeEventCallback:f,treeEventType:"",treeEventCallback:null}});i.addInitRoot(function(a){var a=i.getRoot(a),b=i.getRoots();a.curEditNode=null;a.curEditInput=null;a.curHoverNode=null;a.dragFlag=0;a.dragNodeShowBefore=[];a.dragMaskList=[];b.showHoverDom=!0});i.addZTreeTools(function(a,b){b.cancelEditName=function(a){i.getRoot(this.setting).curEditNode&&e.cancelCurEditNode(this.setting,a?a:null,!0)};b.copyNode=function(b,
l,g,o){if(!l)return null;var j=i.nodeIsParent(a,b);if(b&&!j&&this.setting.data.keep.leaf&&g===d.move.TYPE_INNER)return null;var f=this,m=k.clone(l);if(!b)b=null,g=d.move.TYPE_INNER;g==d.move.TYPE_INNER?(l=function(){e.addNodes(f.setting,b,-1,[m],o)},k.canAsync(this.setting,b)?e.asyncNode(this.setting,b,o,l):l()):(e.addNodes(this.setting,b.parentNode,-1,[m],o),e.moveNode(this.setting,b,m,g,!1,o));return m};b.editName=function(a){a&&a.tId&&a===i.getNodeCache(this.setting,a.tId)&&(a.parentTId&&e.expandCollapseParentNode(this.setting,
a.getParentNode(),!0),e.editNode(this.setting,a))};b.moveNode=function(b,l,g,o){function j(){e.moveNode(m.setting,b,l,g,!1,o)}if(!l)return l;var f=i.nodeIsParent(a,b);if(b&&!f&&this.setting.data.keep.leaf&&g===d.move.TYPE_INNER)return null;else if(b&&(l.parentTId==b.tId&&g==d.move.TYPE_INNER||q(l,this.setting).find("#"+b.tId).length>0))return null;else b||(b=null);var m=this;k.canAsync(this.setting,b)&&g===d.move.TYPE_INNER?e.asyncNode(this.setting,b,o,j):j();return l};b.setEditable=function(a){this.setting.edit.enable=
a;return this.refresh()}});var N=e.cancelPreSelectedNode;e.cancelPreSelectedNode=function(a,b){for(var c=i.getRoot(a).curSelectedList,d=0,g=c.length;d<g;d++)if(!b||b===c[d])if(e.removeTreeDom(a,c[d]),b)break;N&&N.apply(e,arguments)};var O=e.createNodes;e.createNodes=function(a,b,c,d,g){O&&O.apply(e,arguments);c&&e.repairParentChkClassWithSelf&&e.repairParentChkClassWithSelf(a,d)};var V=e.makeNodeUrl;e.makeNodeUrl=function(a,b){return a.edit.enable?null:V.apply(e,arguments)};var K=e.removeNode;e.removeNode=
function(a,b){var c=i.getRoot(a);if(c.curEditNode===b)c.curEditNode=null;K&&K.apply(e,arguments)};var P=e.selectNode;e.selectNode=function(a,b,c){var d=i.getRoot(a);if(i.isSelectedNode(a,b)&&d.curEditNode==b&&b.editNameFlag)return!1;P&&P.apply(e,arguments);e.addHoverDom(a,b);return!0};var U=k.uCanDo;k.uCanDo=function(a,b){var c=i.getRoot(a);if(b&&(k.eqs(b.type,"mouseover")||k.eqs(b.type,"mouseout")||k.eqs(b.type,"mousedown")||k.eqs(b.type,"mouseup")))return!0;if(c.curEditNode)e.editNodeBlur=!1,c.curEditInput.focus();
return!c.curEditNode&&(U?U.apply(e,arguments):!0)}})(jQuery);
