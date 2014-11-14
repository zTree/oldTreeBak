<?php?><div class="qDiv" id ="q_11"><h2>1.1、怎么生成一棵自己的 zTree？（最简入门）</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次用 zTree 吗？ 刚开始学 javascript 吗？ 赶紧上手吧，这是一个最简单最基础的实现 zTree 的教程。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;步骤如下：
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（1）下载 zTree 的 zip 文件， 解压后进入 demo 目录
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（2）把 jquery-1.4.2.js 和 jquery.ztree-2.6.js 这两个js 复制到发布目录下
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（3）把 zTreeStyle 和 demoStyle 两个目录也复制到发布目录下
<br/>&nbsp;&nbsp;&nbsp;&nbsp;（4）用以下代码在发布目录下建立一个 zTree.html 的文件，然后看看效果吧
</p>
<p class="alt">&nbsp;&nbsp;&nbsp;&nbsp;请务必注意加载 css、js文件时的相对路径，保证这些文件都能正常加载</p>
<pre xmlns=""><code><xmp><!DOCTYPE html>
<HTML>
 <HEAD>
  <TITLE> ZTREE DEMO </TITLE>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="demoStyle/demo.css" type="text/css">
  <link rel="stylesheet" href="zTreeStyle/zTreeStyle.css" type="text/css">
  <script type="text/javascript" src="jquery-1.4.2.js"></script>
  <script type="text/javascript" src="jquery.ztree-2.6.js"></script>
  <SCRIPT LANGUAGE="JavaScript">
	var zTreeObj;
	var setting = {}; //zTree的参数配置，深入使用请参考 API 文档（参数说明 -- setting 详解）
	var zNodes = [
	{name:"test1", open:true, nodes:[
		{name:"test1_1"}, {name:"test1_2"}]},
	{name:"test2", open:true, nodes:[
		{name:"test2_1"}, {name:"test2_2"}]}
	]; //zTree的数据属性，深入使用请参考 API 文档（参数说明 -- zTreeNodes 详解）
	$(document).ready(function(){
		zTreeObj = $("#treeDemo").zTree(setting, zNodes);
	});
  </SCRIPT>
 </HEAD>
<BODY>
<div class="zTreeDemoBackground">
	<ul id="treeDemo" class="tree"></ul>
</div>
 </BODY>
</HTML>
</xmp></code></pre>