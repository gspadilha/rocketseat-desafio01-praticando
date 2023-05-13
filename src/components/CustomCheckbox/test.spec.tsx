import { fireEvent, render, screen } from '@testing-library/react';

import useToDo, { IToDoContextProps } from '../../hooks/useTodo';

import { CustomCheckbox } from './index';

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

describe('Componente CustomCheckbox', () => {
  beforeEach(() => {
    const useToDoMocked = jest.mocked(useToDo, { shallow: true });
    useToDoMocked.mockReturnValue(mock);
  });

  it('deve renderizar o componente', () => {
    render(<CustomCheckbox id={1} done={false} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('deve renderizar o componente marcado', () => {
    render(<CustomCheckbox id={1} done={true} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('deve permitir marcar o componente', () => {
    render(<CustomCheckbox id={0} done={false} />);

    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
    expect(mock.realizarAtividade).toBeCalledTimes(1);
  });
});
