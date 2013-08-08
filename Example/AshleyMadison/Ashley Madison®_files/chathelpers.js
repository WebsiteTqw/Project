$(document).ready(function(){
    $('.chatSelector').click(function(){
        var parts = $(this).attr('id').split('_');
        if (hasChat()){
          parent.frames['headerchat'].chatClient.requestChat(parts[1], false);
        } else {
          parent.frames['headerchat'].select_classic_chat(parts[1]);
        } 
        return false;
    });

    $('.chatSelectorFantasy').click(function(){
        var parts = $(this).attr('id').split('_');

        if (hasChat()){
          parent.frames['headerchat'].chatClient.requestChat(parts[1], true);
        } else {
          parent.frames['headerchat'].select_classic_chat(parts[1]);
        }
        return false;
    });

    $('.blockSelector').click(function(){
        if (confirm(getLang('Are you sure you want to block this member?')))
        {
            var parts = $(this).attr('id').split('_');
            if (hasChat())
              parent.frames['headerchat'].chatClient.blocklist.add(parts[1]);
            return true;
        } 

        return false;
    });

    $('.unblockSelector').click(function(){
        if (hasChat()) {
          var parts = $(this).attr('id').split('_');
          parent.frames['headerchat'].chatClient.blocklist.remove(parts[1]);
        }
    });

    $('#navLogout').click(function(){
      if (hasChat())
        parent.frames['headerchat'].chatClient.logout();
    });
});

function hasChat() {
  if (typeof parent.frames['headerchat'] != 'undefined' && typeof parent.frames['headerchat'].chatClient != 'undefined' && parent.frames['headerchat'].chatClient != null) {
    return true;
  }
  return false;
}

function hasImmersiveChat() {
  if (hasChat() && parent.frames['headerchat'].chatClient.ui.type == 'flash')
    return true;
}
