/*
 * JQuery zTree exedit v3.5.17
 * http://zTree.me/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2015-02-15
 */
(function(w){var I={event:{DRAG:"ztree_drag",DROP:"ztree_drop",RENAME:"ztree_rename",DRAGMOVE:"ztree_dragmove"},id:{EDIT:"_edit",INPUT:"_input",REMOVE:"_remove"},move:{TYPE_INNER:"inner",TYPE_PREV:"prev",TYPE_NEXT:"next"},node:{CURSELECTED_EDIT:"curSelectedNode_Edit",TMPTARGET_TREE:"tmpTargetzTree",TMPTARGET_NODE:"tmpTargetNode"}},x={onHoverOverNode:function(b,a){var c=m.getSetting(b.data.treeId),d=m.getRoot(c);if(d.curHoverNode!=a)x.onHoverOutNode(b);d.curHoverNode=a;f.addHoverDom(c,a)},onHoverOutNode:function(b){var b=
m.getSetting(b.data.treeId),a=m.getRoot(b);if(a.curHoverNode&&!m.isSelectedNode(b,a.curHoverNode))f.removeTreeDom(b,a.curHoverNode),a.curHoverNode=null},onMousedownNode:function(b,a){function c(b){if(C.dragFlag==0&&Math.abs(N-b.clientX)<e.edit.drag.minMoveSize&&Math.abs(O-b.clientY)<e.edit.drag.minMoveSize)return!0;var a,c,n,k,i;i=e.data.key.children;M.css("cursor","pointer");if(C.dragFlag==0){if(g.apply(e.callback.beforeDrag,[e.treeId,l],!0)==!1)return r(b),!0;for(a=0,c=l.length;a<c;a++){if(a==0)C.dragNodeShowBefore=
[];n=l[a];n.isParent&&n.open?(f.expandCollapseNode(e,n,!n.open),C.dragNodeShowBefore[n.tId]=!0):C.dragNodeShowBefore[n.tId]=!1}C.dragFlag=1;t.showHoverDom=!1;g.showIfameMask(e,!0);n=!0;k=-1;if(l.length>1){var j=l[0].parentTId?l[0].getParentNode()[i]:m.getNodes(e);i=[];for(a=0,c=j.length;a<c;a++)if(C.dragNodeShowBefore[j[a].tId]!==void 0&&(n&&k>-1&&k+1!==a&&(n=!1),i.push(j[a]),k=a),l.length===i.length){l=i;break}}n&&(H=l[0].getPreNode(),R=l[l.length-1].getNextNode());D=o("<ul class='zTreeDragUL'></ul>",
e);for(a=0,c=l.length;a<c;a++)n=l[a],n.editNameFlag=!1,f.selectNode(e,n,a>0),f.removeTreeDom(e,n),a>e.edit.drag.maxShowNodeNum-1||(k=o("<li id='"+n.tId+"_tmp'></li>",e),k.append(o(n,d.id.A,e).clone()),k.css("padding","0"),k.children("#"+n.tId+d.id.A).removeClass(d.node.CURSELECTED),D.append(k),a==e.edit.drag.maxShowNodeNum-1&&(k=o("<li id='"+n.tId+"_moretmp'><a>  ...  </a></li>",e),D.append(k)));D.attr("id",l[0].tId+d.id.UL+"_tmp");D.addClass(e.treeObj.attr("class"));D.appendTo(M);B=o("<span class='tmpzTreeMove_arrow'></span>",
e);B.attr("id","zTreeMove_arrow_tmp");B.appendTo(M);e.treeObj.trigger(d.event.DRAG,[b,e.treeId,l])}if(C.dragFlag==1){s&&B.attr("id")==b.target.id&&u&&b.clientX+F.scrollLeft()+2>w("#"+u+d.id.A,s).offset().left?(n=w("#"+u+d.id.A,s),b.target=n.length>0?n.get(0):b.target):s&&(s.removeClass(d.node.TMPTARGET_TREE),u&&w("#"+u+d.id.A,s).removeClass(d.node.TMPTARGET_NODE+"_"+d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_INNER));
u=s=null;J=!1;h=e;n=m.getSettings();for(var y in n)if(n[y].treeId&&n[y].edit.enable&&n[y].treeId!=e.treeId&&(b.target.id==n[y].treeId||w(b.target).parents("#"+n[y].treeId).length>0))J=!0,h=n[y];y=F.scrollTop();k=F.scrollLeft();i=h.treeObj.offset();a=h.treeObj.get(0).scrollHeight;n=h.treeObj.get(0).scrollWidth;c=b.clientY+y-i.top;var p=h.treeObj.height()+i.top-b.clientY-y,q=b.clientX+k-i.left,x=h.treeObj.width()+i.left-b.clientX-k;i=c<e.edit.drag.borderMax&&c>e.edit.drag.borderMin;var j=p<e.edit.drag.borderMax&&
p>e.edit.drag.borderMin,K=q<e.edit.drag.borderMax&&q>e.edit.drag.borderMin,G=x<e.edit.drag.borderMax&&x>e.edit.drag.borderMin,p=c>e.edit.drag.borderMin&&p>e.edit.drag.borderMin&&q>e.edit.drag.borderMin&&x>e.edit.drag.borderMin,q=i&&h.treeObj.scrollTop()<=0,x=j&&h.treeObj.scrollTop()+h.treeObj.height()+10>=a,P=K&&h.treeObj.scrollLeft()<=0,Q=G&&h.treeObj.scrollLeft()+h.treeObj.width()+10>=n;if(b.target&&g.isChildOrSelf(b.target,h.treeId)){for(var E=b.target;E&&E.tagName&&!g.eqs(E.tagName,"li")&&E.id!=
h.treeId;)E=E.parentNode;var S=!0;for(a=0,c=l.length;a<c;a++)if(n=l[a],E.id===n.tId){S=!1;break}else if(o(n,e).find("#"+E.id).length>0){S=!1;break}if(S&&b.target&&g.isChildOrSelf(b.target,E.id+d.id.A))s=w(E),u=E.id}n=l[0];if(p&&g.isChildOrSelf(b.target,h.treeId)){if(!s&&(b.target.id==h.treeId||q||x||P||Q)&&(J||!J&&n.parentTId))s=h.treeObj;i?h.treeObj.scrollTop(h.treeObj.scrollTop()-10):j&&h.treeObj.scrollTop(h.treeObj.scrollTop()+10);K?h.treeObj.scrollLeft(h.treeObj.scrollLeft()-10):G&&h.treeObj.scrollLeft(h.treeObj.scrollLeft()+
10);s&&s!=h.treeObj&&s.offset().left<h.treeObj.offset().left&&h.treeObj.scrollLeft(h.treeObj.scrollLeft()+s.offset().left-h.treeObj.offset().left)}D.css({top:b.clientY+y+3+"px",left:b.clientX+k+3+"px"});i=a=0;if(s&&s.attr("id")!=h.treeId){var z=u==null?null:m.getNodeCache(h,u);c=(b.ctrlKey||b.metaKey)&&e.edit.drag.isMove&&e.edit.drag.isCopy||!e.edit.drag.isMove&&e.edit.drag.isCopy;a=!!(H&&u===H.tId);i=!!(R&&u===R.tId);k=n.parentTId&&n.parentTId==u;n=(c||!i)&&g.apply(h.edit.drag.prev,[h.treeId,l,z],
!!h.edit.drag.prev);a=(c||!a)&&g.apply(h.edit.drag.next,[h.treeId,l,z],!!h.edit.drag.next);G=(c||!k)&&!(h.data.keep.leaf&&!z.isParent)&&g.apply(h.edit.drag.inner,[h.treeId,l,z],!!h.edit.drag.inner);if(!n&&!a&&!G){if(s=null,u="",v=d.move.TYPE_INNER,B.css({display:"none"}),window.zTreeMoveTimer)clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null}else{c=w("#"+u+d.id.A,s);i=z.isLastNode?null:w("#"+z.getNextNode().tId+d.id.A,s.next());j=c.offset().top;k=c.offset().left;K=n?G?0.25:a?
0.5:1:-1;G=a?G?0.75:n?0.5:0:-1;y=(b.clientY+y-j)/c.height();(K==1||y<=K&&y>=-0.2)&&n?(a=1-B.width(),i=j-B.height()/2,v=d.move.TYPE_PREV):(G==0||y>=G&&y<=1.2)&&a?(a=1-B.width(),i=i==null||z.isParent&&z.open?j+c.height()-B.height()/2:i.offset().top-B.height()/2,v=d.move.TYPE_NEXT):(a=5-B.width(),i=j,v=d.move.TYPE_INNER);B.css({display:"block",top:i+"px",left:k+a+"px"});c.addClass(d.node.TMPTARGET_NODE+"_"+v);if(T!=u||U!=v)L=(new Date).getTime();if(z&&z.isParent&&v==d.move.TYPE_INNER&&(y=!0,window.zTreeMoveTimer&&
window.zTreeMoveTargetNodeTId!==z.tId?(clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null):window.zTreeMoveTimer&&window.zTreeMoveTargetNodeTId===z.tId&&(y=!1),y))window.zTreeMoveTimer=setTimeout(function(){v==d.move.TYPE_INNER&&z&&z.isParent&&!z.open&&(new Date).getTime()-L>h.edit.drag.autoOpenTime&&g.apply(h.callback.beforeDragOpen,[h.treeId,z],!0)&&(f.switchNode(h,z),h.edit.drag.autoExpandTrigger&&h.treeObj.trigger(d.event.EXPAND,[h.treeId,z]))},h.edit.drag.autoOpenTime+50),
window.zTreeMoveTargetNodeTId=z.tId}}else if(v=d.move.TYPE_INNER,s&&g.apply(h.edit.drag.inner,[h.treeId,l,null],!!h.edit.drag.inner)?s.addClass(d.node.TMPTARGET_TREE):s=null,B.css({display:"none"}),window.zTreeMoveTimer)clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null;T=u;U=v;e.treeObj.trigger(d.event.DRAGMOVE,[b,e.treeId,l])}return!1}function r(b){if(window.zTreeMoveTimer)clearTimeout(window.zTreeMoveTimer),window.zTreeMoveTargetNodeTId=null;U=T=null;F.unbind("mousemove",c);
F.unbind("mouseup",r);F.unbind("selectstart",k);M.css("cursor","auto");s&&(s.removeClass(d.node.TMPTARGET_TREE),u&&w("#"+u+d.id.A,s).removeClass(d.node.TMPTARGET_NODE+"_"+d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE+"_"+I.move.TYPE_INNER));g.showIfameMask(e,!1);t.showHoverDom=!0;if(C.dragFlag!=0){C.dragFlag=0;var a,i,j;for(a=0,i=l.length;a<i;a++)j=l[a],j.isParent&&C.dragNodeShowBefore[j.tId]&&!j.open&&(f.expandCollapseNode(e,j,!j.open),
delete C.dragNodeShowBefore[j.tId]);D&&D.remove();B&&B.remove();var p=(b.ctrlKey||b.metaKey)&&e.edit.drag.isMove&&e.edit.drag.isCopy||!e.edit.drag.isMove&&e.edit.drag.isCopy;!p&&s&&u&&l[0].parentTId&&u==l[0].parentTId&&v==d.move.TYPE_INNER&&(s=null);if(s){var q=u==null?null:m.getNodeCache(h,u);if(g.apply(e.callback.beforeDrop,[h.treeId,l,q,v,p],!0)==!1)f.selectNodes(x,l);else{var A=p?g.clone(l):l;a=function(){if(J){if(!p)for(var a=0,c=l.length;a<c;a++)f.removeNode(e,l[a]);if(v==d.move.TYPE_INNER)f.addNodes(h,
q,A);else if(f.addNodes(h,q.getParentNode(),A),v==d.move.TYPE_PREV)for(a=0,c=A.length;a<c;a++)f.moveNode(h,q,A[a],v,!1);else for(a=-1,c=A.length-1;a<c;c--)f.moveNode(h,q,A[c],v,!1)}else if(p&&v==d.move.TYPE_INNER)f.addNodes(h,q,A);else if(p&&f.addNodes(h,q.getParentNode(),A),v!=d.move.TYPE_NEXT)for(a=0,c=A.length;a<c;a++)f.moveNode(h,q,A[a],v,!1);else for(a=-1,c=A.length-1;a<c;c--)f.moveNode(h,q,A[c],v,!1);f.selectNodes(h,A);o(A[0],e).focus().blur();e.treeObj.trigger(d.event.DROP,[b,h.treeId,A,q,
v,p])};v==d.move.TYPE_INNER&&g.canAsync(h,q)?f.asyncNode(h,q,!1,a):a()}}else f.selectNodes(x,l),e.treeObj.trigger(d.event.DROP,[b,e.treeId,l,null,null,null])}}function k(){return!1}var i,j,e=m.getSetting(b.data.treeId),C=m.getRoot(e),t=m.getRoots();if(b.button==2||!e.edit.enable||!e.edit.drag.isCopy&&!e.edit.drag.isMove)return!0;var p=b.target,q=m.getRoot(e).curSelectedList,l=[];if(m.isSelectedNode(e,a))for(i=0,j=q.length;i<j;i++){if(q[i].editNameFlag&&g.eqs(p.tagName,"input")&&p.getAttribute("treeNode"+
d.id.INPUT)!==null)return!0;l.push(q[i]);if(l[0].parentTId!==q[i].parentTId){l=[a];break}}else l=[a];f.editNodeBlur=!0;f.cancelCurEditNode(e);var F=w(e.treeObj.get(0).ownerDocument),M=w(e.treeObj.get(0).ownerDocument.body),D,B,s,J=!1,h=e,x=e,H,R,T=null,U=null,u=null,v=d.move.TYPE_INNER,N=b.clientX,O=b.clientY,L=(new Date).getTime();g.uCanDo(e)&&F.bind("mousemove",c);F.bind("mouseup",r);F.bind("selectstart",k);b.preventDefault&&b.preventDefault();return!0}};w.extend(!0,w.fn.zTree.consts,I);w.extend(!0,
w.fn.zTree._z,{tools:{getAbs:function(b){b=b.getBoundingClientRect();return[b.left+(document.body.scrollLeft+document.documentElement.scrollLeft),b.top+(document.body.scrollTop+document.documentElement.scrollTop)]},inputFocus:function(b){b.get(0)&&(b.focus(),g.setCursorPosition(b.get(0),b.val().length))},inputSelect:function(b){b.get(0)&&(b.focus(),b.select())},setCursorPosition:function(b,a){if(b.setSelectionRange)b.focus(),b.setSelectionRange(a,a);else if(b.createTextRange){var c=b.createTextRange();
c.collapse(!0);c.moveEnd("character",a);c.moveStart("character",a);c.select()}},showIfameMask:function(b,a){for(var c=m.getRoot(b);c.dragMaskList.length>0;)c.dragMaskList[0].remove(),c.dragMaskList.shift();if(a)for(var d=o("iframe",b),f=0,i=d.length;f<i;f++){var j=d.get(f),e=g.getAbs(j),j=o("<div id='zTreeMask_"+f+"' class='zTreeMask' style='top:"+e[1]+"px; left:"+e[0]+"px; width:"+j.offsetWidth+"px; height:"+j.offsetHeight+"px;'></div>",b);j.appendTo(o("body",b));c.dragMaskList.push(j)}}},view:{addEditBtn:function(b,
a){if(!(a.editNameFlag||o(a,d.id.EDIT,b).length>0)&&g.apply(b.edit.showRenameBtn,[b.treeId,a],b.edit.showRenameBtn)){var c=o(a,d.id.A,b),r="<span class='"+d.className.BUTTON+" edit' id='"+a.tId+d.id.EDIT+"' title='"+g.apply(b.edit.renameTitle,[b.treeId,a],b.edit.renameTitle)+"' treeNode"+d.id.EDIT+" style='display:none;'></span>";c.append(r);o(a,d.id.EDIT,b).bind("click",function(){if(!g.uCanDo(b)||g.apply(b.callback.beforeEditName,[b.treeId,a],!0)==!1)return!1;f.editNode(b,a);return!1}).show()}},
addRemoveBtn:function(b,a){if(!(a.editNameFlag||o(a,d.id.REMOVE,b).length>0)&&g.apply(b.edit.showRemoveBtn,[b.treeId,a],b.edit.showRemoveBtn)){var c=o(a,d.id.A,b),r="<span class='"+d.className.BUTTON+" remove' id='"+a.tId+d.id.REMOVE+"' title='"+g.apply(b.edit.removeTitle,[b.treeId,a],b.edit.removeTitle)+"' treeNode"+d.id.REMOVE+" style='display:none;'></span>";c.append(r);o(a,d.id.REMOVE,b).bind("click",function(){if(!g.uCanDo(b)||g.apply(b.callback.beforeRemove,[b.treeId,a],!0)==!1)return!1;f.removeNode(b,
a);b.treeObj.trigger(d.event.REMOVE,[b.treeId,a]);return!1}).bind("mousedown",function(){return!0}).show()}},addHoverDom:function(b,a){if(m.getRoots().showHoverDom)a.isHover=!0,b.edit.enable&&(f.addEditBtn(b,a),f.addRemoveBtn(b,a)),g.apply(b.view.addHoverDom,[b.treeId,a])},cancelCurEditNode:function(b,a,c){var r=m.getRoot(b),k=b.data.key.name,i=r.curEditNode;if(i){var j=r.curEditInput,a=a?a:c?i[k]:j.val();if(g.apply(b.callback.beforeRename,[b.treeId,i,a,c],!0)===!1)return!1;i[k]=a;o(i,d.id.A,b).removeClass(d.node.CURSELECTED_EDIT);
j.unbind();f.setNodeName(b,i);i.editNameFlag=!1;r.curEditNode=null;r.curEditInput=null;f.selectNode(b,i,!1);b.treeObj.trigger(d.event.RENAME,[b.treeId,i,c])}return r.noSelection=!0},editNode:function(b,a){var c=m.getRoot(b);f.editNodeBlur=!1;if(m.isSelectedNode(b,a)&&c.curEditNode==a&&a.editNameFlag)setTimeout(function(){g.inputFocus(c.curEditInput)},0);else{var r=b.data.key.name;a.editNameFlag=!0;f.removeTreeDom(b,a);f.cancelCurEditNode(b);f.selectNode(b,a,!1);o(a,d.id.SPAN,b).html("<input type=text class='rename' id='"+
a.tId+d.id.INPUT+"' treeNode"+d.id.INPUT+" >");var k=o(a,d.id.INPUT,b);k.attr("value",a[r]);b.edit.editNameSelectAll?g.inputSelect(k):g.inputFocus(k);k.bind("blur",function(){f.editNodeBlur||f.cancelCurEditNode(b)}).bind("keydown",function(a){a.keyCode=="13"?(f.editNodeBlur=!0,f.cancelCurEditNode(b)):a.keyCode=="27"&&f.cancelCurEditNode(b,null,!0)}).bind("click",function(){return!1}).bind("dblclick",function(){return!1});o(a,d.id.A,b).addClass(d.node.CURSELECTED_EDIT);c.curEditInput=k;c.noSelection=
!1;c.curEditNode=a}},moveNode:function(b,a,c,r,k,i){var j=m.getRoot(b),e=b.data.key.children;if(a!=c&&(!b.data.keep.leaf||!a||a.isParent||r!=d.move.TYPE_INNER)){var g=c.parentTId?c.getParentNode():j,t=a===null||a==j;t&&a===null&&(a=j);if(t)r=d.move.TYPE_INNER;j=a.parentTId?a.getParentNode():j;if(r!=d.move.TYPE_PREV&&r!=d.move.TYPE_NEXT)r=d.move.TYPE_INNER;if(r==d.move.TYPE_INNER)if(t)c.parentTId=null;else{if(!a.isParent)a.isParent=!0,a.open=!!a.open,f.setNodeLineIcos(b,a);c.parentTId=a.tId}var p;
t?p=t=b.treeObj:(!i&&r==d.move.TYPE_INNER?f.expandCollapseNode(b,a,!0,!1):i||f.expandCollapseNode(b,a.getParentNode(),!0,!1),t=o(a,b),p=o(a,d.id.UL,b),t.get(0)&&!p.get(0)&&(p=[],f.makeUlHtml(b,a,p,""),t.append(p.join(""))),p=o(a,d.id.UL,b));var q=o(c,b);q.get(0)?t.get(0)||q.remove():q=f.appendNodes(b,c.level,[c],null,!1,!0).join("");p.get(0)&&r==d.move.TYPE_INNER?p.append(q):t.get(0)&&r==d.move.TYPE_PREV?t.before(q):t.get(0)&&r==d.move.TYPE_NEXT&&t.after(q);var l=-1,w=0,x=null,t=null,D=c.level;if(c.isFirstNode){if(l=
0,g[e].length>1)x=g[e][1],x.isFirstNode=!0}else if(c.isLastNode)l=g[e].length-1,x=g[e][l-1],x.isLastNode=!0;else for(p=0,q=g[e].length;p<q;p++)if(g[e][p].tId==c.tId){l=p;break}l>=0&&g[e].splice(l,1);if(r!=d.move.TYPE_INNER)for(p=0,q=j[e].length;p<q;p++)j[e][p].tId==a.tId&&(w=p);if(r==d.move.TYPE_INNER){a[e]||(a[e]=[]);if(a[e].length>0)t=a[e][a[e].length-1],t.isLastNode=!1;a[e].splice(a[e].length,0,c);c.isLastNode=!0;c.isFirstNode=a[e].length==1}else a.isFirstNode&&r==d.move.TYPE_PREV?(j[e].splice(w,
0,c),t=a,t.isFirstNode=!1,c.parentTId=a.parentTId,c.isFirstNode=!0,c.isLastNode=!1):a.isLastNode&&r==d.move.TYPE_NEXT?(j[e].splice(w+1,0,c),t=a,t.isLastNode=!1,c.parentTId=a.parentTId,c.isFirstNode=!1,c.isLastNode=!0):(r==d.move.TYPE_PREV?j[e].splice(w,0,c):j[e].splice(w+1,0,c),c.parentTId=a.parentTId,c.isFirstNode=!1,c.isLastNode=!1);m.fixPIdKeyValue(b,c);m.setSonNodeLevel(b,c.getParentNode(),c);f.setNodeLineIcos(b,c);f.repairNodeLevelClass(b,c,D);!b.data.keep.parent&&g[e].length<1?(g.isParent=!1,
g.open=!1,a=o(g,d.id.UL,b),r=o(g,d.id.SWITCH,b),e=o(g,d.id.ICON,b),f.replaceSwitchClass(g,r,d.folder.DOCU),f.replaceIcoClass(g,e,d.folder.DOCU),a.css("display","none")):x&&f.setNodeLineIcos(b,x);t&&f.setNodeLineIcos(b,t);b.check&&b.check.enable&&f.repairChkClass&&(f.repairChkClass(b,g),f.repairParentChkClassWithSelf(b,g),g!=c.parent&&f.repairParentChkClassWithSelf(b,c));i||f.expandCollapseParentNode(b,c.getParentNode(),!0,k)}},removeEditBtn:function(b,a){o(a,d.id.EDIT,b).unbind().remove()},removeRemoveBtn:function(b,
a){o(a,d.id.REMOVE,b).unbind().remove()},removeTreeDom:function(b,a){a.isHover=!1;f.removeEditBtn(b,a);f.removeRemoveBtn(b,a);g.apply(b.view.removeHoverDom,[b.treeId,a])},repairNodeLevelClass:function(b,a,c){if(c!==a.level){var f=o(a,b),g=o(a,d.id.A,b),b=o(a,d.id.UL,b),c=d.className.LEVEL+c,a=d.className.LEVEL+a.level;f.removeClass(c);f.addClass(a);g.removeClass(c);g.addClass(a);b.removeClass(c);b.addClass(a)}},selectNodes:function(b,a){for(var c=0,d=a.length;c<d;c++)f.selectNode(b,a[c],c>0)}},event:{},
data:{setSonNodeLevel:function(b,a,c){if(c){var d=b.data.key.children;c.level=a?a.level+1:0;if(c[d])for(var a=0,f=c[d].length;a<f;a++)c[d][a]&&m.setSonNodeLevel(b,c,c[d][a])}}}});var H=w.fn.zTree,g=H._z.tools,d=H.consts,f=H._z.view,m=H._z.data,o=g.$;m.exSetting({edit:{enable:!1,editNameSelectAll:!1,showRemoveBtn:!0,showRenameBtn:!0,removeTitle:"remove",renameTitle:"rename",drag:{autoExpandTrigger:!1,isCopy:!0,isMove:!0,prev:!0,next:!0,inner:!0,minMoveSize:5,borderMax:10,borderMin:-5,maxShowNodeNum:5,
autoOpenTime:500}},view:{addHoverDom:null,removeHoverDom:null},callback:{beforeDrag:null,beforeDragOpen:null,beforeDrop:null,beforeEditName:null,beforeRename:null,onDrag:null,onDragMove:null,onDrop:null,onRename:null}});m.addInitBind(function(b){var a=b.treeObj,c=d.event;a.bind(c.RENAME,function(a,c,d,f){g.apply(b.callback.onRename,[a,c,d,f])});a.bind(c.DRAG,function(a,c,d,f){g.apply(b.callback.onDrag,[c,d,f])});a.bind(c.DRAGMOVE,function(a,c,d,f){g.apply(b.callback.onDragMove,[c,d,f])});a.bind(c.DROP,
function(a,c,d,f,e,m,o){g.apply(b.callback.onDrop,[c,d,f,e,m,o])})});m.addInitUnBind(function(b){var b=b.treeObj,a=d.event;b.unbind(a.RENAME);b.unbind(a.DRAG);b.unbind(a.DRAGMOVE);b.unbind(a.DROP)});m.addInitCache(function(){});m.addInitNode(function(b,a,c){if(c)c.isHover=!1,c.editNameFlag=!1});m.addInitProxy(function(b){var a=b.target,c=m.getSetting(b.data.treeId),f=b.relatedTarget,k="",i=null,j="",e=null,o=null;if(g.eqs(b.type,"mouseover")){if(o=g.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+d.id.A}]))k=
g.getNodeMainDom(o).id,j="hoverOverNode"}else if(g.eqs(b.type,"mouseout"))o=g.getMDom(c,f,[{tagName:"a",attrName:"treeNode"+d.id.A}]),o||(k="remove",j="hoverOutNode");else if(g.eqs(b.type,"mousedown")&&(o=g.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+d.id.A}])))k=g.getNodeMainDom(o).id,j="mousedownNode";if(k.length>0)switch(i=m.getNodeCache(c,k),j){case "mousedownNode":e=x.onMousedownNode;break;case "hoverOverNode":e=x.onHoverOverNode;break;case "hoverOutNode":e=x.onHoverOutNode}return{stop:!1,
node:i,nodeEventType:j,nodeEventCallback:e,treeEventType:"",treeEventCallback:null}});m.addInitRoot(function(b){var b=m.getRoot(b),a=m.getRoots();b.curEditNode=null;b.curEditInput=null;b.curHoverNode=null;b.dragFlag=0;b.dragNodeShowBefore=[];b.dragMaskList=[];a.showHoverDom=!0});m.addZTreeTools(function(b,a){a.cancelEditName=function(a){m.getRoot(this.setting).curEditNode&&f.cancelCurEditNode(this.setting,a?a:null,!0)};a.copyNode=function(a,b,k,i){if(!b)return null;if(a&&!a.isParent&&this.setting.data.keep.leaf&&
k===d.move.TYPE_INNER)return null;var j=this,e=g.clone(b);if(!a)a=null,k=d.move.TYPE_INNER;k==d.move.TYPE_INNER?(b=function(){f.addNodes(j.setting,a,[e],i)},g.canAsync(this.setting,a)?f.asyncNode(this.setting,a,i,b):b()):(f.addNodes(this.setting,a.parentNode,[e],i),f.moveNode(this.setting,a,e,k,!1,i));return e};a.editName=function(a){a&&a.tId&&a===m.getNodeCache(this.setting,a.tId)&&(a.parentTId&&f.expandCollapseParentNode(this.setting,a.getParentNode(),!0),f.editNode(this.setting,a))};a.moveNode=
function(a,b,k,i){function j(){f.moveNode(e.setting,a,b,k,!1,i)}if(!b)return b;if(a&&!a.isParent&&this.setting.data.keep.leaf&&k===d.move.TYPE_INNER)return null;else if(a&&(b.parentTId==a.tId&&k==d.move.TYPE_INNER||o(b,this.setting).find("#"+a.tId).length>0))return null;else a||(a=null);var e=this;g.canAsync(this.setting,a)&&k===d.move.TYPE_INNER?f.asyncNode(this.setting,a,i,j):j();return b};a.setEditable=function(a){this.setting.edit.enable=a;return this.refresh()}});var N=f.cancelPreSelectedNode;
f.cancelPreSelectedNode=function(b,a){for(var c=m.getRoot(b).curSelectedList,d=0,g=c.length;d<g;d++)if(!a||a===c[d])if(f.removeTreeDom(b,c[d]),a)break;N&&N.apply(f,arguments)};var O=f.createNodes;f.createNodes=function(b,a,c,d){O&&O.apply(f,arguments);c&&f.repairParentChkClassWithSelf&&f.repairParentChkClassWithSelf(b,d)};var V=f.makeNodeUrl;f.makeNodeUrl=function(b,a){return b.edit.enable?null:V.apply(f,arguments)};var L=f.removeNode;f.removeNode=function(b,a){var c=m.getRoot(b);if(c.curEditNode===
a)c.curEditNode=null;L&&L.apply(f,arguments)};var P=f.selectNode;f.selectNode=function(b,a,c){var d=m.getRoot(b);if(m.isSelectedNode(b,a)&&d.curEditNode==a&&a.editNameFlag)return!1;P&&P.apply(f,arguments);f.addHoverDom(b,a);return!0};var Q=g.uCanDo;g.uCanDo=function(b,a){var c=m.getRoot(b);if(a&&(g.eqs(a.type,"mouseover")||g.eqs(a.type,"mouseout")||g.eqs(a.type,"mousedown")||g.eqs(a.type,"mouseup")))return!0;if(c.curEditNode)f.editNodeBlur=!1,c.curEditInput.focus();return!c.curEditNode&&(Q?Q.apply(f,
arguments):!0)}})(jQuery);
