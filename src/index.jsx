import angular from 'angular';
import TodoList from './TodoList';
import ObservableTodoStore from './ObservableTodoStore';


angular
  .module('app', [TodoList]);
