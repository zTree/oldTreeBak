<?php?><div class="qDiv" id ="q_56"><h2>5.6、如何异步加载全部节点？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很遗憾，目前 zTree 并没有提供一个自动逐步异步加载全部节点的功能。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要想实现此功能，可以有以下几种思路：（具体请根据自己的需求来选择）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) 节点不多的情况下，利用简单数据模式，在 Server 端一次性生成全部节点的数据。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(2) 自行编写 ajax 方法，每次加载完毕后，利用 addNodes 方法将子节点添加到 zTree 内部，然后根据子节点情况继续进行 ajax 加载。</p>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addNodes 方法可以设置 isSilent 参数，保证异步加载尽量不影响已展示的内容。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(3) 遍历已加载的节点，利用 reAsyncChildNodes 方法进行异步加载。</p>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对比方法(2)，这个方法有明显的不足，因为 zTree 对于自己的异步加载会强行展开父节点，所以此方法会导致加载的父节点都处于展开状态。</p>