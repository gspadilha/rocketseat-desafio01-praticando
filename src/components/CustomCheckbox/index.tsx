import { useState } from 'react';

import { IAtividade, useToDo } from '../../hooks/useTodo';

import style from './style.module.css';

type ICustomCheckboxProps = Omit<IAtividade, 'description'>;

export function CustomCheckbox({ id, done }: ICustomCheckboxProps) {
  const { realizarAtividade } = useToDo();

  const [checked, setChecked] = useState(done);

  function handleOnChange(checked: boolean) {
    setChecked(v => !v);
    realizarAtividade(id, checked);
  }

  return (
    <div className={style.wrapper}>
      <label className={style.container}>
        <input
          type='checkbox'
          name='teste'
          checked={checked}
          onChange={() => handleOnChange(!checked)}
        />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
}
