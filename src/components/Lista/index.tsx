import { RiDeleteBin6Line } from 'react-icons/ri';

import { CustomCheckbox } from '../CustomCheckbox';
import { ListaVazia } from '../ListaVazia';

import useToDo from '../../hooks/useTodo';

import style from './style.module.css';

export function Lista() {
  const { atividades, deletarAtividade } = useToDo();

  if (atividades.length === 0) {
    return <ListaVazia />;
  }

  return (
    <>
      {atividades.map(item => (
        <div aria-label='lista' key={item.id} className={style.tarefa}>
          <CustomCheckbox id={item.id} done={item.done} />
          <p
            className={item.done ? style.tarefaConcluida : ''}
            tabIndex={item.id}
          >
            {item.description}
          </p>
          <RiDeleteBin6Line
            aria-label='delete-button'
            size={20}
            onClick={() => deletarAtividade(item.id)}
          />
        </div>
      ))}
    </>
  );
}
