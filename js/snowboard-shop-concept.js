 /**
  The Snowboard Shop
  
  # What? #
  A fork of "CSS Snowboard Gallery" by Patrick Cox.
  http://codepen.io/pcridesagain/details/qdGFm

  Added some click-event stuff, animation and a title.

  Images from http://asymbolgallery.com

  # 2012 by Tim Pietrusky
  # timpietrusky.com
**/

var boards = $('.snowboard'),
    last = undefined;

boards.click(function() {
  var _this = $(this),
      _last = $(last);
  
  // Click on focused element
  if (_this.get(0) === _last .get(0) && _this.hasClass('focus')) {
    _this.removeClass('focus');
    _this.addClass('normal');
    return false;
  }
  
  // Reset last
  if (last != undefined) {
    _last.removeClass('focus');
    _last.addClass('normal');
  }
  
  // Focus clicked
  _this.removeClass('normal');
  _this.addClass('focus');
  last = _this;
});