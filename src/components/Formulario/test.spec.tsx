import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Formulario } from './index';

const inserirAtividade = jest.fn();
const componente = <Formulario inserirAtividade={inserirAtividade} />;

describe('Formulario', () => {
  it('Deve renderizar o componente', () => {
    render(componente);

    expect(screen.getByTestId('formulario')).toBeInTheDocument();
  });

  it('Deve renderizar o componente com os elementos', () => {
    render(componente);

    const input = screen.getByTestId('formulario-input');
    const button = screen.getByTestId('formulario-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Deve chamar inserirAtividade ao submeter', async () => {
    render(componente);

    const form = screen.getByTestId('formulario');

    await fireEvent.submit(form);

    expect(inserirAtividade).toBeCalledTimes(1);
  });

  it('Deve chamar inserirAtividade ao submeter com o input do usuário', async () => {
    render(componente);

    const inputText = 'teste';

    const form = screen.getByTestId('formulario');
    const input = screen.getByTestId('formulario-input');

    await userEvent.type(input, inputText);
    await fireEvent.submit(form);

    expect(inserirAtividade).toHaveBeenCalledWith(inputText);
  });
});
