import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface IAtividade {
  id: number;
  description: string;
  done: boolean;
}

export interface ITotalizadorAtividade {
  criadas: number;
  concluidas: number;
}

export interface IToDoContextProps {
  atividades: Array<IAtividade>;
  totalizador: ITotalizadorAtividade;
  inserirAtividade: (description: string) => void;
  deletarAtividade: (id: number) => void;
  realizarAtividade: (id: number, checked: boolean) => void;
}

export const ToDoContext = createContext<IToDoContextProps>(
  {} as IToDoContextProps,
);

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<ITodoProviderProps> = ({
  children,
}: ITodoProviderProps) => {
  const [atividades, setAtividades] = useState<Array<IAtividade>>([]);
  const [totalizador, setTotalizador] = useState<ITotalizadorAtividade>({
    criadas: 0,
    concluidas: 0,
  });

  useEffect(() => {
    const totalConcluidas = atividades.reduce(
      (acc, item) => (item.done ? acc + 1 : acc),
      0,
    );

    setTotalizador({ criadas: atividades.length, concluidas: totalConcluidas });
  }, [atividades]);

  function getMaxId() {
    if (atividades.length === 0) {
      return 1;
    }

    return Math.max(...atividades.map(item => item.id)) + 1;
  }

  function inserirAtividade(description: string) {
    const novaAtividade: IAtividade = {
      id: getMaxId(),
      description,
      done: false,
    };

    setAtividades(atividadesAntigas => [...atividadesAntigas, novaAtividade]);
  }

  function deletarAtividade(id: number) {
    const atividadesRestantes = atividades.filter(item => item.id !== id);

    setAtividades(atividadesRestantes);
  }

  function compararMarcadas(x: IAtividade, y: IAtividade) {
    if (x.done === y.done) {
      return 0;
    }

    return x.done ? 1 : -1;
  }

  function realizarAtividade(id: number, checked: boolean) {
    const listagem = atividades
      .map(item => (item.id === id ? { ...item, done: checked } : item))
      .sort((x, y) => compararMarcadas(x, y) || x.id - y.id);

    setAtividades(listagem);
  }

  const value = useMemo(() => {
    return {
      atividades,
      inserirAtividade,
      deletarAtividade,
      realizarAtividade,
      totalizador,
    };
  }, [atividades, totalizador]);

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export const useToDo = (): IToDoContextProps => {
  return useContext(ToDoContext);
};
