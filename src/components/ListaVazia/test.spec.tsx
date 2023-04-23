import { render, screen } from '@testing-library/react';

import { ListaVazia } from './index';

describe('Formulario', () => {
  it('Deve renderizar o componente', () => {
    render(<ListaVazia />);

    expect(
      screen.getByText(/você ainda não tem tarefas cadastradas/i),
    ).toBeInTheDocument();
  });
});
