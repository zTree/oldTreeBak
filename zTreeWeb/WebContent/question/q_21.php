<?php?><div class="qDiv" id ="q_21"><h2>2.1、JSON 对象 和 JSON 格式字符串的区别是什么？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有不少朋友由于没有分清楚这两者的关系，导致使用 zTree 出现了错误，这里专门讲解一下：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（1）JSON 对象是满足 JSON 数据格式的 JS 对象
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如： {name:'abc'}
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（2）JSON 格式的字符串的关键问题——它仅仅是一个字符串，只不过满足了 JSON 的数据格式
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如："{name:'abc'}"
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到两个例子的对比了吗？显而易见，关键问题就出在这个双引号上。</p>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;所以在生成 zTree 的数据时，请不要在数据外面再增加那两个双引号了！</p>
