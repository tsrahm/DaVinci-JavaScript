
var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import rawTemplate from 'templates/todoItem.html';

// Array of To Dos
var todoSchema = function(todo) {
  return _.defaults(todo, {
    id: 0,
    title: "",
    completed: false
  });
}

var savedData = lscache.get('todos');
var todos;
if (savedData === null) {
  todos = [];
} else {
  todos = savedData;
}

// Application
var template;
var app = {
  init: function() {
    app.compileTemplates();
    app.render();
  },
  compileTemplates: function() {
    // Pass HTML content of rawTemplate to Handlebars compiler.
    // Handlebars takes this and compiles to a JS function.
    template = Handlebars.compile(rawTemplate);
  },
  render: function() {
    lscache.set('todos', todos);
    // Create an array of HTML strings
    var todoHtml = _.map(todos, function(todo){
      // The function template returns HTML code
      // with our data interpolated into the HTML.
      return template(todo);
    });
    app.unbindEvents();
    // .join converts the array of strings into one string
    // .html adds the HTML string to our <ul>
    $('ul.list-group').html(todoHtml.join(''));
    app.bindEvents();
  },
  unbindEvents: function() {
    $('.list-group-item').off();
    $("input[type='checkbox']").off();
    $('.add-todo-container button').off();
    $('.list-group-item button').off();
    $('.title-edit input').off();
  },
  bindEvents: function() {
    app.bindHoverEvents();
    app.bindCheckboxEvents();
    app.bindAddTodoEvents();
    app.bindRemoveTodoEvents();
    app.bindEditTodoEvents();
  },
  bindHoverEvents: function() {
    var $items = $('.list-group-item');
    $items.on('mouseover', function(){
      $(this).addClass('list-group-item-success');
    });
    $items.on('mouseout', function(){
      $(this).removeClass('list-group-item-success');
    });
  },
  bindCheckboxEvents: function() {
    var $checkboxes = $("input[type='checkbox']");
    $checkboxes.on('change', function(){
      var isChecked = !$(this).is(':checked');
      if (isChecked) {
        $(this).parent().parent().removeClass('disabled');
      } else {
        $(this).parent().parent().addClass('disabled');
      }
    });
  },
  bindAddTodoEvents: function() {
    $('.add-todo-container button').on('click', function(){
      var newTodoTitle = $('.add-todo-container input').val();
      if (_.isString(newTodoTitle) && newTodoTitle.length > 2) {
        var newTodoObject = todoSchema({
          id: todos.length,
          title: newTodoTitle,
          completed: false
        });
        todos.push(newTodoObject);
        app.render();
      }
      $('.add-todo-container input').val('');
    });
  },
  bindRemoveTodoEvents: function() {
    $('.list-group-item button').on('click', function(){
      var index = $(this).parent().parent().index();
      todos.splice(index, 1);
      app.render();
    });
  },
  bindEditTodoEvents: function() {
    $('.title').on('click', function() {
      var $parent = $(this).parent();
      $parent.find('.title').addClass('hidden');
      $parent.find('.title-edit').removeClass('hidden');
    });
    $('.title-edit input').on('keypress', function(event) {
      var key = event.which;
      if (key === 13) {
        var newTitle = $(this).val();
        var editId = $(this).attr('data-id');
        editId = parseInt(editId, 10);
        // update the title in our model
        var editTodo = _.filter(todos, function(todo) {
          if (todo.id === editId) {
            return true;
          }
          return false;
        });
        editTodo[0].title = newTitle;
        app.render();
      }
    });
  }
};

module.exports = app;
