import { RiDeleteBin6Line } from 'react-icons/ri';

import { CustomCheckbox } from '../CustomCheckbox';

import style from './style.module.css';

interface ITaskProps {
  done?: boolean;
}

export function Task({ done = false }: ITaskProps) {
  return (
    <div className={style.tarefa}>
      <CustomCheckbox done={done} />
      <label className={done ? style.tarefaConcluida : ''}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </label>
      <RiDeleteBin6Line size={20} />
    </div>
  );
}
