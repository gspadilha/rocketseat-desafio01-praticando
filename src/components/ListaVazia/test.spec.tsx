import { render, screen } from '@testing-library/react';

import { ListaVazia } from './index';

describe('Componente Formulário', () => {
  it('Deve renderizar o componente', () => {
    render(<ListaVazia />);

    expect(
      screen.getByText(/Você ainda não tem tarefas cadastradas/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Crie tarifas e organize seus itens a fazer/i),
    ).toBeInTheDocument();
  });
});
