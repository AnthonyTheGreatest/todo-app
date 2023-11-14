import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addTodo } from '../features/todoListSlice';
import BoredButton from './BoredButton';

const Form = () => {
  const [newTodo, setNewTodo] = useState('');

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
    <div className="grid grid-rows-3 bg-slate-50 shadow-md rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="row-span-2 grid grid-rows-2 grid-cols-[repeat(10,_1fr)]"
      >
        <label
          htmlFor="newTodo"
          className="col-span-10 justify-self-center self-center font-bold text-4xl"
        >
          New Todo
        </label>
        <input
          type="text"
          id="newTodo"
          autoFocus
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="col-start-2 col-span-6 h-12 self-center bg-slate-200 rounded-l-lg border border-slate-900"
        />
        <button className="col-start-8 col-span-2 h-12 self-center rounded-r-lg bg-mainColor text-slate-50 px-3">
          Add
        </button>
      </form>
      <div className="self-end">
        <BoredButton />
      </div>
    </div>
  );
};

export default Form;
