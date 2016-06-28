
import todoModel from 'pages/todo-react/todo-model';

var dispatcher = {
  clickComplete: function(id) {
    todoModel.itemCompleted(id);
  },
  addTodo: function(newTitle) {
    if (
      newTitle !== ''
      && typeof newTitle === 'string'
    ) {
      todoModel.addItem(newTitle);
    }
  },
  removeTodo: function(id) {
    todoModel.removeItem(id);
  },
  editTodoTitle: function(newTitle, id, event) {
    if (
      event.which === 13
      && typeof newTitle === 'string'
      && newTitle.length > 0
    ) {
      todoModel.editTitle(newTitle, id);
    } else if (
      event.which === 27
    ) {
      todoModel.cancelEditTitle(id);
    }
  },
  startEditMode: function(id) {
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;
