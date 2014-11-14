<?php?><div class="qDiv" id ="q_25"><h2>2.5、如何获取当前 zTree 内的总结点数？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;zTree 并没有提供这个方法，但利用接口还是可以很容易的实现。例如：</p>
<pre xmlns=""><code><xmp>var zTreeObj = $("#tree").zTree(setting, zTreeNodes);
var count = zTreeObj.transformToArray(zTreeObj.getNodes()).length;
</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;补充一下，对于 v3.0 来说，很可能会提供一个简单的方法直接让用户获取。</p>