import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import todoListReducer from '../features/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
