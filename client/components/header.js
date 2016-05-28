
import $ from 'jquery';
import navbar from 'templates/navbar.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.main-header').append(navbar);    
  }
};

module.exports = app;
