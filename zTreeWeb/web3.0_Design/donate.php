<?php
include( "head.php")
?>
<div id="content_wrap" class="content_wrap">
    <div id="content" class="content">
		<div class="nav_section">
		</div>

		<div class="siteTag tag_donate" alt=""></div>

		<div id="contentBox" class="contentBox round clearfix">
			<div id="donateInfo" class="donateInfo">
				<div class="title">
					<h1 ><?php echo $donate_title ?></h1>
					<p ><?php echo $donate_content ?></p>
					<table style="width:100%;">
						<tbody>
						<tr style="height:100px">
							<td style="width:50%;text-align:center;"><img src="img/alipayLogo.png"></td>
							<td style="width:50%;text-align:center;"><img src="img/paypalLogo.png"></td>
						</tr>
						<tr style="height:300px">
							<td style="text-align:center;">
								<br/>
								<img src="img/alipayPage_2D.png?001" width="200px" height="200px">

							</td>
							<td style="text-align:center;">
								<br/>
								<a href="https://www.paypal.me/ztree" target="_blank">
								    <img alt="" border="0" src="img/paypalPage_<?php echo $lang ?>.png" >
								</a>
							</td>
						</tr>
						<tr>
							<td style="height:50px" colspan="20">&nbsp;</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
		<div class="clear"></div>
    </div>
</div>
<?php
include( "foot.php")
?>