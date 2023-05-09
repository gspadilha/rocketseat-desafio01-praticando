import { render, screen } from '@testing-library/react';

import { Header } from './index';

describe('Componente Header', () => {
  it('Deve renderizar o componente', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
