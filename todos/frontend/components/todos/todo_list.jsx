import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => (
	<div>
		<h3>Todo List goes here!</h3>
    <ul>
      {todos.map((todo) => <TodoListItem todo={todo} key={todo.id}/>)}
    </ul>
		<TodoForm receiveTodo={receiveTodo} />
	</div>
);

export default TodoList;
