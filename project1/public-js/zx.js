
//����ͨ
var LiveAutoInvite0='���ã�����%IP%������';
var LiveAutoInvite1='������ҳ�ĶԻ�';
var LiveAutoInvite2=' <b>���ã���ӭ�����ɶ��¶������ѧУ��<br><br>�������ѧϰ����κε���������ܴ����룬�Ҷ����������</b>';
var LR_next_invite_seconds = 40; //40����ٴ���ʾ�Զ�����,�������޸�
var LrinviteTimeout = 40;   //40����һ���Զ�����

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