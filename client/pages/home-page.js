
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
      $trText.toggle(500);
      $trPhone1.toggle(500);
      $trPhone2.toggle(500);
    }, function() {
      $trText.toggle(500);
      $trPhone1.toggle(500);
      $trPhone2.toggle(500);
    });
  }
};

module.exports = app;
