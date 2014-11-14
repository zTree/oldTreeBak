<?php?><div class="qDiv" id ="q_71"><h2>7.1、如何自动选中节点？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) 如果是静态数据一次性加载，那么请在初始化后，找到需要选中的节点数据，使用 selectNode 方法即可。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(2) 对于异步加载的树，请利用 asyncSuccess 事件回调函数，捕获到异步加载完毕时，找到自己需要选中的节点，使用 selectNode 方法即可。</p>