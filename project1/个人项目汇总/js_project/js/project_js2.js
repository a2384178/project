
window.onload=function () {
    con_change();
    addcomment();
    totop();
    formcheck();

};

function totop() {
    var arrow=document.getElementById('xiangshangjiantou');
    var icur;
    window.onscroll=function () {
        icur= document.body.scrollTop||document.documentElement.scrollTop;
        if(icur==0){
            arrow.style.display='none';
        }else {
            arrow.style.display='block';
        }
    };
    arrow.onclick=function () {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
}
//动态添加留言函数
function addcomment() {
    var obtn1=document.getElementById('tucao_btn');
    var otext1=document.getElementById('tucao_neirong');
    var odl=document.getElementById('add_dl');

//点击后动态生成留言以及发表留言的时间
    obtn1.onclick=function () {

        var time=new Date();
        var str='';
        var iyear=time.getFullYear();
        var imonth=time.getMonth()+1;
        var idate=time.getDate();
        var ihour=time.getHours();
        var iminute=time.getMinutes();
        var isec=time.getSeconds();

        str=iyear+'-'+imonth+'-'+idate+'  '+totwo(ihour)+':'+totwo(iminute)+':'+totwo(isec);

        //alert(iyear)
        var tempt=otext1.value;
        otext1.value='';
        //alert(1);
        var odt=document.createElement('dt');
        var odd=document.createElement('dd');
        var op=document.createElement('p');
        odt.className="dt_float";
        odd.className="clearfix";
        op.className='add_p';
        op.innerHTML=str;
        odd.className+=" "+'tucao_dd';
        odt.innerHTML='<img src="img/头像.png"><span class="add_span">'+'游客'+'</span>';
        odd.innerHTML=tempt;
        odl.appendChild(odt);
        odl.appendChild(odd);
        odd.appendChild(op);
//日期格式转换函数，将10以内的数字前面加0；
        function totwo(n) {
            return n<10?'0'+n:''+n;
        }

    }
}
//nav切换菜单
function con_change() {
    var oul4=document.getElementById('contact_navul');
    var oli=oul4.getElementsByTagName('li');
    for(var i=0;i<oli.length;i++){
        oli[i].onmousemove=function () {
            for(var i=0;i<oli.length;i++){
                oli[i].className='';
            }
            this.className='active';
        }
    }
}
//表单验证函数
function formcheck() {
    var oname=document.getElementById('name');
    var oemail=document.getElementById('email');
    var odiv1=document.getElementById('div1');
    var odiv2=document.getElementById('div2');
    var temp;
    oname.onblur=function(){
        checkname(this)
    };
    oname.onfocus=function(){
        reset(this,odiv1)
    };
    oemail.onblur=function () {
        checkmail(this)
    };
    oemail.onfocus=function(){
        reset(this,odiv2)
    };
    //验证名字函数
    function checkname (obj) {
        temp = obj.value;
        //正则匹配输入内容只能为中文或者英文
        var re = /^[a-zA-Z\u4e00-\u9fa5]+$/;
        if (!re.test(temp)) {
            obj.style.borderColor = 'red';
            appennode(odiv1);
        }
    }
    //验证邮箱函数
    function checkmail(obj) {
        temp=obj.value;
        var re=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
        if(!re.test(temp)){
            obj.style.borderColor='red';
            appennode(odiv2);
        }
    }
//传入的参数为要添加节点的父级
    function appennode(obj) {
        var osp=document.createElement('span');
        osp.innerHTML='请重新输入';
        osp.style.color='red';
        osp.style.marginLeft='20px';
        obj.appendChild(osp);
    }
    //第一个参数a为当前触发事件的input对象，第二个参数为动态添加对象的父级；
    function reset(a,b) {
        var osp=b.getElementsByTagName('span')[0];
        b.removeChild(osp);
        a.style.borderColor='';
    }
}



/**
 * Created by thinkpad on 2017/2/14.
 */
