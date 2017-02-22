/**
 * Created by thinkpad on 2017/2/9.
 */
function move(obj,json,fn) {
    var ispeed=0;
    clearInterval(obj.timer);
    var icur=0;
    obj.timer=setInterval(function () {
        var ibtn=true;
        for(var attr in json){
            var itarget=json[attr];
            if(attr=='opacity'){
                icur=getstyle(obj,'opacity')*100;
            }else{
                icur=parseInt(getstyle(obj,attr));
            }
            ispeed=(itarget-icur)/6;
            ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);

            if(icur!=itarget){
                ibtn=false;

                if(attr=='opacity'){
                    obj.style.opacity=(icur+ispeed)/100;
                    obj.style.filter='alpha(opacity='+(icur+ispeed)+')';

                }else {
                    obj.style[attr]=icur+ispeed+'px';
                }
            }
        }
        //着这里判断所有属性是否到目标点。
        if(ibtn){
            clearInterval(obj.timer);
            fn&&fn.call(obj);
        }
    },50)
}
function getstyle(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}