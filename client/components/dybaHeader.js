
var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import dybaNavbar from 'templates/dyba-navbar.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    app.unbindEvents();
    $('.dyba-header').append(dybaNavbar);
    app.bindEvents();   
  },
  unbindEvents: function() {
    $('.dyba-nav-menuitem').off();
    $('.dyba-nav-logo-large').off();
  },
  bindEvents: function() {
    app.bindHoverEvents();
  },
  bindHoverEvents: function() {
    var $homeLink = $('.dyba-nav-logo-large');
    $homeLink.hover(function(e) {
      var $el = $(this);
      var $hidden = $('.home-hidden');
      $el.hoverFlow(e.type, {opacity: 0.2}, 500);
      $hidden.hoverFlow(e.type, {opacity: 1}, 500);
    }, function(e) {
      var $el = $(this);
      var $hidden = $('.home-hidden');
      $el.hoverFlow(e.type, {opacity: 1}, 500);
      $hidden.hoverFlow(e.type, {opacity: 0}, 500);
    });

    var $linkContainer = $('.dyba-nav-link-container');
    $linkContainer.hover(function() {
      var $el = $(this);
      var $link = $el.find('.dyba-nav-link');
      $el.css({background: '#005214'});
      $link.css({color: '#999', textDecoration: 'none'});
    }, function() {
      var $el = $(this);
      var $link = $el.find('.dyba-nav-link');
      $el.css({background: '#999'});
      $link.css({color: '#005214'});
    });

    var $headerContainer = $('.dyba-nav-header-container');
    $headerContainer.hover(function(e) {
      var $el = $(this);
      var $header = $el.find('.dyba-nav-header');
      var $submenu = $el.find('.dyba-nav-submenu');
      $el.css({background: '#005214'});
      $header.css({color: '#999'});
      $submenu.hoverFlow(e.type, {
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
      });
    }, function(e) {
      var $el = $(this);
      var $header = $el.find('.dyba-nav-header');
      var $submenu = $el.find('.dyba-nav-submenu');
      $el.delay(400)
        .queue(function(next) {
          $el.css({background: '#999'});
          $header.css({color: '#005214'});
          next();
        });
      $submenu.hoverFlow(e.type, {
        height: 'hide',
        marginTop: 'hide',
        marginBottom: 'hide',
        paddingTop: 'hide',
        paddingBottom: 'hide'
      });
    });
  }
};

module.exports = app;
