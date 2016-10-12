

class ObservableTodoStore {
  todos = [];

  constructor($scope) {
    $scope.$watch('$ctrl.report', () => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  get report() {
    if (this.todos.length === 0)
      return "<none>";
    return `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task) {
    this.todos.push({
      task: task || prompt('Enter a new todo:','coffee plz'),
      completed: false,
      assignee: null
    });
  }
}

export default ObservableTodoStore;
