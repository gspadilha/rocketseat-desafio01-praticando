import { render, screen } from '@testing-library/react';

import { useToDo } from '../../hooks/useTodo';

import { Body } from './index';

let mock = {
  atividades: [
    {
      id: 1,
      description: 'Testar 1',
      done: false,
    },
  ],
  inserirAtividade: jest.fn(),
  deletarAtividade: jest.fn(),
  realizarAtividade: jest.fn(),
  totalizador: {
    criadas: 1,
    concluidas: 0,
  },
};

jest.mock('../../hooks/useTodo');

describe('Componente Body', () => {
  beforeEach(() => {
    const useToDoMocked = jest.mocked(useToDo, { shallow: true });

    mock.atividades = [];
    mock.totalizador.criadas = 0;

    useToDoMocked.mockReturnValueOnce(mock);
  });

  it('deve renderizar o componente Formulario', () => {
    render(<Body />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('deve renderizar o componente Resumo', () => {
    render(<Body />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  describe('se NÃO possuir atividades', () => {
    it('deve renderizar o componente Lista Vazia ', () => {
      render(<Body />);
      expect(screen.getByLabelText('lista-vazia')).toBeInTheDocument();
    });

    it('NÃO deve renderizar o componente Lista', () => {
      render(<Body />);
      expect(screen.queryByLabelText('lista')).not.toBeInTheDocument();
    });
  });

  describe('se possuir 1 atividade', () => {
    const atividades = [
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
      render(<Body />);
      expect(screen.queryByLabelText('lista-vazia')).not.toBeInTheDocument();
    });

    it('deve renderizar o componente Lista com 1 atividade', () => {
      render(<Body />);
      const listaElements = screen.getAllByLabelText('lista');
      expect(listaElements).toHaveLength(atividades.length);
      listaElements.forEach(element => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe('se possuir N atividades', () => {
    const atividades = [
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
      render(<Body />);
      expect(screen.queryByLabelText('lista-vazia')).not.toBeInTheDocument();
    });

    it(`deve renderizar o componente Lista com ${atividades.length} atividades`, () => {
      render(<Body />);
      const listaElements = screen.getAllByLabelText('lista');
      expect(listaElements).toHaveLength(atividades.length);
      listaElements.forEach(element => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
