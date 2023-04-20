import { Header } from './index';

import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('Deve renderizar o componente', () => {
    render(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
