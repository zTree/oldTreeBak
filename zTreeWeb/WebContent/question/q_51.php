<?php?><div class="qDiv" id ="q_51"><h2>5.1、asyncParam 和 asyncParamOther 的区别？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初次使用 zTree 的朋友一定对这两个参数比较陌生，这里专门对比讲解一下，方便大家尽快熟悉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) asyncParam 可以算是一个与 zTreeNode 数据动态绑定参数。</p>
<pre xmlns=""><code><xmp>具体说明 API 都有了，这里直接上例子，一看例子什么都明白了！
  假设 setting.asyncParam = ["id"];
  那么请保证你的 zTreeNode 数据中有这个 id 的属性；每次点击节点进行异步加载时，
会把该节点的id当做参数提交给后台。
  例如 点击 id = 1 的节点进行异步加载时，提交的参数中会有 id = 1 这个参数存在。
</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(2) asyncParamOther 可以算是一个与 zTreeNode 数据无关的静态参数。</p>
<pre xmlns=""><code><xmp>还是直接看例子吧...
  假设 setting.asyncParamOther = ["id", "abc"]; 或者 setting.asyncParamOther = {"id":"abc"};
  那么点击任意节点进行异步加载时，都会有这一组 key-value 键值对 存在于提交的参数中。
  例如 id = abc
</xmp></code></pre>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(3) 当然了，你也可以利用 updateSetting 不断更改 asyncParamOther 让其变向成为一个动态参数。</p>