/*��ʾ��½��*/
function onPoplogin(){
document.body.style.overflow = 'hidden';
document.body.style.height = document.documentElement.clientHeight + 'px'; 
obj_layer.style.display = 'block';
obj_layer.style.height = document.documentElement.clientHeight + 'px';
obj_reg.style.display = 'block';
}
/*�رյ�½��*/
function closePoplogin(){
document.body.style.overflow = ''; 
obj_layer.style.display = 'none'; 
obj_reg.style.display = 'none';
}
/*һ��ȫ�ֶ���*/
var obj_layer = new Object; 
var obj_reg = new Object;

/*��ȡ�����ĵ�¼��*/
function oload(){ 
 obj_layer = document.getElementById('top_fill'); 
 obj_layer.style.display = 'none'; 
 obj_reg = document.getElementById('pop_login');
 obj_reg.style.display = 'none';
} 
