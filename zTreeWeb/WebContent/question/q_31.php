<?php?><div class="qDiv" id ="q_31"><h2>3.1、怎么初始化父节点展开/折叠状态？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;so so so easy! 只需要设置节点的 open 属性就可以啦。例如：</p>
<pre xmlns=""><code><xmp>标准模式的数据：
[
  {"id":1, "name":"test1", open:true, "nodes":[
    {"id":11, "name":"test11"}, {"id":12, "name":"test12"}
  ]}
]

简单数据模式：
[
  {"id":1, "pId":0, "name":"test1", open:true},
  {"id":11, "pId":1, "name":"test11"},
  {"id":12, "pId":1, "name":"test12"}
]
</xmp></code></pre>