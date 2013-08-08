
// Start Page Ready Items
$(document).ready(function () {
	
	$('.jtooltip').each(function(){
	 	$(this).tooltip({ 
	    track: true, 
	    delay: 0, 
	    showURL: false, 
	    showBody: " :: ", 
	    extraClass: "pretty", 
	    fixPNG: true, 
	    opacity: 0.99, 
	    left: 5, 
		top: -15
		});
	 });
	 
	$('.jtooltipLite').each(function(){
	 	$(this).tooltip({ 
	    track: true, 
	    delay: 0, 
	    showURL: false, 
	    showBody: " :: ", 
	    opacity: 0.99
		});
	 });
	
});