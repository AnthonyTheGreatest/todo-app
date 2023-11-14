import Form from './Form';
import List from './List';

const MainApp = () => {
  return (
    <main className="grid grid-rows-[200px_1fr] md:grid-rows-1 md:grid-cols-[1fr_2fr] gap-4 mx-4">
      <Form />
      <List />
    </main>
  );
};

export default MainApp;
