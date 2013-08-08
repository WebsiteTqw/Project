// Page Load Functions
function regPageOnload(){

	hiliteInputs(); // Start Highlight Event Listener
	
	//focus the username
	if (typeof(pUsername) != "undefined") {
		if (document.getElementById(pUsername)) {
			document.getElementById(pUsername).focus();
		}
	}
	
	errorArrayDisplay(); // Display errors if any
}

// Set Tags to highlite
 function hiliteInputs() {
		addHiliteEvents("input"); // Attach events to inputs
		addHiliteEvents("select"); // Attach events to selects
 };
 
 // Hightlight element on focus -- Use "Hilite" and or Focus in classname
 function addHiliteEvents(type){
 	if (navigator.userAgent.indexOf("MSIE") == -1) {
		var inputs = document.getElementsByTagName(type);
		for (var i = 0; i < inputs.length; i++) { // Start Object Search Loop
			if (inputs[i].className.indexOf("Hilite") != -1) { // Check for classname objects
				inputs[i].onfocus = function(){ // Set Focus Class Change
					if (this.className.indexOf("Focus") == -1) {
						this.className = String(this.className) + "Focus";
					}
				};
				inputs[i].onblur = function(){ // Set Blur Class Change
					if (this.className.indexOf("Focus") != -1) {
						this.className = String(this.className).replace("Focus", "");
					}
				};
			} // End classname objects
		} // End Object Search Loop
	}
 };

 
 function errorArrayDisplay(){
 	if (typeof(errorsArray) != "undefined") { // Check for errors
		for (i in errorsArray) { 
			var tempObjIdStr = "errorMsg_" + String(i);
			if (document.getElementById(tempObjIdStr)) {
				document.getElementById(tempObjIdStr).innerHTML = String(errorsArray[i]);
			}
		};
		var tempObjIdStr = "errorsNotification";
		if (document.getElementById(tempObjIdStr)) {
			document.getElementById(tempObjIdStr).innerHTML = getLang("Please correct the errors below to continue.");
		}
	}
 };

 
 function ajaxFunctionCall(pURL){
	
	var page_request = false
	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject){ // if IE
		try {
			page_request = new ActiveXObject("Msxml2.XMLHTTP")
		} 
		catch (e){
		try{
			page_request = new ActiveXObject("Microsoft.XMLHTTP")
		}
		catch (e){}
		}
	}
	else
		return false
	
	page_request.onreadystatechange=function(){
		evalfunctionInvoker(page_request)
	}

	page_request.open('GET', pURL, true)
	page_request.send(null)
}

function evalfunctionInvoker(page_request){
	if (page_request.readyState == 4 && (page_request.status == 200 || window.location.href.indexOf("http") == -1)) {
		eval(page_request.responseText);
	}
}

function setSelectedIndexByValue(objName, pValue){
	var tempObj = document.getElementById(objName);
	for (var i=0; i < tempObj.length; i++) {
	   var val = String(tempObj[i].value);
	   if (val == pValue) {
	 	tempObj.selectedIndex = i;
	  }
	};
};
