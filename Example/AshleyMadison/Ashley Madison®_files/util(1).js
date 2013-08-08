

var dyn = (document.all || document.layers || document.getElementById) ? true : false;

var ie = (navigator.appName.indexOf('Microsoft') != -1) ? true : false;
var ie4 = (ie && document.all && !document.getElementById) ? true : false;
var ie5 = (ie && document.getElementById) ? true : false;
var ie4Min = (ie && (document.all || document.getElementById)) ? true : false;
var ie5Min = (ie && document.getElementById) ? true : false;

var ns = (navigator.appName.indexOf('Netscape') != -1) ? true : false;
var ns4 = (ns && document.layers) ? true : false;
var ns6 = (ns && document.getElementById) ? true : false;
var ns4Min = (ns && (document.layers || document.getElementById)) ? true : false;
var ns6Min = (ns && document.getElementById) ? true : false;





function scd_openWindow(type,url) {

	if(type=='transaction/visitor/payment') {
		openWindow(url,'win_transaction_visitor_payment','c','c',550,500,'toolbar=no,location=no,directories=no,status=yes,resizable=yes,scrollbars=yes,menubar=no,statusbar=yes');
	}

}
								




function openWindow(url,name,x,y,width,height,args,xo,yo) {

	if(args!="") args += ",";

	args += "width="+width+",";	
	args += "height="+height+",";

	if(x=="c") x = (getScreenWidth()-width)/2;
	if(x=="tl") x = getWinX()+xo;
	if(x!="") args += "left="+x+",screenX="+x+",";

	if(y=="c") y = (getScreenHeight()-height)/2;
	if(y=="tl") y = getWinY()+yo;
	if(y!="") args += "top="+y+",screenY="+y+",";
	
	win = open(url,name,args);
	win.focus();
}

function closeWindow() {
	window.close();
}


var oldImages = new Array(100);
var overImages = new Array(100);


function loadOverImage(name,imgpath) {

	var img = new Image();
	img.src = imgpath;

	overImages[name] = img;
}

function setOverImage(name,message,imgname) {
	setStatus(message);
	
	if(!imgname) imgname = name;
	
  if((ie4Min || ns4Min) && overImages[imgname] && document.images[name]) {
		
		if(overImages[imgname].src!=document.images[name].src) oldImages[name] = document.images[name].src;
		
		document.images[name].src = overImages[imgname].src;
  }
}

function setNormalImage(name) {

  if((ie4Min || ns4Min) && oldImages[name] && document.images[name]) {
		document.images[name].src = oldImages[name];
	}
	
	return true;
}


var statusbarFrame;

function setStatus(message) {
	if(!message) {
		window.status = '';
	} else {
		window.status = message;
	}
	return true;
}

function getScreenHeight() {
   if (ie4Min) return screen.height;
   else if (ns4Min) return screen.height;
}

function getScreenWidth() {
   if (ie4Min) return screen.width;
   else if (ns4Min) return screen.width;
}



function getWinHeight() {
   if (ie4Min) return document.body.clientHeight;
   else if (ns4Min) return window.innerHeight;
}

function getWinWidth() {
   if (ie4Min) return document.body.clientWidth;
   else if (ns4Min) return window.innerWidth;
}

function getWinX() {
   if (ie4Min) return window.screenLeft;
   else if (ns4Min) return window.screenX;
}

function getWinY() {
   if (ie4Min) return window.screenTop;
   else if (ns4Min) return window.screenY;
}



