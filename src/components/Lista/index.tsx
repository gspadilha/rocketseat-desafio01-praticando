import { RiDeleteBin6Line } from 'react-icons/ri';

import { CustomCheckbox } from '../CustomCheckbox';

import { IAtividade } from '../../hooks/useTodo';

import style from './style.module.css';

interface IListaProps {
  atividade: IAtividade;
  realizarAtividade: (id: number, checked: boolean) => void;
  deletarAtividade: (id: number) => void;
}

export function Lista({
  atividade,
  realizarAtividade,
  deletarAtividade,
}: IListaProps) {
  return (
    <div aria-label='lista' key={atividade.id} className={style.tarefa}>
      <CustomCheckbox
        done={atividade.done}
        onDone={checked => realizarAtividade(atividade.id, checked)}
      />
      <p
        className={atividade.done ? style.tarefaConcluida : ''}
        tabIndex={atividade.id}
      >
        {atividade.description}
      </p>
      <RiDeleteBin6Line
        aria-label='delete-button'
        size={20}
        onClick={() => deletarAtividade(atividade.id)}
      />
    </div>
  );
}
