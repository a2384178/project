/**
 * Created by thinkpad on 2017/2/9.
 */
function move2(obj,json,fn) {
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
            ispeed=10;
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
    },30)
}
//抖动函数
function shake(obj,attr,endfun) {
    var pos=parseInt(getstyle(obj,attr));
    var arr=[];
    var num=0;
    //把弹起的距离放入数组
    for(var i=10;i>0;i-=2){
        arr.push(i,0)
    }
    arr.push(0);
    clearInterval(obj.shaketimer);
    obj.shaketimer=setInterval(function () {
        obj.style[attr]=pos+arr[num]+'px';
        num++;
        if(num===arr.length){
            clearInterval(obj.shaketimer);
            endfun&&endfun();
        }
    },90)
}
function getstyle(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}