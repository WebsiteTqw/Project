/**
 * Requires:
 * jqModal.js
 * jqModal.css
 * quickbuy-modal.css // @TODO: move this to a more generic modal css file (possibly ashley-modal.css and move jqModal.css contents to this)
 */
(function($){
  // set to true for debug mode
  var _debug = true;

  var _id = 'ashley-modal';

  $.ashleymodal = {
    opts: {
      url: '',
      height: '',
      width: '',
      borderradius: '',
      margin: ''
    },
    show: function(o){
      $.extend(this.opts, o);
      showModal(this.opts);
      return this;
    },
    hide: function(){
      hideModal();
      if (typeof(refreshCredits) == 'function') refreshCredits();
      return this;
    },
    resize: function(o){
      if (typeof(o) == 'object') {
        var options = [ 'height', 'width' ];
        var params = {};
        for (i in options) {
          if (!isNaN(parseInt(o[options[i]]))) {
            params[options[i]] = o[options[i]];
          }
        }
        $.extend(this.opts, params);
      }
      
      setModalSize(this.opts);

      return this;
    }
  };

  function showModal(o){
    if ($('#' + _id).length > 0){
      hideModal();
      $('#' + _id).remove();
    }
    // frameBorder = 0 is for IE since setting the css border to 0 doesn't work
    $('body').append('<div id="' + _id + '"><iframe src="' + o.url + '" scrolling="no" frameBorder="0"></iframe></div>');

    setModalSize(o);

    $('#' + _id).jqm({
      ajax: o.url,
      target: '#' + _id + ' iframe',
      modal: true
    }).jqmShow();
  }

  // Hide the modal without triggering stuff
  function hideModal(){
    $('#' + _id).jqm({
      onHide: function(hash){
        hash.w.fadeOut(function(){ hash.o.remove(); });
        /*
        hash.w.remove();
        hash.o.remove();
        */
      }
    }).jqmHide();
  }

  function setModalSize(o){
    /*
    $('#' + _id + ' iframe').stop().animate({
      height: o.height + 'px',
      width: o.width + 'px',
    }, 'slow', 'swing');

    $('#' + _id).stop().animate({
      height: o.height + 'px',
      width: o.width + 'px',
      margin: '-' + o.height/2 + 'px auto auto -' + o.width/2 + 'px'
    }, 'slow', 'swing');
    */

    $('#' + _id + ' iframe').css({
      height: o.height + 'px',
      width: o.width + 'px',
      webkitBoxShadow: '0 0 0 '+o.borderradius+'px #3e3e3e',
      mozBoxShadow: '0 0 0 '+o.borderradius+'px #3e3e3e',
      boxShadow: '0 0 0 '+o.borderradius+'px #3e3e3e',
      webkitBorderRadius: o.borderradius + 'px',
      mozBorderRadius: o.borderradius + 'px',
      borderRadius: o.borderradius + 'px'
    });
    // if margin_height defined, use it otherwise use height/2
    new_margin = o.margin ? o.margin: o.height/2;

    $('#' + _id).css({
      height: o.height + 'px',
      width: o.width + 'px',
      margin: '-' + new_margin + 'px auto auto -' + o.width/2 + 'px'
    });
  }

  // Debug message if __debug is turned on
  function __debug(msg){
    if (_debug && window.console && window.console.log){
      console.log(msg);
    }
  }
})(jQuery);
