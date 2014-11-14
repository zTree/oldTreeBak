<?php?><div class="qDiv" id ="q_33"><h2>3.3、如何实现展开一个节点时关闭其他节点？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相信不少朋友会有这种需求，展开某个节点的时候，就要把其他节点关闭，就像这棵帮助的导航树一样。 另外在 高级应用的 "checkbox & radio 共存" 的 Demo 中也实现了这种功能，但马上有朋友给我提出你这方法只支持 2 级树的情况，如果有 N 级树就有问题了，于是特意增加了几级节点，修改后的 Demo 应该是可以支持 N 级树了。（如果你发现代码有问题，也请及时告诉我，谢谢）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实现思路如下：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) 需要有一个全局变量记录当前展开的节点</p>
<pre xmlns=""><code>var curExpandNode = null;</code></pre>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(2) 在展开另一个节点之前关闭之前的节点（这一步很重要）</p>
<pre xmlns=""><code><xmp>//需要 beforeExpand 事件回调函数
function zTreeOnBeforeExpand(treeId, treeNode) {
  singlePath(treeNode);
}
function singlePath(newNode) {
  /*
  如果即将展开的节点与需要展开的节点相同，那么返回.
  这个逻辑看上去很可笑，已经展开了为何还会再展开？但对于更复杂的操作中不一定只有 beforeExpand 的时候
  才会执行这个方法，所以不一定能完全避免此类事件）
  */
  if (newNode === curExpandNode) return;

  //存在已展开节点，并且是展开状态的
  if (curExpandNode && curExpandNode.open==true) {
    //这部分是专门用于多级节点的
    if (newNode.parentNode === curExpandNode.parentNode) {
      //如果新展开的节点和已展开节点具有同一个父节点，则只需要将已展开节点折叠即可
      zTree1.expandNode(curExpandNode, false, true);
    } else {
      //如果不是共同父节点，则需要找到最上方不同的父节点，将其包括子节点全部进行折叠
      var newParents = [];
      while (newNode) {
        newNode = newNode.parentNode;
        if (newNode === curExpandNode) {
          newParents = null;
          break;
        } else if (newNode) {
          newParents.push(newNode);
        }
      }
      if (newParents!=null) {
        var oldNode = curExpandNode;
        var oldParents = [];
        while (oldNode) {
          oldNode = oldNode.parentNode;
          if (oldNode) {
            oldParents.push(oldNode);
          }
        }
        for (var i = (newParents.length<oldParents.length?newParents.length:oldParents.length); i>=0; i--) {
          if (newParents[i] !== oldParents[i]) {
            zTree1.expandNode(oldParents[i], false, true);
            break;
          }
        }
      }
    }
  }
  //这行代码是否一定需要，就要看你的实际情况了，毕竟这个方法里面并没有将 newNode 进行展开
  curExpandNode = newNode;
}</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(3) 展开节点后记录下当前展开的节点数据</p>
<pre xmlns=""><code>//需要 expand 事件回调函数
function zTreeOnExpand(event, treeId, treeNode) {
  curExpandNode = treeNode;
}</code></pre>