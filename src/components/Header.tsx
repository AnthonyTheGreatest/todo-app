import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.svg';
import { useAppSelector } from '../app/hooks';
import { selectTodoList } from '../features/todoListSlice';

const Header = () => {
  // LocalStorage setup for datat persistence
  const todoList = useAppSelector(selectTodoList);
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <header className="flex items-center bg-slate-50 shadow-md mb-5">
      <div className="flex items-center ml-10">
        <img src={logo} alt="logo" className="w-1/6 my-3" />
        <div className="flex font-bold ml-3 text-2xl">
          <p>Todo</p>
          <p className="text-mainColor">App</p>
        </div>
      </div>
      <nav className="grow flex justify-end mr-10 text-slate-800 font-bold">
        <NavLink to="/app" className="whitespace-nowrap">
          The App
        </NavLink>
        <NavLink to="/about" className="ml-10">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
