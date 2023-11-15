import { useState } from 'react';
import arrow from '/down-arrow.svg';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="justify-self-center flex flex-col items-end sm:hidden">
      <img
        onClick={toggle}
        src={arrow}
        alt="menu"
        className={
          isOpen ? 'w-7 rotate-180 transition' : 'w-7 rotate-0 transition'
        }
      />
      {isOpen && (
        <div className="flex flex-col items-center absolute top-20 right-0 text-2xl bg-slate-50 border border-slate-400 border-opacity-90 p-2 z-10 rounded-xl shadow-2xl opacity-90">
          <NavLink onClick={toggle} to="/app" className="whitespace-nowrap m-3">
            The App
          </NavLink>
          <NavLink onClick={toggle} to="/about" className="m-3">
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
