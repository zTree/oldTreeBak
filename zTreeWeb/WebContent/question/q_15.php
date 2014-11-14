<?php?><div class="qDiv" id ="q_15"><h2>1.5、zTree 的 css 冲突了怎么办？</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目前发现有以下几种情况可能会导致 css 冲突：
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（1）某些自定义的样式，产生了冲突
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（2）使用了 jQuery 的 easyUI，产生了冲突
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;产生冲突的原因：
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（1）zTree 的样式不够完善，某些全局的css 定义有可能会影响。
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（2）zTree的主容器的 class 默认定义是 “tree”，这个与 easyUI 里面的样式完全冲突，这种情况下，请将zTree css文件中 tree 改成其他名称即可。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于自定义样式冲突举例如下：</p>
<pre xmlns=""><code><xmp>使用模板页，结构如下：
     <div id="Guide_back">
        <ul>
            <li id="Guide_top">
                <div id="Guide_toptext">
                    <asp:ContentPlaceHolder ID="CphTitle" runat="server">
                    </asp:ContentPlaceHolder>
                </div>
            </li>
            <li id="Guide_main">
                <div id="Guide_box">
                    <div class="zTreeDemoBackground">
                      <ul id="treeDemo" class="tree"></ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
其中模板页定义了样式：
#Guide_back, #Guide_back ul, #Guide_back li
{
    padding: 0px;
    margin: 0px;
    list-style-type: none;
}
这样将影响树型结构显示，没有层次关系了；

解决方法：
在页面定义以下样式：
#treeDemo , #treeDemo ul, #treeDemo li
{
    margin: 0;
    padding: 0 0 0 5px;
    list-style-type: none;
}
</xmp></code></pre>