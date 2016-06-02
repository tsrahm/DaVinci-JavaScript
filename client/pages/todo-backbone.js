var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import rawTemplate from 'templates/todoItem.html';

// Backbone Todo App

var TodoModel;
var TodoControllerView;
var TodoView;

var todoModel;
var todoControllerView;

// Model

TodoModel = Backbone.Model.extend({
  defaults: {
    todos: []
  },
  todoSchema: {
    id: 0,
    title: '',
    completed: false
  },
  fetch: function() {
    var data = lscache.get('todos');
    data = this.applySchema(data);
    this.set('todos', data);
  },
  save: function() {
    var data = this.get('todos');
    data = this.applySchema(data);
    lscache.set('todos', data);
  },
  applySchema: function(todos) {
    var data = todos;
    var schema = this.todoSchema;
    data = (_.isArray(todos)) ? data : [];  // shorthand if statement. ? if true, : if false.
    data = data.map(function(todo, index) {
      todo.id = index;
      return _.defaults(todo, schema);
    });

    return data;
  }
});

// fetch and save have a default behavior which may make them work in an unwanted way
// if not overwritten.  They expect to retrieve and save data from/to a database.  We
// will typically use local storage via lscache instead.

todoModel = new TodoModel();

// View

TodoControllerView = Backbone.View.extend({
  el: 'body',
  model: todoModel,
  events: {
  },
  initialize: function(){},
  render: function(){
    alert('Backbone');
  }
});

todoControllerView = new TodoControllerView();  // this calls TodoControllerView.initialize

module.exports = todoControllerView;

