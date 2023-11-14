import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTodo, selectTodoList } from '../features/todoListSlice';

const BoredButton = () => {
  const [activity, setActivity] = useState('');

  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodoList);

  useEffect(() => {
    axios
      .get('https://www.boredapi.com/api/activity?type=recreational')
      .then(response => {
        setActivity(response.data.activity);
      })
      .catch(error => {
        console.log(error);
      });
  }, [todoList]);

  const handleClick = () => {
    dispatch(addTodo({ text: activity }));
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-mainColor text-slate-50 px-3"
    >
      I'm bored...
    </button>
  );
};

export default BoredButton;
