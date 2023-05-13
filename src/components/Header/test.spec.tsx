import { render, screen } from '@testing-library/react';

import { Header } from './index';

describe('Componente Header', () => {
  it('deve renderizar o componente', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
