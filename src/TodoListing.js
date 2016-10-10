import angular from 'angular';
import TodoCtrl from './TodoCtrl';



const module = angular.module('app.TodoList', [])
  .component('todoList', {
    template: `
      <div>
        {{ $ctrl.report }}
        <ul>
        <li ng-repeat="todo in $ctrl.todos">
          <todo-view todo="todo" />
        </li>
        </ul>
        <button ng-click="$ctrl.addTodo()">New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    `,


    controller: TodoCtrl

  })


  .component('todoView', {
    bindings: {
      todo: '<'
    },
    template: `
      <div ng-dblclick="$ctrl.onRename()">
        <input
          type='checkbox'
          ng-checked="$ctrl.todo.completed"
          ng-click="$ctrl.onToggleCompleted()"
        />
        {{ $ctrl.todo.task }}
        <small
          ng-if="$ctrl.todo.assignee">
          {{ $ctrl.todo.assignee.name }}
        </small>
      </div>
    `,

    controller: class TodoView {
      onToggleCompleted = () => {
        const todo = this.todo;
        todo.completed = !todo.completed;
      }

      onRename = () => {
        const todo = this.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
      }
    }
  });

export default module.name;
