import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../features/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todoList: TodoListState}
export type AppDispatch = typeof store.dispatch;
