<?php?><div class="qDiv" id ="q_23"><h2>2.3、zTree 的节点数据说明</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;zTree 的节点就是标准的 JSON 数据对象，使用方法跟正常的 JSON 对象操作一样。例如：</p>
<pre xmlns=""><code><xmp>假设 zTreeNode 就是操作中得到的某个节点数据
  获取 tId：zTreeNode.tId
  获取 父节点： zTreeNode.parentNode
  获取其他自定义的属性： zTreeNode.name, zTreeNode.id ....
</xmp></code></pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了上面的例子就明白了吧，其实很容易，但是有以下几点需要注意：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(1) 自定义的属性请勿与 zTree 使用的属性冲突，这一点请参考 API 文档中“参数说明 -- zTreeNodes 详解”下的各个属性说明。</p>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(2) checked、name、nodes 这三个属性后台无法自动生成，因为有冲突怎么办？</p>
<pre xmlns=""><code><xmp>不用担心，setting 中有 checkedCol、nameCol、nodesCol 这三个属性，你可以根据自己的情况更换这几个默认属性</xmp></code></pre>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;(3) 遍历数据小心死循环！</p>
<pre xmlns=""><code><xmp>parentNode 是节点的父节点数据的引用，默认的 nodes 是子节点的数据引用。
也正是这两个原因导致简单的属性遍历的代码会陷入死循环，例如标准的 clone 方法。
因此需要 clone 或者属性遍历时，请参考 zTree 代码中的 tools.clone 方法。</xmp></code></pre>