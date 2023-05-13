import useToDo from '../../hooks/useTodo';

import style from './style.module.css';

export function Resumo() {
  const { totalizador } = useToDo();

  return (
    <section role='heading' className={style.resumoTarefas}>
      <div className={style.tarefasCriadas}>
        Tarefas Criadas<span>{totalizador.criadas}</span>
      </div>

      <div className={style.tarefasConcluidas}>
        Concluídas
        <span>
          {totalizador.criadas === 0
            ? '0'
            : `${totalizador.concluidas} de ${totalizador.criadas}`}
        </span>
      </div>
    </section>
  );
}
