
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo-backbone';
import funnySquares from 'pages/funnySquares';
import formsBackbone from 'pages/forms-backbone';
import header from 'components/header';
import footer from 'components/footer';
import dybaHeader from 'components/dybaHeader';
import dybaMain from 'pages/dyba';
import music from 'pages/music';
import 'components/jquery.hoverflow.min.js'

$(function() {

  header.init();
  footer.init();

  // What page is being loaded?
  var url = window.location.pathname;

  // This is called a router
  switch (url) {
    case '/pages/todo.html':
        todos.render();
    break;
    case '/pages/dyba.html':
        dybaHeader.init();
        dybaMain.init();
    break;
    case '/pages/music.html':
        music.init();
    break;
    case '/pages/funnySquares.html':
        funnySquares.init();
    break;
    case '/pages/forms-backbone.html':
        formsBackbone.render();
    break;
  }

// Fancy console message for developers
console.log("=================================");
console.log("=================================");
console.log("=====I am looking for a job.=====");
console.log("=================================");
console.log("===========Contact me.===========");
console.log("========toryrahm at gmail========");
console.log("=================================");
console.log("=================================");
});
