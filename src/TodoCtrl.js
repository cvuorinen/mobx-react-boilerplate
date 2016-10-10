

class TodoCtrl {
  todos = [];
  pendingRequests = 0;

  constructor($scope) {
    $scope.$watch('$ctrl.report()', (report) => console.log(report));
  }

  completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  report() {
    if (this.todos.length === 0)
      return "<none>";
    return `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount()}/${this.todos.length}`;
  }

  addTodo(task) {
    this.todos.push({
      task: task || prompt('Enter a new todo:','coffee plz'),
      completed: false,
      assignee: null
    });
  }
}

export default TodoCtrl;
