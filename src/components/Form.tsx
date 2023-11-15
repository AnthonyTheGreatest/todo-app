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

  // Without pre-select for mobile:
  const handleSubmitNoSelect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch(addTodo({ text: newTodo }));
    setNewTodo('');
  };

  return (
    <div className="grid grid-rows-3 bg-slate-50 shadow-md rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="hidden row-span-2 sm:grid grid-rows-2 grid-cols-[repeat(10,_1fr)]"
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
          className="col-start-2 col-span-8 h-12 self-center pl-3 pr-20 bg-slate-200 rounded-lg border border-slate-900 text-xl"
        />
        <div className="-translate-x-[5.8rem]  -translate-y-5 self-center justify-self-center">
          <button className="btn px-4 h-10 absolute rounded-lg text-xl">
            Add
          </button>
        </div>
      </form>
      {/* for mobile: */}
      <form
        onSubmit={handleSubmitNoSelect}
        className="sm:hidden row-span-2 grid grid-rows-2 grid-cols-[repeat(10,_1fr)]"
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
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="col-start-2 col-span-8 h-12 self-center pl-3 pr-20 bg-slate-200 rounded-lg border border-slate-900 text-xl"
        />
        <div className="-translate-x-[5.8rem]  -translate-y-5 self-center justify-self-center">
          <button className="btn px-4 h-10 absolute rounded-lg text-xl">
            Add
          </button>
        </div>
      </form>
      <div className="self-end">
        <BoredButton />
      </div>
    </div>
  );
};

export default Form;
