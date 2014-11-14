<?php?><div class="qDiv" id ="q_43"><h2>4.3、如何让部分节点不显示 checkbox/radio ？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在 v2.6 之前 zTree 并没有提供这种方法，不过用上 v2.6 之后就简单多了，利用 nocheck 属性就可以了，请参考 API 文档中 "参数说明 -- zTreeNodes 详解 -- nocheck"。</p>
<pre xmlns=""><code><xmp>{"id":1, "name":"test1", nocheck:true}
{"id":2, "name":"test2", nocheck:false}
</xmp></code></pre>