import $ from 'jquery';
import _ from 'underscore';
import Handlebars from 'handlebars';

$(function() {
  
  // Array of To Dos
  var todos = [];
  
  var template;
  
  var app = {
    init: function(){
      app.compileTemplates();
      app.render();
    },
    compileTemplates: function(){
      // Assign <script> to var template
      template = $('[type="text/x-template"]');
      // Pass HTML content of <script> to Handlebars compiler.
      // Handlebars takes this and compiles to a JS function.
      template = Handlebars.compile(template.first().html());
    },
    render: function(){
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
    unbindEvents: function(){
      $('.list-group-item').off();
      $("input[type='checkbox']").off();
      $('.add-todo-container button').off();
      $('.list-group-item button').off();
    },
    bindEvents: function(){
      app.bindHoverEvents();
      app.bindCheckboxEvents();
      app.bindAddTodoEvents();
      app.bindRemoveTodoEvents();
    },
    bindHoverEvents: function(){
      var $items = $('.list-group-item');
      $items.on('mouseover', function(){
        $(this).addClass('list-group-item-success');
      });
      $items.on('mouseout', function(){
        $(this).removeClass('list-group-item-success');
      });
    },
    bindCheckboxEvents: function(){
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
    bindAddTodoEvents: function(){
      $('.add-todo-container button').on('click', function(){
        var newTodoTitle = $('.add-todo-container input').val();
        if (_.isString(newTodoTitle) && newTodoTitle.length > 2) {
          var newTodoObject = {title: newTodoTitle, completed: false};
          todos.push(newTodoObject);
          app.render();
        }
        $('.add-todo-container input').val('');
      });
    },
    bindRemoveTodoEvents: function(){
      $('.list-group-item button').on('click', function(){
        var index = $(this).parent().parent().index();
        todos.splice(index, 1);
        app.render();
      });
    }
  };
  
  app.init();
  
});
