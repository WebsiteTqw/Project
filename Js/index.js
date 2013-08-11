/*显示登陆框*/
function onPoplogin(){
document.body.style.overflow = 'hidden';
document.body.style.height = document.documentElement.clientHeight + 'px'; 
obj_layer.style.display = 'block';
obj_layer.style.height = document.documentElement.clientHeight + 'px';
obj_reg.style.display = 'block';
}
/*关闭登陆框*/
function closePoplogin(){
document.body.style.overflow = ''; 
obj_layer.style.display = 'none'; 
obj_reg.style.display = 'none';
}
/*一个全局对象*/
var obj_layer = new Object; 
var obj_reg = new Object;

/*获取弹出的登录框*/
function oload(){ 
 obj_layer = document.getElementById('top_fill'); 
 obj_layer.style.display = 'none'; 
 obj_reg = document.getElementById('pop_login');
 obj_reg.style.display = 'none';
} 
