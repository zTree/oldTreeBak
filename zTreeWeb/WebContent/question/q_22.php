<?php?><div class="qDiv" id ="q_22"><h2>2.2、在 Server 端从数据库读出的数据如何生成 JSON 数据？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一些刚入门的朋友，不太了解如何在 Server 端生成 JSON 数据，这里专门介绍一下：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实大家不要想得很麻烦，首先从基本原理来说生成 JSON 数据 和 生成 HTML 页面是完全一样的，无非是 Server 端根据前台的需要拼接好不同规则的字符串并传输给前端而已。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) 如果你是在生成页面时，直接在 Web 上生成 JSON 数据，那么需要再生成的 Web 页面中将其赋给一个对象，例如：</p>
<pre xmlns=""><code><xmp>var zTreeNodes = [
  {"id":1, "name":"test1", "nodes":[
    {"id":11, "name":"test11"}, {"id":12, "name":"test12"}
  ]}
];
var setting = {};
var zTree = $("#tree").zTree(setting, zTreeNodes);
</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(2) 数据库里查出来的数据不是嵌套类型的，生成这种嵌套的字符串好麻烦呀，怎么办？可以使用简单数据模式，只需要简单的循环一次就可以了，剩下的事情由 zTree 来帮你进行自动转换，具体使用请参考 API 文档中“参数说明 -- setting 详解 -- isSimpleData”，数据格式例如：</p>
<pre xmlns=""><code><xmp>var zTreeNodes = [
  {"id":1, "pId":0, "name":"test1"},
  {"id":11, "pId":1, "name":"test11"},
  {"id":12, "pId":1, "name":"test12"}
];
var setting = {
  isSimpleData: true,
  treeNodeKey: "id",
  treeNodeParentKey: "pId"
};
var zTree = $("#tree").zTree(setting, zTreeNodes);
</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(3) 如果你只需要异步加载时专门输出 JSON 数据，那么就不需要任何变量了，直接输出数据即可。例如：</p>
<pre xmlns=""><code><xmp>[
  {"id":1, "pId":0, "name":"test1"},
  {"id":11, "pId":1, "name":"test11"},
  {"id":12, "pId":1, "name":"test12"}
]</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(4) zTree 默认增加子节点是数组对象，所以既是一个节点，也务必放到数组内。例如：</p>
<pre xmlns=""><code>[{"id":1, "pId":0, "name":"test1"}]</code></pre>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(5) 如果你使用了某些专门生成 JSON 数据字符串的工具，无法生成 zTree 可以识别的这种，怎么办？没关系只需要满足是 JSON 格式的字符串就可以了，剩下的事情可以利用 setting.asyncDataFilter 进行处理，具体处理方式可以参考帮助中“六、异步加载 -- 2、如何在异步加载取得数据后进行预处理？”。</p>