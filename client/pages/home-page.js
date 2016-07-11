
var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    app.unbindEvents();
    app.bindEvents();   
  },
  unbindEvents: function() {
    $('.tr-circle').off();
  },
  bindEvents: function() {
    app.bindHoverEvents();
  },
  bindHoverEvents: function() {
    var $trCircleMD = $('.tr-circle.hidden-sm');
    var $trCircleSM = $('.tr-circle.hidden-md');
    var $trTextMD = $trCircleMD.find('.tr-text');
    var $trPhone1MD = $trCircleMD.find('.tr-phone1');
    var $trPhone2MD = $trCircleMD.find('.tr-phone2');
    var $trTextSM = $trCircleSM.find('.tr-text');
    var $trPhone1SM = $trCircleSM.find('.tr-phone1');
    var $trPhone2SM = $trCircleSM.find('.tr-phone2');
    $trCircleMD.hover(function() {
      $trTextMD.animate({opacity: 0}, 500);
      $trPhone1MD.animate({opacity: 1}, 500);
      $trPhone2MD.animate({opacity: 1}, 500);
    }, function() {
      $trTextMD.animate({opacity: 1}, 500);
      $trPhone1MD.animate({opacity: 0}, 500);
      $trPhone2MD.animate({opacity: 0}, 500);
    });
    $trCircleSM.click(function() {
      $trTextSM.animate({opacity: 'toggle'}, 500);
      $trPhone1SM.animate({opacity: 'toggle'}, 500);
      $trPhone2SM.animate({opacity: 'toggle'}, 500);
    });
  }
};

module.exports = app;
