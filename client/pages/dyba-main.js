
var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import dybaMain from 'templates/dyba-main.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    app.unbindEvents();
    $('.dyba-main').empty().append(dybaMain);
    app.bindEvents();   
  },
  unbindEvents: function() {
  },
  bindEvents: function() {
    app.bindHoverEvents();
  },
  bindHoverEvents: function() {
    var $sideLink = $('.dyba-sidebar-link');
    $sideLink.hover(function(e) {
      var $logo1 = $(this).find('.dyba-sidebar-logo-1');
      var $logo2 = $(this).find('.dyba-sidebar-logo-2');
      $logo1.hoverFlow(e.type, {opacity: 0}, 200);
      $logo2.hoverFlow(e.type, {opacity: 0}, 1000);
    }, function(e) {
      var $logo1 = $(this).find('.dyba-sidebar-logo-1');
      var $logo2 = $(this).find('.dyba-sidebar-logo-2');
      $logo2.hoverFlow(e.type, {opacity: 1}, 800);
      $logo1.hoverFlow(e.type, {opacity: 1}, 300);
    });
  }
};

module.exports = app;
