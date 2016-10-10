import angular from 'angular';
import TodoCtrl from './TodoCtrl';
import TodoList from './TodoListing';


angular
  .module('app', [TodoList])
  .controller('TodoCtrl', TodoCtrl);
