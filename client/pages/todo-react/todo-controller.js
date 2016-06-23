var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import todoModel from 'pages/todo-react/todo-model';
import TodoItemView from 'pages/todo-react/todo-view';


var TodoControllerView = Backbone.View.extend({
  el: '.todo-container',
  model: todoModel,
  events: {
    'click .btn-add': 'addTodoItem'
  },
  initialize: function() {
    this.model.fetch();
    this.model.on('change', this.render, this);
  },
  render: function() {
    var todos = this.model.get('todos');
    var $listGroup = this.$el.find('.list-group');
    $listGroup.empty();
    var controller = this;
    todos.forEach(function(todo) {
      var $li = $('<li class="list-group-item"></li>');
      $listGroup.append($li);
      ReactDOM.render(
        <TodoItemView data={todo} controller={controller} />,
        $li[0]             // Get original DOM node from jQuery object
      );
    });
  },
  addTodoItem: function() {
    var $input = this.$el.find('.input-name');
    var newTitle = $input.val();
    if (newTitle === '') { return; }
    this.model.addItem(newTitle);
    $input.val('');
    this.render();
  }
});

module.exports = TodoControllerView;
