//lazy load
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
//meau
function show(){
	var omenu_body=document.getElementById("menu_body");
	if(omenu_body.style.display=="none"){
		omenu_body.style.display="block";
		}
		else{
			omenu_body.style.display="none";
			}
	}
//input Verification
$(function(){
	var xOffset = -20; // x distance from mouse
    var yOffset = 20; // y distance from mouse  
	
	//input tips
	$("[reg],[url]:not([reg])").hover(
		function(e) {
			if($(this).attr('tip') != undefined){
				var top = (e.pageY + yOffset);
				var left = (e.pageX + xOffset);
				$('body').append( '<p id="vtip"><img id="vtipArrow" src="/images/vtip_arrow.png"/>' + $(this).attr('tip') + '</p>' );
				$('p#vtip').css("top", top+"px").css("left", left+"px");
			}
		},
		function() {
			if($(this).attr('tip') != undefined){
				$("p#vtip").remove();
			}
		}
	).mousemove(
		function(e) {
			if($(this).attr('tip') != undefined){
				var top = (e.pageY + yOffset);
				var left = (e.pageX + xOffset);
				$("p#vtip").css("top", top+"px").css("left", left+"px");
			}
		}
	).blur(function(){
		if($(this).attr("reg") == undefined){
			ajax_validate($(this),this.tagName);
		}else{
			validate($(this),this.tagName);
		}
	});
	
	$("form").submit(function(){
		var isSubmit = true;
		$(this).find("[reg],[url]:not([reg])").each(function(){
			if($(this).attr("reg") == undefined){
				if(!ajax_validate($(this),this.tagName)){
					isSubmit = false;
				}
			}else{
				if(!validate($(this),this.tagName)){
					isSubmit = false;
				}
			}
		});
		return isSubmit;
	});
	
});

function validate(obj,tagName){
	var reg = new RegExp(obj.attr("reg"));
	var objValue = obj.attr("value");
	if(!reg.test(objValue)){
		change_error_style(obj,tagName,"add");
		if(obj.attr("is_tip_null") == "yes"){
			obj.removeAttr("tip");
			obj.removeAttr("tip_bak");
		}else{
			obj.attr("tip",obj.attr("tip_bak"));
			obj.removeAttr("tip_bak");
		}
		return false;
	}else{
		if(obj.attr("url") == undefined){
			obj.attr("tip",obj.attr("tip_bak"));
			obj.removeAttr("tip_bak");
			change_error_style(obj,tagName,"remove");
			return true;
		}else{
			return ajax_validate(obj);
		}
	}
}

function ajax_validate(obj,tagName){
	if(obj.attr("tip") == undefined){
		obj.attr("is_tip_null","yes");
	}
	var url_str = obj.attr("url");
	if(url_str.indexOf("?") != -1){
		url_str = url_str+"&"+obj.attr("name")+"="+obj.attr("value");
	}else{
		url_str = url_str+"?"+obj.attr("name")+"="+obj.attr("value");
	}
	var feed_back = $.ajax({url: url_str,cache: false,async: false}).responseText;
	feed_back = feed_back.replace(/(^\s*)|(\s*$)/g, "");
	if(feed_back == 'success'){
		change_error_style(obj,tagName,"remove");
		if(obj.attr("is_tip_null") == "yes"){
			obj.removeAttr("tip");
			obj.removeAttr("tip_bak");
		}else{
			obj.attr("tip",obj.attr("tip_bak"));
			obj.removeAttr("tip_bak");
		}
		return true;
	}else{
		change_error_style(obj,tagName,"add");
		if(obj.attr("tip_bak") == undefined){
			obj.attr("tip_bak",obj.attr("tip"));
			obj.attr("tip",feed_back);
		}
		return false;
	}
}

function change_error_style(obj,tagName,action_type){
	if(action_type == "add"){
		if(tagName == "SELECT"){
			obj.addClass("select_validation-failed");
		}else{
			obj.addClass("input_validation-failed");
		}
	}else{
		if(tagName == "SELECT"){
			obj.removeClass("select_validation-failed");
		}else{
			obj.removeClass("input_validation-failed");
		}
	}
}
//back top
$(function(){
	    var offset = 200,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

//zdts
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


//表单时间获取

function current(){ 
var d=new Date();
str=''; 
str +=d.getFullYear()+'/'; 
str +=d.getMonth()+1+'/'; 
str +=d.getDate()+' '; 
str+=d.getHours()+':';
str+=d.getMinutes()+'';
return str; }  
 
$(function(){
var $timeStr=current();
$("#nowTime").val($timeStr) ;
});

//手机摇一摇

if (window.DeviceMotionEvent) {
    var speed = 22;  //摇一摇程序，建议值在20-25之间；
    var x = y = z = lastX = lastY = lastZ = 0;  //默认值
    window.addEventListener('devicemotion', function() {
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
            window.location.href = 'http://m.scxdf.com/telweb.html' 
        }
        lastX = x;
        lastY = y
    }, false)
}





