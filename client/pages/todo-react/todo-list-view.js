
var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import todoModel from 'pages/todo-react/todo-model';
import TodoItemView from 'pages/todo-react/todo-view';
import dispatcher from 'pages/todo-react/todo-dispatcher';


var TodoListView = Backbone.View.extend({
  el: '.todo-container',
  model: todoModel,
  events: {
    'click .btn-add': 'addTodoItem',
    'keydown .input-name': 'checkAddTodoItem'
  },
  initialize: function() {
    this.model.fetch();
    this.model.on('change', this.render, this);
  },
  render: function() {
    var todos = this.model.get('todos');
    var $listGroup = this.$el.find('.list-group');
    $listGroup.empty();
    todos.forEach(function(todo) {
      var $li = $('<li class="list-group-item"></li>');
      $listGroup.append($li);
      ReactDOM.render(
        <TodoItemView data={todo}/>,
        $li[0]             // Get original DOM node from jQuery object
      );
    });
  },
  addTodoItem: function() {
    var $input = this.$el.find('.input-name');
    var newTitle = $input.val();
    dispatcher.addTodo(newTitle);
    $input.val('');
  },
  checkAddTodoItem: function() {
    var $input = this.$el.find('.input-name');
    var newTitle = $input.val();
    if (event.which === 13) {
      dispatcher.addTodo(newTitle);
      $input.val('');
    }
  }
});

module.exports = TodoListView;
