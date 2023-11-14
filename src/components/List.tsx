import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  selectTodoList,
  toggleTodo,
  deleteTodo,
  clearTodos,
} from '../features/todoListSlice';
import Item from './Item';

const List = () => {
  const todoList = useAppSelector(selectTodoList);
  const dispatch = useAppDispatch();

  const handleToggle = (id: string, checked: boolean) => {
    dispatch(toggleTodo({ id, checked }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo({ id: id }));
  };
  const handleClear = () => {
    dispatch(clearTodos());
  };

  return (
    <div className="grid grid-rows-[50px_1fr_50px] pt-3 pb-3 bg-slate-50 shadow-md rounded-2xl">
      <h1 className="justify-self-center self-center font-bold text-4xl">
        Todo List
      </h1>
      <div className="my-3 mx-3 grid auto-rows-min">
        {todoList.length === 0 && <p>No todos.</p>}
        {todoList.map(todo => (
          <Item
            {...todo}
            key={todo.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      {todoList.length >= 2 && (
        <button
          onClick={handleClear}
          className="w-40 h-12 justify-self-center self-center rounded-lg bg-mainColor text-slate-50 px-3 text-xl"
        >
          Clear Todos
        </button>
      )}
    </div>
  );
};

export default List;
