import React from 'react';
import Form from './Form';
import List from './List';

const MainApp = () => {
  return (
    <div className="flex-auto flex justify-center items-center">
      <Form />
      <List />
    </div>
  );
};

export default MainApp;
