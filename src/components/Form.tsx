import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addTodo } from '../features/todoListSlice';

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

  // return (
  //   <div className='h-full flex-auto flex justify-center items-center m-5 bg-slate-50 shadow-md rounded-xl' >
  //     <p>Form</p>
  //   </div>
  // )

  return (
    <div className="relative h-full flex-auto flex flex-col justify-center m-5 bg-slate-50 shadow-md rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="h-1/2 flex flex-col justify-evenly"
      >
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
        <button className="absolute bottom-5 right-5 rounded-lg bg-mainColor text-slate-50 px-3">
          I'm bored...
        </button>
      </div>
    </div>
  );
};

export default Form;
