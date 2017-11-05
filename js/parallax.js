(function($){
  
  $(function(){

    UIkit.$doc.on('scrolling.uk.document', (function(){

      var wrapper = $('.tm-sidebar-parallax .tm-sidebar-wrapper').css('background-position', (UIkit.langdirection == 'right' ? '100%':'0%') +' 0px');

      return function() {

        if(window.innerWidth <= 1024) return;

        var x = UIkit.$win.scrollTop();

        wrapper.css('background-position', (UIkit.langdirection == 'right' ? '100%':'0%') +' '+ parseInt(-x / 4) + 'px');

      };
    
    })());
    
  });

})(jQuery);
