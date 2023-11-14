import React from 'react';
import { Todo } from '../features/todoListSlice';

interface ItemProps extends Todo {
  handleToggle: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}

const Item = ({ id, text, checked, handleToggle, handleDelete }: ItemProps) => {
  return (
    <li className="grid justify-center items-center grid-cols-[30px_1fr_30px] list-none my-2">
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          // currentTarget:
          // https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property
          handleToggle(id, e.currentTarget.checked)
        }
        className="h-full"
      />
      <label htmlFor="checkbox" className="mx-3 text-xl">
        {text}
      </label>
      <button
        onClick={() => handleDelete(id)}
        className="sm:hidden w-full rounded-lg bg-mainColor text-slate-50 px-3"
      >
        x
      </button>
      <button
        onClick={() => handleDelete(id)}
        className="hidden rounded-lg bg-mainColor text-slate-50"
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
