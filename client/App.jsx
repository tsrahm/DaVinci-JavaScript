
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo-backbone';
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
        todos.render();
    break;
    case '/pages/dyba.html':
        dybaHeader.init();
    break;
    case '/pages/funnySquares.html':
        funnySquares.init();
    break;
  }

// Fancy console message for developers
console.log("=================================");
console.log("=================================");
console.log("=====I am looking for a job.=====");
console.log("=================================");
console.log("============Call me.=============");
console.log("=================================");
console.log("=================================");
});
