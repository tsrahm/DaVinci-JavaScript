
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';


$(function() {

  // What page is being loaded?
  var url = window.location.pathname;

  // This is called a router
  switch (url) {
    case '/pages/todo.html':
        todos.init();
    break;
    case '/pages/project.html':
        // do stuff
    break;
    case '/pages/funnySquares.html':
        funnySquares.init();
    break;
  }

});
