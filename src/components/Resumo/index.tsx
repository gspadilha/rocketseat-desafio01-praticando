import { ITotalizadorAtividade } from '../../context/TodoContextProvider';

import style from './style.module.css';

export function Resumo({ criadas, concluidas }: ITotalizadorAtividade) {
  return (
    <section role='heading' className={style.resumoTarefas}>
      <div className={style.tarefasCriadas}>
        Tarefas Criadas<span>{criadas}</span>
      </div>

      <div className={style.tarefasConcluidas}>
        Concluídas
        <span>{criadas === 0 ? '0' : `${concluidas} de ${criadas}`}</span>
      </div>
    </section>
  );
}
