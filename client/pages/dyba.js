
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
    $('.dyba-nav-menuitem').off();
    $('.dyba-nav-logo-large').off();
  },
  bindEvents: function() {
    app.bindHoverEvents();
  },
  bindHoverEvents: function() {
    var $menuItem = $('.dyba-nav-menuitem');
    var $homeLink = $('.dyba-nav-logo-large');
    $homeLink.on('mouseover', function() {
      $homeLink.animate({opacity: 0.2}, 500);
      $('.home-hidden').animate({opacity: 1}, 500);
    });
    $homeLink.on('mouseleave', function() {
      $homeLink.animate({opacity: 1}, 500);
      $('.home-hidden').animate({opacity: 0}, 500);
    });
    $menuItem.on('mouseover', function() {
      // $(this).css({background: '#9d9d9d'});
      $(this).find('.dyba-nav-link').css({color: 'black', textDecoration: 'none'});
      $(this).find('.dyba-nav-submenu').slideDown();
      // $(this).find('.dyba-nav-submenu').css({visibility: 'visible'});
    });
    $menuItem.on('mouseleave', function() {
      $(this)
        .delay(400)
        .queue(function(next) {
          $(this).find('.dyba-nav-link').css({color: 'green'});
          next();
        });
      $(this).find('.dyba-nav-submenu').slideUp();
      // $(this).find('.dyba-nav-submenu').css({visibility: 'hidden'});
    });
  }
};

module.exports = app;
