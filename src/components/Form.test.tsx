import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Form from './Form';

describe('Form', () => {
  it.todo(
    'renders a form where users can create new todo items and add them to the todo list',
    () => {
      // Setup
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Form />
          </Provider>
        </MemoryRouter>,
      );
      // Verify
      expect(screen.getByRole(''));
    },
  );
});
