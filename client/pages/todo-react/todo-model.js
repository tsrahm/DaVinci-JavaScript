var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';

var TodoModel = Backbone.Model.extend({
  defaults: {
    todos: []
  },
  todoSchema: {
    id: 0,
    title: '',
    completed: false,
    isEditing: false
  },
  fetch: function() {
    var that = this;
    $.ajax({
      url: '/api',
      method: 'GET',
      complete: function(response) {
        var dataString = response.responseText;
        var data = JSON.parse(dataString);
        data = that.applySchema(data);
        that.set('todos', data);
      }
    });
  },
  save: function() {
    var that = this;
    var todos = this.get('todos');
    $.ajax({
      url: '/api',
      method: 'POST',
      data: {todos: JSON.stringify(todos)},
      complete: function(response) {
        var dataString = response.responseText;
        var data = JSON.parse(dataString);
        data = that.applySchema(data);
        that.set('todos', data);
        that.trigger('change');
      }
    });
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
  },
  addItem: function(newTitle) {
    var newTodo = {title: newTitle};
    var todos = this.get('todos');
    todos.push(newTodo);
    this.set('todos', todos);
    this.save();
  },
  removeItem: function(id) {
    var todos = this.get('todos');
    todos.splice(id, 1);
    this.save();
  },
  itemCompleted: function(id, isCompleted) {
    var todos = this.get('todos');
    var item = _.findWhere(todos, {id: id});
    item.completed = isCompleted;
    this.set('todos', todos);
    this.save();
  },
  editTitle: function(newTitle, id) {
    var todos = this.get('todos');
    var item = _.findWhere(todos, {id: id});
    item.title = newTitle;
    item.isEditing = false;
    this.set('todos', todos);
    this.save();
  },
  startEditing: function(id) {
    var todos = this.get('todos');
    var item = _.findWhere(todos, {id: id});
    item.isEditing = true;
    this.set('todos', todos);
    this.save();
  }
});

// fetch and save have a default behavior which may make them work in an unwanted way
// if not overwritten.  They expect to retrieve and save data from/to a database.  We
// will typically use local storage via lscache instead.

var todoModel = new TodoModel();

module.exports = todoModel;
