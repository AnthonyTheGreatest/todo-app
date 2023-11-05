import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addTodo, selectTodoList } from '../features/todoListSlice';

//TODO: Fix: only todo id is saved in state.

const Form = () => {
  const [newTodo, setNewTodo] = useState('');

  // The `state` arg is correctly typed as `RootState` already
  // const todoList = useAppSelector(state => state.todoList);
  // const todoList = useAppSelector(selectTodoList); //?
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch(addTodo({ text: newTodo }));
    setNewTodo('');
    // Pre-select after submit:
    const newTodoInput = document.getElementById('newTodo') as HTMLInputElement;
    newTodoInput && newTodoInput.focus();
  };

  return (
    <div className="grow flex flex-col justify-center m-5 bg-slate-50 shadow-md rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <label htmlFor="newTodo" className="font-bold text-4xl">
          New Todo
        </label>
        <input
          type="text"
          id="newTodo"
          autoFocus
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="bg-slate-200 rounded-lg border border-slate-900"
        />
        <button className="rounded-lg bg-mainColor text-slate-50 px-3">
          Add
        </button>
      </form>
      <div className="flex justify-end">
        <button className="rounded-lg bg-mainColor text-slate-50 px-3">
          I'm bored...
        </button>
      </div>
    </div>
  );
};

export default Form;
