var $ = require('jquery');

// Legacy loading for Bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import listTemplate from 'templates/account-list.html';
import createTemplate from 'templates/create-account.html';


// Model

var AccountModel = Backbone.Model.extend( {   // .Model.extend creates a class which is why
  defaults: {                            // AccountModel is capitalized
    accounts: []
  },                          
  save: function() {
    var data = this.get('accounts');
    lscache.set('accounts', data);
  },
  fetch: function() {
    var data = lscache.get('accounts');
    data = data || [];
    this.set('accounts', data);
  }
});

var accountModel = new AccountModel();


// Controller

var AccountControllerView = Backbone.View.extend( {
  el: '.page-container',
  model: accountModel,
  event: {
    'click .btn-create': 'createNewAccount'
  },
  initialize: function() {
    this.model.fetch();
  },
  render: function() {
    var listView = new ListView();
    this.$el.find('.view-container').empty().append(listView.$el.html());
  },
  createNewAccount: function() {
    var createView = new CreateView();
    this.$el.find('.view-container').empty().append(createView.$el.html());
  }
});


// Views

var ListView = Backbone.View.extend( {
  tagName: 'div',
  event: {},
  template: Handlebars.compile(listTemplate),
  initialize: function() {
    this.render();
  },
  render: function() {
    var renderedTemplate = this.template({});
    this.$el.empty().append(renderedTemplate);
  }
});

var CreateView = Backbone.View.extend( {
  tagName: 'div',
  event: {
    'click .btn-done': 'submitForm'
  },
  template: Handlebars.compile(createTemplate),
  initialize: function() {
    this.render();
  },
  render: function() {
    var renderedTemplate = this.template({});
    this.$el.empty().append(renderedTemplate);
  },
  submitForm: function() {
    accountControllerView.render();
  }
});

var accountControllerView = new AccountControllerView();

module.exports = accountControllerView;


