import { Task } from '../Task';
import style from './style.module.css';

export function List() {
  return (
    <>
      <header className={style.resumoTarefas}>
        <div className={style.tarefasCriadas}>
          Tarefas Criadas <span>5</span>
        </div>

        <div className={style.tarefasConcluidas}>
          Concluídas <span>2 de 5</span>
        </div>
      </header>

      <section className={style.tarefas}>
        <Task done />
        <Task />
        <Task />
      </section>
    </>
  );
}
