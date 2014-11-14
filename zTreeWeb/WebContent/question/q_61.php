<?php?><div class="qDiv" id ="q_61"><h2>6.1、事件回调函数的关系</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到 zTree 的事件回调函数，不得不检讨一下，目前的 事件回调机制 有点儿混乱，绝大部分只能是用户在界面上操作 zTree 时才能出发，如果用 js 操作 zTree 是无法触发的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在 v3.0 中针对这方面的结构一定会慎重考虑并进行调整的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了便于大家了解，下面专门介绍一下目前的事件回调函数之间的关系吧：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) before 关键字</p>
<pre xmlns=""><code><xmp>相信大部分朋友看了名字就应该知道这其中的关系了，
例如：beforeClick 和 click 他们肯定是一对儿，肯定是 beforeClick 先触发</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(2) confirm 关键字</p>
<pre xmlns=""><code><xmp>这个也很明显，用 confirm 开头的事件是需要让用户进行确认 </xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(3) 界面操作 和 js 接口操作时都可以触发的事件回调函数</p>
<pre xmlns=""><code><xmp>beforeAsync / asyncSuccess / asyncError;  confirmRename</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(4) js 接口操作时无法触发的事件回调函数</p>
<pre xmlns=""><code><xmp>beforeChange / change;  beforeClick / click;  beforeCollapse / collapse;
beforeDblclick / dblclick;  beforeDrag / drag;  beforeDrop / drop;  beforeExpand / expand;
beforeMouseDown / mouseDown;  beforeMouseUp / mouseUp;
beforeRemove / remove; beforeRename / rename; beforeRightClick / rightClick
confirmDragOpen</xmp></code></pre>