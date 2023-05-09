import { RiDeleteBin6Line } from 'react-icons/ri';

import { CustomCheckbox } from '../CustomCheckbox';

import { IAtividade } from '../../context/TodoContextProvider';

import style from './style.module.css';

interface IListaProps {
  item: IAtividade;
  realizarAtividade: (id: number, checked: boolean) => void;
  deletarAtividade: (id: number) => void;
}

export function Lista({
  item,
  realizarAtividade,
  deletarAtividade,
}: IListaProps) {
  return (
    <div aria-label='lista' key={item.id} className={style.tarefa}>
      <CustomCheckbox
        done={item.done}
        onDone={checked => realizarAtividade(item.id, checked)}
      />
      <p className={item.done ? style.tarefaConcluida : ''} tabIndex={item.id}>
        {item.description}
      </p>
      <RiDeleteBin6Line size={20} onClick={() => deletarAtividade(item.id)} />
    </div>
  );
}
