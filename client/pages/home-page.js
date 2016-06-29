
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
    $trCircle.hover(function(e) {
      var $trText = $('.tr-text');
      var $trPhone1 = $('.tr-phone1');
      var $trPhone2 = $('.tr-phone2');
      $trText.hoverFlow(e.type, {opacity: 0}, 500);
      $trPhone1.hoverFlow(e.type, {opacity: 1}, 500);
      $trPhone2.hoverFlow(e.type, {opacity: 1}, 500);
    }, function(e) {
      var $trText = $('.tr-text');
      var $trPhone1 = $('.tr-phone1');
      var $trPhone2 = $('.tr-phone2');
      $trText.hoverFlow(e.type, {opacity: 1}, 500);
      $trPhone1.hoverFlow(e.type, {opacity: 0}, 500);
      $trPhone2.hoverFlow(e.type, {opacity: 0}, 500);
    });
  }
};

module.exports = app;
