import { fireEvent, render, screen } from '@testing-library/react';

import useToDo, { IAtividade, IToDoContextProps } from '../../hooks/useTodo';

import { Lista } from './index';

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

describe('Componente Lista', () => {
  beforeEach(() => {
    const useToDoMocked = jest.mocked(useToDo, { shallow: true });
    useToDoMocked.mockReturnValue(mock);
  });

  describe('se NÃO possuir atividades', () => {
    it('deve renderizar o componente Lista Vazia ', () => {
      render(<Lista />);

      expect(screen.getByLabelText('lista-vazia')).toBeInTheDocument();
    });

    it('NÃO deve renderizar o componente Lista', () => {
      render(<Lista />);

      expect(screen.queryByLabelText('lista')).not.toBeInTheDocument();
    });
  });

  describe('se possuir uma atividade', () => {
    const atividades: Array<IAtividade> = [
      {
        id: 1,
        description: 'Testar',
        done: false,
      },
    ];

    beforeEach(() => {
      const useToDoMocked = jest.mocked(useToDo, { shallow: true });

      mock.atividades = [...atividades];
      mock.totalizador.criadas = atividades.length;

      useToDoMocked.mockReturnValueOnce(mock);
    });

    it('NÃO deve renderizar o componente Lista Vazia ', () => {
      render(<Lista />);

      expect(screen.queryByLabelText('lista-vazia')).not.toBeInTheDocument();
    });

    it('deve renderizar o componente Lista com uma atividade', () => {
      render(<Lista />);

      const listaElements = screen.getAllByLabelText('lista');

      expect(listaElements).toHaveLength(atividades.length);
      listaElements.forEach(element => {
        expect(element).toBeInTheDocument();
      });
    });

    it('deve chamar a função deletarAtividade ao clicar no ícone', () => {
      render(<Lista />);

      const iconElement = screen.getByLabelText('delete-button');

      fireEvent.click(iconElement);

      expect(mock.deletarAtividade).toHaveBeenCalledTimes(1);
    });
  });

  describe('se possuir mais de uma atividade', () => {
    const atividades: Array<IAtividade> = [
      {
        id: 1,
        description: 'Testar 1',
        done: false,
      },
      {
        id: 2,
        description: 'Testar 2',
        done: true,
      },
    ];

    beforeEach(() => {
      const useToDoMocked = jest.mocked(useToDo, { shallow: true });

      mock.atividades = [...atividades];
      mock.totalizador.criadas = atividades.length;

      useToDoMocked.mockReturnValueOnce(mock);
    });

    it('NÃO deve renderizar o componente Lista Vazia ', () => {
      render(<Lista />);

      expect(screen.queryByLabelText('lista-vazia')).not.toBeInTheDocument();
    });

    it(`deve renderizar o componente Lista com ${atividades.length} atividades`, () => {
      render(<Lista />);

      const listaElements = screen.getAllByLabelText('lista');

      expect(listaElements).toHaveLength(atividades.length);
      listaElements.forEach(element => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
