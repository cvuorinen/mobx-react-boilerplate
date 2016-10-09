import React from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';
import ObservableTodoStore from './ObservableTodoStore';

const observableTodoStore = new ObservableTodoStore();

render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('root')
);
