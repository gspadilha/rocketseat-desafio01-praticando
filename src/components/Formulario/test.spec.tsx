import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Formulario } from './index';

const inserirAtividade = jest.fn();
const renderFormulario = () =>
  render(<Formulario inserirAtividade={inserirAtividade} />);

describe('Formulario', () => {
  it('Deve renderizar o componente', () => {
    renderFormulario();

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('Deve renderizar o componente com os elementos', () => {
    renderFormulario();

    const input = screen.getByRole('textbox', { name: /input/i });
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Deve chamar inserirAtividade ao submeter', async () => {
    renderFormulario();

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(inserirAtividade).toBeCalledTimes(1);
  });

  it('Deve chamar inserirAtividade ao submeter COM o input do usuário', async () => {
    renderFormulario();

    const inputText = 'teste';
    const input = screen.getByRole('textbox', { name: /input/i });
    await userEvent.type(input, inputText);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(inserirAtividade).toHaveBeenCalledWith(inputText);
  });

  it('Deve interagir com input', async () => {
    renderFormulario();

    const user = userEvent.setup();

    const input = screen.getByRole('textbox', { name: /input/i });

    user.click(input);
    await user.type(input, 'Testar Formulário');

    expect(input).toHaveDisplayValue('Testar Formulário');
  });
});
