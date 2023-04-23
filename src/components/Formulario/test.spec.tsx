import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { testarValidacaoDoNavegador } from '../../../test/jest/__utils__/form';

import { Formulario } from './index';

const inserirAtividade = jest.fn();
const renderFormulario = () =>
  render(<Formulario inserirAtividade={inserirAtividade} />);

let componenteRenderizado: RenderResult;

describe('Formulario', () => {
  it('Deve renderizar o componente', () => {
    renderFormulario();
    expect(screen.getByTestId('formulario')).toBeInTheDocument();
  });

  it('Deve renderizar o componente com os elementos', () => {
    renderFormulario();

    const input = screen.getByTestId('formulario-input');
    const button = screen.getByTestId('formulario-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Deve chamar inserirAtividade ao submeter', async () => {
    renderFormulario();

    const form = screen.getByTestId('formulario');

    await fireEvent.submit(form);

    expect(inserirAtividade).toBeCalledTimes(1);
  });

  it('Deve chamar inserirAtividade ao submeter COM o input do usuário', async () => {
    renderFormulario();

    const inputText = 'teste';
    const input = screen.getByTestId('formulario-input');
    await userEvent.type(input, inputText);

    const form = screen.getByTestId('formulario');
    await fireEvent.submit(form);

    expect(inserirAtividade).toHaveBeenCalledWith(inputText);
  });
});
