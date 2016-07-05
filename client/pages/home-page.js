
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
    var $trCircle = $('.tr-circle');
    var $trText = $('.tr-text');
    var $trPhone1 = $('.tr-phone1');
    var $trPhone2 = $('.tr-phone2');
    $trCircle.hover(function() {
      $trText.animate({opacity: 0}, 500);
      $trPhone1.animate({opacity: 1}, 500);
      $trPhone2.animate({opacity: 1}, 500);
    }, function() {
      $trText.animate({opacity: 1}, 500);
      $trPhone1.animate({opacity: 0}, 500);
      $trPhone2.animate({opacity: 0}, 500);
    });
    if ($(window).width < 992) {
      $trCircle.click(function() {
        $trText.animate({opacity: 'toggle'}, 1500);
        $trPhone1.animate({opacity: 'toggle'}, 1500);
        $trPhone2.animate({opacity: 'toggle'}, 1500);
      });
    }
  }
};

module.exports = app;
