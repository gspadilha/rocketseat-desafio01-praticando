import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useToDo, { IToDoContextProps } from '../../hooks/useTodo';

import { Formulario } from './index';

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

describe('Componente Formulario', () => {
  beforeEach(() => {
    const useToDoMocked = jest.mocked(useToDo, { shallow: true });
    useToDoMocked.mockReturnValue(mock);
  });

  it('deve renderizar o componente com todos os elementos', () => {
    render(<Formulario />);

    const input = screen.getByRole('textbox', { name: /input/i });
    const button = screen.getByRole('button');

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('deve interagir com input', async () => {
    render(<Formulario />);

    const user = userEvent.setup();

    const input = screen.getByRole('textbox', { name: /input/i });

    user.click(input);
    await user.type(input, 'Testar Formulário');

    expect(input).toHaveDisplayValue('Testar Formulário');
  });

  it('Deve chamar inserirAtividade ao submeter', async () => {
    render(<Formulario />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mock.inserirAtividade).toBeCalledTimes(1);
  });
});
