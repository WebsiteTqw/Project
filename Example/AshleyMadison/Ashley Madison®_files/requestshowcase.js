jQuery( function () {
  jQuery('.request_showcase').on('click', function (e) {
    e.preventDefault();
    var pnum = jQuery(this).attr('data-p');
    requestShowcase(pnum);
  });
});
function requestShowcase(pnum) {
  jQuery.ajax({
    url: "/app/private/member/showcaseajax.p",
    type: "post",
    data: "pnum=" + pnum,
    dataType: 'json',
    success: function(data){
      switch (data.action) {
        case 'showModal':
          jQuery.ashleymodal.show({
            url: data.url,
            height: 250,
            width: 400,
            borderradius: 2
          });
          break;
        case 'redirect':
        case 'request':
          top.frames.main.location = data.url;
          break;
      }
    }
  });
}
