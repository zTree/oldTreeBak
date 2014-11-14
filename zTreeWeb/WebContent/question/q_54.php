<?php?><div class="qDiv" id ="q_54"><h2>5.4、如何让节点重新进行异步加载？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些朋友可能会迅速想到使用 refresh 方法，这里一定要说明一下，对于很早的版本来说，因为 refresh 是唯一可以更新数据的方法，所以非用不可。但目前来说 refresh 绝对不是值得提倡的方法，尤其是节点数据较多的情况下。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于更新单个节点的显示信息，完全可以使用 updateNode 方法。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于重新异步加载某个父节点的子节点那么请使用 reAsyncChildNodes 方法（同时可以支持 "刷新" 和 "追加" 两种方式）。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;具体功能可以参考 API 文档中 "方法 -- 操作 -- reAsyncChildNodes"</p>