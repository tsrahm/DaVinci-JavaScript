
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import dyba from 'pages/dyba';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';
import footer from 'components/footer';
import dybaHeader from 'components/dybaHeader';


$(function() {

  header.init();
  footer.init();

  // What page is being loaded?
  var url = window.location.pathname;

  // This is called a router
  switch (url) {
    case '/pages/todo.html':
        todos.init();
    break;
    case '/pages/dyba.html':
        dybaHeader.init();
    break;
    case '/pages/funnySquares.html':
        funnySquares.init();
    break;
  }

});
