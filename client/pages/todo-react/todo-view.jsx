
import $ from 'jquery';
import React, { PropTypes } from 'react';
import dispatcher from 'pages/todo-react/todo-dispatcher';

var TodoItem = React.createClass({
  propTypes: {
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool
    }),
    controller: PropTypes.object
  },
  render: function() {
    var todo = this.props.data;
    var title = (
      <div className="col-xs-10">
        <p className="item-title" onClick={this.titleClick}>{todo.title}</p>
      </div>
    );
    if (todo.isEditing) {
      title = (
        <div className="col-xs-10">
          <p className="item-title">
            <input type="text" className="form-control" defaultValue={todo.title} onKeyPress={this.editKeypress} onChange={function(){}}></input>
          </p>
        </div>
      );
    }
    return (
      <div>
        <div className="col-xs-1">
          <input type="checkbox" checked={todo.completed} onChange={this.handleComplete}></input>
        </div>
        {title}
        <div className="col-xs-1">
          <button type="button" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  },
  handleComplete: function() {
    var id = this.props.data.id;
    dispatcher.clickComplete(id);
  },
  titleClick: function() {
    var id = this.props.data.id;
    dispatcher.startEditMode(id);
  },
  editKeypress: function(event) {
    var id = this.props.data.id;
    var newTitle = $('li').eq(id).find('input[type="text"]').val();
    dispatcher.editTodoTitle(newTitle, id, event); 
  },
  handleClose: function() {
    var id = this.props.data.id;
    dispatcher.removeTodo(id);
  }
});

module.exports = TodoItem;
