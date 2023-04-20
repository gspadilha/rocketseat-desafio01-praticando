import { useContext } from 'react';

import { ToDoContext, IToDoContextProps } from '../context/TodoContextProvider';

export const useToDo = (): IToDoContextProps => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error('useToDo sem contexto');
  }

  return context;
};
