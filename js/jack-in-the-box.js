(function() {
  jQuery(function() {
    $.jackInTheBox = function(element, options) {
      var $boxes, $window, init, scrollCallback, scrollHandler, scrolled, show, visible,
        _this = this;
      $window = $boxes = void 0;
      visible = function($box) {
        var bottom, top, viewBottom, viewTop;
        viewTop = $window.scrollTop();
        viewBottom = viewTop + $window.height() - _this.settings.offset;
        top = $box.offset().top;
        bottom = top + $box.height();
        return top <= viewBottom && bottom >= viewTop;
      };
      scrolled = false;
      scrollHandler = function() {
        return scrolled = true;
      };
      scrollCallback = function() {
        if (!scrolled) {
          return;
        }
        scrolled = false;
        return show();
      };
      show = function() {
        return $boxes = $boxes.map(function(index, box) {
          var $box;
          $box = $(box);
          if (visible($box)) {
            $box.css({
              visibility: 'visible'
            }).addClass(_this.settings.animateClass);
            return null;
          } else {
            return $box;
          }
        });
      };
      init = function() {
        this.settings = $.extend({}, this.defaults, options);
        $window = $(window);
        $boxes = $("." + this.settings.boxClass).css({
          visibility: 'hidden'
        });
        if ($boxes.length) {
          $(window).on("scroll", scrollHandler);
          setInterval(scrollCallback);
          return show();
        }
      };
      init.call(this);
      return this;
    };
    $.jackInTheBox.prototype.defaults = {
      boxClass: 'box',
      animateClass: 'animated',
      offset: 0,
      interval: 50
    };
    return $.fn.jackInTheBox = function(options) {
      return this.each(function() {
        var plugin;
        if ($(this).data('jackInTheBox') === void 0) {
          plugin = new $.jackInTheBox(this, options);
          return $(this).data('jackInTheBox', plugin);
        }
      });
    };
  });

}).call(this);
