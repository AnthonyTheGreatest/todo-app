import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.svg';
import { useAppSelector } from '../app/hooks';
import { selectTodoList } from '../features/todoListSlice';
import HamburgerMenu from './HamburgerMenu';

// TODO: Create hamburger menu

const Header = () => {
  // LocalStorage setup for datat persistence
  const todoList = useAppSelector(selectTodoList);
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <header className="grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-2 justify-center items-center px-4 bg-slate-50 shadow-md">
      <div className="sm:hidden"></div>
      <div className="flex justify-self-center sm:justify-self-start">
        <img src={logo} alt="logo" className="w-14" />
        <div className="flex items-center ml-2 font-bold text-2xl">
          <p>Todo</p>
          <p className="text-mainColor">App</p>
        </div>
      </div>
      <HamburgerMenu />
      <nav className="hidden sm:flex sm:justify-end text-slate-800 font-bold">
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
