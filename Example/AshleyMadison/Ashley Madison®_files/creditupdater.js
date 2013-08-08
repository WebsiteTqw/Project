function refresh_credits()
{
  jQuery.get(jQuery('#current-credits').attr('updateurl'), function(result){
    if (/^\d+$/.test(result))
    {
      var old_value = jQuery('#current-credits').text();
      if ((result > 0 && old_value == 0) || (old_value > 0 && result == 0)) location.reload(true);
      jQuery('#current-credits').text(result);
    }
  });
}

function refresh_credits_timeout()
{
  setTimeout('refresh_credits()',10000);
}
