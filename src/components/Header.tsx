import React from 'react';
import logo from '/logo.svg';

const Header = () => {
  return (
    <header className='flex items-center bg-slate-50'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' className='h-1rem w-1rem' />
        <div className='flex font-bold ml-1 text-2xl'>
          <p>Todo</p>
          <p className='text-mainColor'>App</p>
        </div>
      </div>
      <nav className='grow flex justify-end'>
        <a href='#'>About</a>
      </nav>
    </header>
  );
};

export default Header;
