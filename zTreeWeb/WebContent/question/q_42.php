<?php?><div class="qDiv" id ="q_42"><h2>4.2、如何让异步加载的子节点直接继承父节点的勾选状态？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;zTree 的 checkbox 在勾选时是可以进行父子关联自动勾选的，但对于异步加载的操作中，考虑到避免强行操作用户数据，因此始终没有做这个自动关联勾选异步加载子节点的特定功能。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里讲解一下如何利用 zTree 的接口实现这种功能：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方法一、Server 端控制自动关联</p>
<pre xmlns=""><code><xmp>在异步加载之前，利用参数将父节点的勾选状态提交，从而在生成节点时就设置其 checked 属性是 true 还是 false。
可以直接利用 asyncUrl 将参数拼到字符串内，也可以利用 更新 setting 中的 asyncParamOther 参数，具体如何使用看你的习惯了。
</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方法二、js 端控制自动关联</p>
<pre xmlns=""><code><xmp>直接利用 setting.asyncDataFilter 异步加载预处理的方法，将新节点的数据遍历并设置其 checked 后，return 即可。
</xmp></code></pre>