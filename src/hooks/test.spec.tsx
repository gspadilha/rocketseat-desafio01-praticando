import { act, renderHook, waitFor } from '@testing-library/react';

import { TodoProvider, useToDo } from './useTodo';

describe('Testar Context Provider e useTodo', () => {
  it('deve inserir uma primeira atividade com o índice correto', () => {
    const { result } = renderHook(() => useToDo(), { wrapper: TodoProvider });

    act(() => result.current.inserirAtividade('teste'));

    waitFor(() => {
      expect(result.current.atividades).toHaveLength(1);

      expect(result.current.atividades[0].id).toEqual(1);
      expect(result.current.atividades[0].description).toEqual('teste');
      expect(result.current.atividades[0].done).toEqual(false);

      expect(result.current.totalizador.criadas).toEqual(1);
      expect(result.current.totalizador.concluidas).toEqual(0);
    });
  });

  it('deve inserir várias atividades mantendo a ordem dos índices', () => {
    const { result } = renderHook(() => useToDo(), { wrapper: TodoProvider });

    act(() => result.current.inserirAtividade('teste1'));
    act(() => result.current.inserirAtividade('teste2'));

    waitFor(() => {
      expect(result.current.atividades).toHaveLength(2);

      expect(result.current.atividades[0].id).toEqual(1);
      expect(result.current.atividades[0].description).toEqual('teste1');
      expect(result.current.atividades[0].done).toEqual(false);

      expect(result.current.atividades[1].id).toEqual(2);
      expect(result.current.atividades[1].description).toEqual('teste2');
      expect(result.current.atividades[1].done).toEqual(false);

      expect(result.current.totalizador.criadas).toEqual(2);
      expect(result.current.totalizador.concluidas).toEqual(0);
    });
  });

  it('deve deletar uma atividade', () => {
    const { result } = renderHook(() => useToDo(), { wrapper: TodoProvider });

    act(() => result.current.inserirAtividade('teste1'));
    act(() => result.current.inserirAtividade('teste2'));
    act(() => result.current.deletarAtividade(1));

    waitFor(() => {
      expect(result.current.atividades).toHaveLength(1);

      expect(result.current.atividades[0].id).toEqual(2);

      expect(result.current.totalizador.criadas).toEqual(1);
      expect(result.current.totalizador.concluidas).toEqual(0);
    });
  });

  it('deve marcar uma atividade como realizada', () => {
    const { result } = renderHook(() => useToDo(), { wrapper: TodoProvider });

    act(() => result.current.inserirAtividade('teste1'));
    act(() => result.current.realizarAtividade(1, true));

    waitFor(() => {
      expect(result.current.atividades).toHaveLength(1);

      expect(result.current.atividades[0].id).toEqual(1);
      expect(result.current.atividades[0].done).toEqual(true);

      expect(result.current.totalizador.criadas).toEqual(1);
      expect(result.current.totalizador.concluidas).toEqual(1);
    });
  });

  it('deve desmarcar uma atividade realizada', () => {
    const { result } = renderHook(() => useToDo(), { wrapper: TodoProvider });

    act(() => result.current.inserirAtividade('teste1'));
    act(() => result.current.realizarAtividade(1, true));
    act(() => result.current.realizarAtividade(1, false));

    waitFor(() => {
      expect(result.current.atividades).toHaveLength(1);

      expect(result.current.atividades[0].id).toEqual(1);
      expect(result.current.atividades[0].done).toEqual(false);

      expect(result.current.totalizador.criadas).toEqual(1);
      expect(result.current.totalizador.concluidas).toEqual(0);
    });
  });

  it('deve ordenar atividades realizadas', () => {
    const { result } = renderHook(() => useToDo(), { wrapper: TodoProvider });

    act(() => result.current.inserirAtividade('teste1'));
    act(() => result.current.inserirAtividade('teste2'));
    act(() => result.current.inserirAtividade('teste3'));
    act(() => result.current.realizarAtividade(2, true));

    waitFor(() => {
      expect(result.current.atividades).toHaveLength(3);

      expect(result.current.atividades[0].done).toEqual(false);
      expect(result.current.atividades[1].done).toEqual(false);
      expect(result.current.atividades[2].done).toEqual(true);

      expect(result.current.totalizador.criadas).toEqual(3);
      expect(result.current.totalizador.concluidas).toEqual(1);
    });
  });
});
