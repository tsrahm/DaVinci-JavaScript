
import $ from 'jquery';
import footer from 'templates/footer.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('footer').append(footer);    
  }
};

module.exports = app;
