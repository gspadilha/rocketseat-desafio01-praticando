import { IoMdAddCircleOutline } from 'react-icons/io';

import style from './style.module.css';

export function Form() {
  return (
    <div className={style.wrapper}>
      <input
        type='text'
        name='todo'
        placeholder='Adicione uma nova tarefa'
        required
        className={style.input}
      />

      <button type='submit' className={style.button}>
        Criar
        <IoMdAddCircleOutline size={16} />
      </button>
    </div>
  );
}
