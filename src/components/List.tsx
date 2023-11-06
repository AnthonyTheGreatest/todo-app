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

  // return (
  //   <div className="h-full flex-auto flex flex-col items-center justify-center mr-4 my-4 bg-slate-50 shadow-md rounded-xl" >
  //     <p>List</p>
  //     <p>some text</p>
  //   </div>
  // )

  return (
    <div className="relative h-full flex-auto flex flex-col justify-evenly mr-4 my-4 bg-slate-50 shadow-md rounded-xl">
      <div className="flex-auto flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Todo List</h1>
        <div>
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
      </div>
      {todoList.length >= 2 && (
        <button
          onClick={handleClear}
          className="absolute bottom-5 left-5 rounded-lg bg-mainColor text-slate-50 px-3"
        >
          Clear Todos
        </button>
      )}
    </div>
  );
};

export default List;
