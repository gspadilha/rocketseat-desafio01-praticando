import { render, screen } from '@testing-library/react';

import { Body } from './index';

let mock = {
  atividades: [
    {
      id: 1,
      description: 'Testar',
      done: false,
    },
  ],
  inserirAtividade: jest.fn(),
  deletarAtividade: jest.fn(),
  realizarAtividade: jest.fn(),
  totalizador: {
    criadas: 0,
    concluidas: 0,
  },
};

jest.mock('../../hooks/useTodo', () => ({
  useToDo: () => mock,
}));

describe('Componente Body', () => {
  it('deve renderizar o componente Formulario', () => {
    render(<Body />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('deve renderizar o componente Resumo', () => {
    render(<Body />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  describe('se NÃO possuir atividades', () => {
    beforeEach(() => {
      mock.atividades = [];
      mock.totalizador.criadas = 0;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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
      mock.atividades = atividades;
      mock.totalizador.criadas = atividades.length;
    });

    afterEach(() => {
      jest.clearAllMocks();
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
      mock.atividades = atividades;
      mock.totalizador.criadas = atividades.length;
    });

    afterEach(() => {
      jest.clearAllMocks();
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
