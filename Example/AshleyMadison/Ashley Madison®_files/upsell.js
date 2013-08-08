function checkUpsell(modal_url)
{
  jQuery.get(('/app/private/member/payment/upsell/upselllookup.p'), function(result){
    if(result == 1){
      jQuery.ashleymodal.show({
        url: modal_url,
        height: 325,
        width: 660,
        borderradius: 10
      });
    
      jQuery('.headerBanner', window.parent.frames['headerchat'].document).hide();
      jQuery('.flashbanner', window.parent.frames['headerchat'].document).hide();
      //firefox DOES NOT LIKE .show() when css has display as none!  
      jQuery('#bonus_credits_header', window.parent.frames['headerchat'].document).css('display','block');
      window.parent.frames['headerchat'].init_timer();
    }

  });
}


var minutes;
var seconds;
var credits;
var percent;

function show_upsell(){
  window.parent.frames['main'].showUpSell();
}

function init_timer(){
  minutes = 10;
  seconds = 0;
  credits = 1000;
  percent = 100;
  upsell_timer();
}

function upsell_timer(){
  seconds--;
  if(seconds == -1){
    seconds = 59;
    minutes--;
    jQuery('#ashley-modal iframe', top.frames['main'].document).contents().find('.time_left').text(minutes+1);
  }
  
  if(minutes % 2 == 0 && seconds == 0){
    credits-=100;
    percent-=10;
    //mini
    jQuery('#upsell_credits').text(credits);
    jQuery('#upsell_percent').text(percent+"%");
    //modal
    jQuery('#ashley-modal iframe', top.frames['main'].document).contents().find('#ultimate-package .bc').text(credits);
    jQuery('#ashley-modal iframe', top.frames['main'].document).contents().find('.elitePackage .bc').text(credits-500);
    jQuery('#ashley-modal iframe', top.frames['main'].document).contents().find('#ultimate-package .valueOp2').text(1000+credits);
    jQuery('#ashley-modal iframe', top.frames['main'].document).contents().find('.elitePackage .valueOp2').text(credits);
  }

  if(seconds <= 9)
    dis_seconds = "0"+seconds;
  else
    dis_seconds = seconds;
  
  if(minutes == 0 && seconds == 0){
    jQuery('.headerBanner').show();
    jQuery('#bonus_credits_header').hide();
    //modal
    top.frames['main'].document.getElementById('ashley-modal').firstChild.contentWindow.hideModal();
    return;
  }

  //6 minutes mark = yellow
  if(minutes==6 && seconds ==0)
    jQuery('#bonus_credits_interior').attr('class','bonus_yellow');

  //2 minutes mark = red
  if(minutes==2 && seconds ==0)
    jQuery('#bonus_credits_interior').attr('class','bonus_red');

  jQuery('#upsell_timer').text(minutes+":"+dis_seconds);
  setTimeout("upsell_timer()",1000);
}

function getBonus(){
}
