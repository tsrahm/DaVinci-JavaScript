
import $ from 'jquery';
import 'styles/main.scss';
import TodoListView from 'pages/todo-react/todo-list-view';
import funnySquares from 'pages/funnySquares';
import formsBackbone from 'pages/forms-backbone';
import dybaHeaderFooter from 'components/dyba-header-footer';
import dybaHeaderFooterBroken from 'components/dyba-header-footer-broken';
import dybaMain from 'pages/dyba-main';
import music from 'pages/music';
import photoSearch from 'pages/photo-search';
import homePage from 'pages/home-page';
import 'components/jquery.hoverflow.min.js';

$(function() {

  // What page is being loaded?
  var url = window.location.pathname;

  // This is called a router
  switch (url) {
    case '/pages/':
        homePage.init();
    break;
    case '/pages/todo.html':
        var todoListView = new TodoListView();
    break;
    case '/pages/todo-broken.html':
        var todoListView = new TodoListView();
    break;
    case '/pages/dyba.html':
        dybaHeaderFooter.init();
        dybaMain.init();
    break;
    case '/pages/dyba-broken.html':
        dybaHeaderFooterBroken.init();
        dybaMain.init();
    break;
    case '/pages/photo-search.html':
        photoSearch.init();
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
  console.log('=================================');
  console.log('=================================');
  console.log('==== I am looking for a job =====');
  console.log('=== as a Front-end Developer ====');
  console.log('=================================');
  console.log('======= Please contact me =======');
  console.log('======= toryrahm at gmail =======');
  console.log('============ Thanks! ============');
  console.log('=================================');
  console.log('=================================');
});
