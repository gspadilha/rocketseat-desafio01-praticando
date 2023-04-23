import { render, screen } from '@testing-library/react';

import { Resumo } from './index';

describe('Resumo', () => {
  it('Deve renderizar com valores zerados', () => {
    render(<Resumo criadas={0} concluidas={0} />);

    const tarefasCriadas = screen.getByText(/tarefas criadas/i);
    const tarefasConcluidas = screen.getByText(/concluídas/i);

    expect(tarefasCriadas).toHaveTextContent('Tarefas Criadas0');
    expect(tarefasConcluidas).toHaveTextContent('Concluídas0');
  });

  it('Deve renderizar com tarefa criada', () => {
    render(<Resumo criadas={1} concluidas={0} />);

    const tarefasCriadas = screen.getByText(/tarefas criadas/i);
    const tarefasConcluidas = screen.getByText(/concluídas/i);

    expect(tarefasCriadas).toHaveTextContent('Tarefas Criadas1');
    expect(tarefasConcluidas).toHaveTextContent('Concluídas0 de 1');
  });

  it('Deve renderizar com tarefa concluída', () => {
    render(<Resumo criadas={1} concluidas={1} />);

    const tarefasCriadas = screen.getByText(/tarefas criadas/i);
    const tarefasConcluidas = screen.getByText(/concluídas/i);

    expect(tarefasCriadas).toHaveTextContent('Tarefas Criadas1');
    expect(tarefasConcluidas).toHaveTextContent('Concluídas1 de 1');
  });
});
