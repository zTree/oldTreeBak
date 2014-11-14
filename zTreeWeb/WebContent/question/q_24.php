<?php?><div class="qDiv" id ="q_24"><h2>2.4、如何将 zTree 的数据提交给 Server 端？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这个问题不是 zTree 需要处理的，因为数据都在那里，你根据自己的需要随意组合参数，提交给 Server 端就是了，就跟 form 表单提交、ajax POST 提交数据一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但考虑到 zTree 的数据还是较麻烦，所以这里讲解一下，另外在 v3.0 改造完毕后，估计会逐渐提供一些工具便于大家自动生成各种格式的数据。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;数据提交的基本方法：拼字符串——这是必须的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别管你是 post 还是 get 方式，反正用了 http 这页面上基本上也就是这两种了，提交的数据也就是 String。剩下的问题无非就是拼什么样的字符串？ xml 还是 json？ 嵌套模式 还是 简单数组模式？ 这个就只能看你的需求，你后台解析数据的方法了。</p>