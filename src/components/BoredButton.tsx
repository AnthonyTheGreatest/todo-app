import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTodo, selectTodoList } from '../features/todoListSlice';

const BoredButton = () => {
  const [activity, setActivity] = useState('');

  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodoList);

  useEffect(() => {
    // IIFE
    (async () => {
      try {
        const {
          data: { activity },
        } = await axios.get(
          'https://www.boredapi.com/api/activity?type=recreational',
        );
        setActivity(activity);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [todoList]);

  const handleClick = () => {
    dispatch(addTodo({ text: activity }));
  };

  return (
    <button
      onClick={handleClick}
      className="btn h-12 rounded-bl-2xl rounded-tr-lg px-3"
    >
      I'm bored...
    </button>
  );
};

export default BoredButton;
