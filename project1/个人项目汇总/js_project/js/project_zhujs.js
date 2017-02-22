/**
 * Created by thinkpad on 2017/2/13.
 */

window.onload=function () {
  handler();
    aa ();
};
//handler主要控制首页函数初始化
function handler() {
    slide();
    swit();
    picdisplay('caixi');
    picdisplay('section3_remeng');
    totop();
    showmenu();
    writedown()
}
//内容自动切换函数
function aa () {
    //var arr1=['1','2','3','4','5','6','7','8','9'];
    var arr1=[
        '煮水饺时，在水里放一颗大葱或在水开后加点盐，再放饺子，饺子味道鲜美不粘连；在和面时，每 500克面粉加拌一个鸡蛋，饺子皮挺刮不粘连',
        '炖肉时，在锅里加上几块桔皮，可除异味和油腻并增加汤的鲜味；',
        '煮骨头汤时加一小匙醋，可使骨头中的磷、钙溶解于汤中，并可保存汤中的维生素；',
        '煮肉汤或排骨汤时，放入几块新鲜桔皮，不仅味道鲜美，还可减少油腻感',
        '烧豆腐时，加少许豆腐乳或汁，味道芳香；',
        '将绿豆在铁锅中炒10分钟再煮能很快煮烂，但注意不要炒焦',
        '煮蛋时水里加点醋可防蛋壳裂开，事先加点盐也可',
        '煮火腿之前，将火腿皮上涂些白糖，容易煮烂，味道更鲜美',
        '煮水饺时，在锅中加少许食盐，锅开时水也不外溢'
    ];
    var osec=document.getElementById('section2');
    var odd=osec.getElementsByTagName('dd');
    var num=0;
    var timer=setInterval(shiftstuff,5000);
    function shiftstuff() {
        for(var i=0;i<odd.length;i++){
            if(num>=9){
                num=0;
                return;
            }else {
                odd[i].innerHTML=arr1[i+num];
            }
        }
        num=num+3;
    }
    osec.onmouseover=function () {
        clearInterval(timer);
        osec.style.opacity=1;
    };
    osec.onmouseout=function () {
        osec.style.opacity=.8;
        aa();
    }

}
//留言框弹窗函数writedown
function writedown() {
    var oaside=document.getElementById('liuyan');
    var omessagearea=document.getElementById('messagearea');
    var ospan=document.getElementById('messagearea_close');
    var obtn=document.getElementById('btn1');
    var otextarea=document.getElementById('textarea1');
    var icur;
    oaside.onmouseover=function () {
        move(this,{
            left:10
        })
    };
    oaside.onmouseout=function () {
        move(this,{
            left:-20
        })
    };
    oaside.onclick=function () {

        omessagearea.style.display='block';
        changeopacity(omessagearea,{
            opacity:100
        });
        document.body.className='cover';
        //弹窗所在的top值根据下拉条的移动距离生成
        icur= document.body.scrollTop||document.documentElement.scrollTop;
        omessagearea.style.top=icur+100+'px';
    };
    ospan.onclick=function () {
        changeopacity(omessagearea,{
            opacity:0
        },function () {
            this.style.display='none';
        });
        //document.body.removeAttribute('class');
        //判断是否为IE浏览器
        (!!window.ActiveXObject || "ActiveXObject" in window||window.navigator.userAgent.indexOf("MSIE")>=1)?  document.body.className='uncover':document.body.removeAttribute('class');

    };
    obtn.onclick=function () {
        if(otextarea.value!='') {
            //动态创建进度条，以及进度值。
            var odiv1 = document.createElement('div');
            var ospan = document.createElement('span');
            odiv1.id = 'messagearea_odiv';
            //进度条初始长度为0
            odiv1.style.width = '0px';
            omessagearea.appendChild(odiv1);
            omessagearea.appendChild(ospan);
            ospan.innerHTML = (odiv1.offsetWidth.toString());
            move2(odiv1, {
                width: 305
            }, ospan, function () {
                this.style.display = 'none';
                otextarea.value='';
                omessagearea.style.display = 'none';
                ospan.innerHTML = '';
                //如果只写document.body.className = ''则在IE下存在bug。
               /* document.body.className = '';*/
                (!!window.ActiveXObject || "ActiveXObject" in window||window.navigator.userAgent.indexOf("MSIE")>=1)?  document.body.className='uncover':document.body.removeAttribute('class');
               /* if (!!window.ActiveXObject || "ActiveXObject" in window||window.navigator.userAgent.indexOf("MSIE")>=1){
                    document.body.className='uncover';
                }else {
                    document.body.removeAttribute('class');
                }*/
            });
        }else {alert('请输入内容')}
    }
}
//nav菜单控制函数
function showmenu() {
    var omenu=document.getElementById('menu1');
    var oul=omenu.getElementsByTagName('ul')[0];
    var oi=document.getElementById('i_menu');
    var timer=null;
    oi.onmousemove=function () {
        omenu.style.display='block';
    };
    omenu.onmouseover=function () {
        clearTimeout(timer);
        omenu.style.display='block';
    };
    oi.onmouseout=function () {
        close_menu();
    };
    oul.onmouseout=function () {
      close_menu();
    };
    function close_menu() {
        clearTimeout(timer);
        timer=setTimeout(function () {
            omenu.style.display='none';
        },500)
    }
}
//返回顶部函数
function totop() {
    var arrow=document.getElementById('xiangshangjiantou');
    var icur;
    window.onscroll=function () {
        icur= document.body.scrollTop||document.documentElement.scrollTop;
        (icur==0)?arrow.style.display='none':arrow.style.display='block';
       /* if(icur==0){
            arrow.style.display='none';
        }else {
            arrow.style.display='block';
        }*/
    };
    arrow.onclick=function () {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
}
//图片展开函数picdisplay
function picdisplay(id) {
    var odiv=document.getElementById(id);
    var oimg=odiv.getElementsByTagName('img');
    var arr=[];
    var num1=1;

    for(var i=0;i<oimg.length;i++){

        oimg[i].style.left=oimg[i].offsetLeft+'px';
        oimg[i].style.top=oimg[i].offsetTop+'px';
        arr.push({left:oimg[i].offsetLeft,top:oimg[i].offsetTop})

    }
    for(var i=0;i<oimg.length;i++){
        oimg[i].index=i;
        oimg[i].style.position='absolute';
        oimg[i].style.margin='0px';
        oimg[i].onmouseover=function () {
            this.style.zIndex=num1++;
            move(this,{
                width:200,
                height:200,
                left:arr[this.index].left-10,
                top:arr[this.index].top-10
            });
        };
        oimg[i].onmouseout=function () {
            move(this,{
                width:180,
                height:180,
                left:arr[this.index].left,
                top:arr[this.index].top
            });
        }
    }
}
//选项卡函数swit
function swit() {
    var oh3=document.getElementsByTagName('h3');
    var odiv1=document.getElementById('box');
    var odiv2=box.getElementsByTagName('div');
    for (var i=0;i<oh3.length;i++){
        oh3[i].index=i;
        oh3[i].onclick=function () {
            for (var i=0;i<oh3.length;i++){
            oh3[i].className='';
            odiv2[i].style.display='none'
            }
            this.className='active2';
            odiv2[this.index].style.display='block'
        }
    }
}
//slide为轮播图函数
function slide() {
    var odiv=document.getElementById('section1');
    var oul=odiv.getElementsByTagName('ul')[0];
    var ospan=odiv.getElementsByTagName('span');
    var onext=document.getElementById('next');
    var opre=document.getElementById('prev');
    var num=0;
    var timer;

    for(var i=0;i<ospan.length;i++) {
        //给小开关设置自定义属性index
        ospan[i].index = i;
        //点击小开关后，调用move函数，改变ul的left，实现图片切换
        ospan[i].onclick = b;
        function b () {
            for(var i=0;i<ospan.length;i++){
                ospan[i].className='';
            }
            ospan[this.index].className='active';
            move(oul,{
                left:-this.index*800
            });
            num=this.index;
        }
    }
    onext.onclick=function () {
        //在图片移动完毕后点击才有效
        if(oul.offsetLeft%800) return false;
        if(oul.offsetLeft<=-2400){
            move(oul,{
                left:0
            });
        }else {
            move(oul,{
                left:oul.offsetLeft-800
            });
        }
        num++;
        if(num==4){
            num=0;
            showbutton();
        }else {
            showbutton();
        }
    };
    opre.onclick=function () {
        if(oul.offsetLeft%800) return false;
        if(oul.offsetLeft>=0){
            move(oul,{
                left:-2400
            });
        }else {
            move(oul,{
                left:oul.offsetLeft+800
            });
        }
        num--;
        if(num<0){
            num=3;
            showbutton();
        }else {
            showbutton();
        }
    };
    function showbutton() {
        for(var i=0;i<ospan.length;i++){
            ospan[i].className='';
        }
        ospan[num].className='active';
    }
    function play() {
        timer=setInterval(function () {
            onext.onclick();
        },3000)
    }
    play();
    function stop() {
        clearInterval(timer);
    }
    odiv.onmouseout=function () {
        onext.style.display='none';
        opre.style.display='none';
        play();
    };
    odiv.onmouseover=function(){
        onext.style.display='block';
        opre.style.display='block';
        stop();
    }

}
//带进度条的运动函数
function move2(obj,json,x,fn) {
    var icur=0;
    var ispeed=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        //设置开关，运动过程中未false
        var btn=true;
        for(var attr in json){
            var itarget=json[attr];
            icur=parseInt(getstyle(obj,attr));
            ispeed=(itarget-icur)/5;
            ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
            if(icur!=itarget){
                btn=false;
                obj.style[attr]=icur+ispeed+'px';
                x.innerHTML=parseInt((1-(((304-icur)/305)))*100)+'%';
            }
        }
        if(btn){
            clearInterval(obj.timer);
            fn&&fn.call(obj);
        }
    },50)
}
//运动控制函数，可以传入json
function move(obj,json,fn) {
    var icur=0;
    var ispeed=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var btn=true;
        for(var attr in json){
            var itarget=json[attr];
            icur=parseInt(getstyle(obj,attr));
            ispeed=(itarget-icur)/5;
            ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
            if(icur!=itarget){
                btn=false;
                obj.style[attr]=icur+ispeed+'px';
            }
        }
        if(btn){
            clearInterval(obj.timer);
            fn&&fn.call(obj);
        }
    },50)
}
//透明度改变函数
function changeopacity(obj,json,fn) {
    var ospeed=0;
    var cur=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var ibtn=true;
        for(var attr in json){
            var target=json[attr];
            cur=getstyle(obj,'opacity')*100;
            ospeed=(target-cur)/9;
            ospeed=ospeed>0?Math.ceil(ospeed):Math.floor(ospeed);
            if(cur!=target){
                ibtn=false;
                obj.style[attr]=(cur+ospeed)/100;
            }
        }
        if(ibtn){
            clearInterval(obj.timer);
            fn&&fn.call(obj);
        }
    },50)

}
//获取属性函数
function getstyle(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}