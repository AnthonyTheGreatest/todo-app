import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

interface TodoListState {
  todos: Todo[];
}

const initialState = {
  todos: [],
} as TodoListState;

export const todoListSlice = createSlice({
  name: 'todoList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
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

// Actions
export const { addTodo, deleteTodo, toggleTodo, clearTodos } =
  todoListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// Selectors
export const selectTodoList = (state: RootState) => state.todoList.todos;
export const selectTodoById = (id: string) => (state: RootState) => {
  return state.todoList.todos.find(todo => todo.id === id);
};

export default todoListSlice.reducer;
