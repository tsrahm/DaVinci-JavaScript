
var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import dybaHeader from 'templates/dyba-header.html';
import dybaFooter from 'templates/dyba-footer.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    app.unbindEvents();
    $('.dyba-header').append(dybaHeader);
    $('.dyba-footer').append(dybaFooter);
    app.bindEvents();   
  },
  unbindEvents: function() {
    $('.dyba-nav-link-container').off();
    $('.dyba-nav-logo').off();
    $('.dyba-nav-container-md .dyba-nav-dropdown-container').off();
  },
  bindEvents: function() {
    app.bindHoverEvents();
  },
  bindHoverEvents: function() {
    var $homeLink = $('.dyba-nav-logo');
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
      $link.css({color: '#999', textDecoration: 'none'});
    }, function() {
      var $el = $(this);
      var $link = $el.find('.dyba-nav-link');
      $link.css({color: 'black'});
    });

    var $dropdownContainermd = $('.dyba-nav-container-md .dyba-nav-dropdown-container');
    $dropdownContainermd.hover(function(e) {
      var $el = $(this);
      var $header = $el.find('.dyba-nav-dropdown-header');
      var $dropdown = $el.find('.dyba-nav-dropdown-menu');
      $header.css({color: '#999', textDecoration: 'none'});
      $dropdown.hoverFlow(e.type, {
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
      });
    }, function(e) {
      var $el = $(this);
      var $header = $el.find('.dyba-nav-dropdown-header');
      var $dropdown = $el.find('.dyba-nav-dropdown-menu');
      $el.delay(400)
        .queue(function(next) {
          $header.css({color: 'black'});
          next();
        });
      $dropdown.hoverFlow(e.type, {
        height: 'hide',
        marginTop: 'hide',
        marginBottom: 'hide',
        paddingTop: 'hide',
        paddingBottom: 'hide'
      });
    });

    var $roar = $('.roar');
    $roar.click(function(){
      $('<audio>').attr({
        'src': '/images/jaguar.mp3',
        'volume': 1.0,
        'autoplay': 'autoplay'
      }).appendTo('body');
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {  
        $('.dyba-nav-container').addClass('sticky');
        $('.dyba-main').addClass('sticky');
      } else {
        $('.dyba-nav-container').removeClass('sticky');
        $('.dyba-main').removeClass('sticky');
      }
    });

    var $footerCredits = $('.dyba-footer-credits');
    $footerCredits.hover(function(e) {
      var $el = $(this);
      var $popup = $el.find('.dyba-footer-credits-popup');
      $popup.hoverFlow(e.type, {opacity: 1}, 500);
    }, function(e) {
      var $el = $(this);
      var $popup = $el.find('.dyba-footer-credits-popup');
      $popup.hoverFlow(e.type, {opacity: 0}, 500);
    });
  }
};

module.exports = app;
