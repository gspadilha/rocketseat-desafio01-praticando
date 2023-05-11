import { fireEvent, render, screen } from '@testing-library/react';

import { CustomCheckbox } from './index';

describe('Componente CustomCheckbox', () => {
  const renderComponent = () => {
    const onDone = jest.fn();

    render(<CustomCheckbox done={false} onDone={onDone} />);

    return {
      onDone,
    };
  };

  it('deve renderizar o component', () => {
    renderComponent();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('deve permitir marcar o componente', () => {
    const { onDone } = renderComponent();

    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
    expect(onDone).toHaveBeenCalledTimes(1);
  });
});
