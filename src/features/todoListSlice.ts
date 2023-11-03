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
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      state.todos.push({
        id: crypto.randomUUID(),
        text: action.payload.text,
        checked: false,
      } as Todo);
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodo: (
      state,
      action: PayloadAction<{ id: string; checked: boolean }>,
    ) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, checked: action.payload.checked }
          : todo,
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
