
//商务通
var LiveAutoInvite0='您好，来自%IP%的朋友';
var LiveAutoInvite1='来自首页的对话';
var LiveAutoInvite2=' <b>您好，欢迎来到成都新东方烹饪学校！<br><br>如果您有学习相关任何的需求，请接受此邀请，我都会帮你解决！</b>';
var LR_next_invite_seconds = 40; //40秒后再次显示自动邀请,可自行修改
var LrinviteTimeout = 40;   //40秒后第一次自动弹出

$(document).ready(function(){
	$('.online').click(function(){
		var http=new XMLHttpRequest;   
		http.open("HEAD", ".", false);   
		http.send(null);   
		d=new Date(http.getResponseHeader("Date"));
		hours=d.getHours();
		min=d.getMinutes()/60;
		mins=parseFloat(min.toFixed(2)); 
		times=hours+mins;
		wjzx="http://m.scxdf.com/wjzx/wjzn.html";
		if(times>=8&&times<=23.17)
		{
			LR_HideInvite(); _hmt.push(['_trackPageview', '/onlineweb.html']); openZoosUrl('chatwin'); return false;
		}else{
			window.open(wjzx,"_blank");
		};
	});
});