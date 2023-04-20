import { render, screen } from '@testing-library/react';

import { ListaVazia } from './index';

const componente = <ListaVazia />;

describe('Formulario', () => {
  it('Deve renderizar o componente', () => {
    render(componente);

    expect(screen.getByTestId('lista_vazia')).toBeInTheDocument();
  });
});
