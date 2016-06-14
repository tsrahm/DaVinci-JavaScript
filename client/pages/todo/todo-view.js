var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import todoItemTemplate from 'templates/todo-item.html';

var TodoItemView = Backbone.View.extend({
  tagName: 'li',                                 // el = <li class="list-group-item"></li>
  className: 'list-group-item',
  events: {
    'click .close': 'removeItem',
    'change .completed-checkbox': 'completedClicked',
    'click .title': 'titleClicked',
    'keypress .title-edit-input': 'titleEditConfirm'
  },
  template: Handlebars.compile(todoItemTemplate),
  initialize: function(todo, controller) {
    this.data = todo;
    this.controller = controller;
    this.render();
  },
  render: function() {
    this.$el.empty().append(this.template(this.data));
    this.$title = this.$el.find('.title');
    this.$titleEdit = this.$el.find('.title-edit');
    this.$titleInput = this.$titleEdit.find('.title-edit-input');
    this.$el.toggleClass('disabled', this.data.completed);
  },
  removeItem: function() {
    if (this.data.title === 'beer' || this.data.title === 'chips' || this.data.title === 'salsa') {
      $('<audio>').attr({
        'src': 'http://wavcentral.com/sounds/televis/lost_space/dangw.mp3',
        'volume': 1.0,
        'autoplay': 'autoplay'
      }).appendTo('body');
      return;
    }
    this.controller.removeItem(this.data.id);
  },
  completedClicked: function(event) {
    var isChecked = $(event.currentTarget).is(':checked');
    this.controller.itemCompleted(this.data.id, isChecked);
  },
  titleClicked: function() {
    this.$title.addClass('hidden');
    this.$titleEdit.removeClass('hidden');
    this.$titleInput.focus();
  },
  titleEditConfirm: function(event) {
    if (event.which === 13) {
      var newTitle = this.$titleInput.val();
      this.controller.titleEdit(newTitle, this.data.id);
    }
  }
});

module.exports = TodoItemView;
