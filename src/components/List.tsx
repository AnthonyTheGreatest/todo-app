import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  selectTodoList,
  toggleTodo,
  deleteTodo,
  clearTodos,
} from '../features/todoListSlice';
import Item from './Item';

const List = () => {
  const todoList = useAppSelector(selectTodoList);
  const dispatch = useAppDispatch();

  const handleToggle = (id, checked) => {
    dispatch(toggleTodo(id, checked));
  };

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };
  const handleClear = () => {
    dispatch(clearTodos());
  };

  return (
    <div className="grow flex justify-center mr-4 my-4 bg-slate-50 shadow-md rounded-xl">
      <div>
        <h1>Todo List</h1>
        <div>
          {todoList.length === 0 && <p>No todos.</p>}
          {todoList.map(todo => (
            <Item
              {...todo}
              key={todo.id}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      {todoList.length >= 2 && (
        <button onClick={handleClear}>Clear Todos</button>
      )}
    </div>
  );
};

export default List;
