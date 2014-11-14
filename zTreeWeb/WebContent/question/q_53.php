<?php?><div class="qDiv" id ="q_53"><h2>5.3、如何在异步加载取得数据后进行预处理？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;setting.asyncDataFilter 是 v2.6 中新增的功能，就是为了方便用户在异步加载获取了子节点数据后，但尚未加载到 zTree 时先进行加工处理。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;具体功能可以参考 API 文档中 "参数说明 -- setting 详解 -- asyncDataFilter"</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里需要针对某些特殊情况进行说明：</p>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(1) 客户端实现异步加载子节点继承父节点的 check 状态</p>
<pre xmlns=""><code><xmp>假设 指定 setting.asyncDataFilter 为以下 function...
function ajaxDataFilter(treeId, parentNode, childNodes) {
  if (parentNode) {
    for(var i=0, j=childNodes.length; i<j; i++) {
      // 这里假设返回的子节点数据是简单的Array
      childNodes[i] = parentNode.checked;
    }
  }
  return childNodes;
}</xmp></code></pre>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(2) Server 自动生成的 JSON 数据格式与 zTree 支持的数据格式不匹配怎么办？</p>
<pre xmlns=""><code><xmp>假设返回的数据是以下内容:
{ msg:"success",
  treeNodes:[{id:1, name:"test1"}, {id:2, name:"test2"}, {id:3, name:"test3"}]
}
很明显 zTree 是不支持这种格式的数据，这时候 ajaxDataFilter 的作用就体现出来了
function ajaxDataFilter(treeId, parentNode, childNodes) {
  //只需这一句话就足以，为了让程序更健壮请自行做好数据校验和容错功能
  return childNodes.treeNodes;
}</xmp></code></pre>