
window.onload=function () {
    con_change();
    formcheck();

};

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
