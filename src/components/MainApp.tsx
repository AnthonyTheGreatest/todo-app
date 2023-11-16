import Form from './Form';
import List from './List';

const MainApp = () => {
  return (
    <main className="grid grid-rows-[200px_1fr] lg:grid-rows-1 lg:grid-cols-[1fr_2fr] gap-4 mx-4 max-w-[1024px] lg:mx-auto">
      <Form />
      <List />
    </main>
  );
};

export default MainApp;
