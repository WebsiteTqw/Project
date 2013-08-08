function setLang(lang) {
  $.cookie('lang', escape(lang), {path: '/', domain: i18n_cookie_domain});
  return true;
}
function setCountry(cid) {
  $.cookie('country', escape(cid), {path: '/', domain: i18n_cookie_domain});
  return true;
}

$(function() {
  $("#locationLanguage a.countrySelect").bind('click', function() {
    setCountry(this.title);
    var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.location.href = newURL;
    return false;
  });
  $("#locationLanguage a.langSelect").bind('click', function() {
    setLang(this.id);
    var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.location.href = newURL;
    return false;
  });
  $("#locationChange").bind('click', function() {
    $("div.selectNew.language").hide();
    $("div.selectNew.location").toggle();
    return false;
  });
  $("#languageChange").bind('click', function() {
    $("div.selectNew.location").hide();
    $("div.selectNew.language").toggle();
    return false;
  });
  $("div.selectNew a.close").bind('click', function() {
    $(this).parent().hide();
    return false;
  });
});
