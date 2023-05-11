import { fireEvent, render, screen } from '@testing-library/react';

import { Lista } from './index';

import { IAtividade } from '../../hooks/useTodo';

describe('Componente Lista', () => {
  const renderComponent = () => {
    const atividade: IAtividade = {
      id: 1,
      description: 'Teste',
      done: false,
    };
    const realizarAtividade = jest.fn();
    const deletarAtividade = jest.fn();

    render(
      <Lista
        atividade={atividade}
        realizarAtividade={realizarAtividade}
        deletarAtividade={deletarAtividade}
      />,
    );

    return {
      realizarAtividade,
      deletarAtividade,
    };
  };

  it('deve renderizar o component', () => {
    renderComponent();
    expect(screen.getByLabelText('lista')).toBeInTheDocument();
  });

  it('deve chamar a função realizarAtividade ao marcar o checkbox', () => {
    const { realizarAtividade } = renderComponent();

    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxElement).not.toBeChecked();
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();

    expect(realizarAtividade).toHaveBeenCalledTimes(1);
  });

  it('deve chamar a função deletarAtividade ao clicar no ícone', () => {
    const { deletarAtividade } = renderComponent();

    const iconElement = screen.getByLabelText('delete-button');

    fireEvent.click(iconElement);

    expect(deletarAtividade).toHaveBeenCalledTimes(1);
  });
});
