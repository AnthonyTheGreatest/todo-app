import React from 'react';
import { Todo } from '../features/todoListSlice';

interface ItemProps extends Todo {
  handleToggle: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}

const Item = ({ id, text, checked, handleToggle, handleDelete }: ItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          // currentTarget ?
          handleToggle(id, e.currentTarget.checked)
        }
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default Item;
