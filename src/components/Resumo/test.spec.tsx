import { render, screen } from '@testing-library/react';

import useToDo, { IToDoContextProps } from '../../hooks/useTodo';

import { Resumo } from './index';

const mock: IToDoContextProps = {
  atividades: [],
  inserirAtividade: jest.fn(),
  deletarAtividade: jest.fn(),
  realizarAtividade: jest.fn(),
  totalizador: {
    criadas: 0,
    concluidas: 0,
  },
};

jest.mock('../../hooks/useTodo');

describe('Componente Resumo', () => {
  describe('', () => {
    beforeEach(() => {
      const useToDoMocked = jest.mocked(useToDo, { shallow: true });
      useToDoMocked.mockReturnValue(mock);
    });

    it('deve renderizar com valores zerados', () => {
      render(<Resumo />);

      const tarefasCriadas = screen.getByText(/tarefas criadas/i);
      const tarefasConcluidas = screen.getByText(/concluídas/i);

      expect(tarefasCriadas).toHaveTextContent('Tarefas Criadas0');
      expect(tarefasConcluidas).toHaveTextContent('Concluídas0');
    });
  });

  describe('', () => {
    beforeEach(() => {
      const useToDoMocked = jest.mocked(useToDo, { shallow: true });

      mock.totalizador.criadas = 1;

      useToDoMocked.mockReturnValue(mock);
    });

    it('deve renderizar com tarefa criada', () => {
      render(<Resumo />);

      const tarefasCriadas = screen.getByText(/tarefas criadas/i);
      const tarefasConcluidas = screen.getByText(/concluídas/i);

      expect(tarefasCriadas).toHaveTextContent('Tarefas Criadas1');
      expect(tarefasConcluidas).toHaveTextContent('Concluídas0 de 1');
    });
  });

  describe('', () => {
    beforeEach(() => {
      const useToDoMocked = jest.mocked(useToDo, { shallow: true });

      mock.totalizador.criadas = 1;
      mock.totalizador.concluidas = 1;

      useToDoMocked.mockReturnValue(mock);
    });

    it('deve renderizar com tarefa concluída', () => {
      render(<Resumo />);

      const tarefasCriadas = screen.getByText(/tarefas criadas/i);
      const tarefasConcluidas = screen.getByText(/concluídas/i);

      expect(tarefasCriadas).toHaveTextContent('Tarefas Criadas1');
      expect(tarefasConcluidas).toHaveTextContent('Concluídas1 de 1');
    });
  });
});
