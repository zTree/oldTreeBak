<?php?><div class="qDiv" id ="q_55"><h2>5.5、为什么异步加载初始化后无法得到节点数据？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经不止一次有朋友提出这个问题，所以这里必须强调一下，对于使用异步加载进行初始化的 zTree，以下代码是不可能得到节点数据的。</p>
<pre xmlns=""><code><xmp>zTreeObj = $("#treeDemo").zTree(setting, zNodes);
var nodes = zTreeObj.getNodes();</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么会这样？答案当然是“异步”这两个字！既然是异步，那么加载节点数据的进程肯定不会影响当前程序的进程。所以在执行到 var nodes = zTreeObj.getNodes(); 的时候，zTree 的异步加载数据正在进行中，当然就无法获得节点数据了。</p>
<p class>&nbsp;&nbsp;&nbsp;&nbsp;这种情况应该如何获取呢？ 那么请使用 asyncSuccess 这个事件回调函数，在 zTree 触发 asyncSuccess 的时候说明异步加载完毕。（为了增强容错请务必同时使用 asyncError）</p>