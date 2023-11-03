import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (
      state,
      { payload: { text } }: PayloadAction<{ text: string }>,
    ) => {
      state.todos.push({
        id: crypto.randomUUID(),
        text: text,
        checked: false,
      } as Todo);
    },
    deleteTodo: (state, { payload: { id } }: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    toggleTodo: (
      state,
      {
        payload: { id, checked },
      }: PayloadAction<{ id: string; checked: boolean }>,
    ) => {
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, checked: checked } : todo,
      );
    },
    clearTodos: state => {
      state.todos = [];
    },
  },
});

// Selectors
export const selectTodoList = (state: { todoList: TodoListState }) =>
  state.todoList;
export const selectTodoById =
  (id: string) => (state: { todoList: TodoListState }) => {
    return state.todoList.todos.find(todo => todo.id === id);
  };

// Actions
export const { addTodo, deleteTodo, toggleTodo, clearTodos } =
  todoListSlice.actions;

export default todoListSlice.reducer;
