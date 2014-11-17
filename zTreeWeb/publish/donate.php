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
						<tr>
							<td style="text-align:center;">
								<?php echo $donate_alipay_account ?>
								<br/><br/>
								<img src="img/alipayPage_2D.png">

							</td>
							<td style="text-align:center;">
								<?php echo $donate_paypal_account ?>
								<br/><br/>
								<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
								<input type="hidden" name="cmd" value="_s-xclick">
								<input type="hidden" name="encrypted" value="<?php echo $donate_paypal_encrypted ?>">
								<input type="image" src="/v3/img/paypalPage_<?php echo $lang ?>.png" border="0" name="submit" alt="PayPal——最安全便捷的在线支付方式！">
								<img alt="" border="0" src="https://www.paypalobjects.com/zh_XC/i/scr/pixel.gif" width="1" height="1">
								</form>
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