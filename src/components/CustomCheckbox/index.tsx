import { useState } from 'react';

import style from './style.module.css';

interface ICustomCheckboxProps {
  done: boolean;
}

export function CustomCheckbox({ done }: ICustomCheckboxProps) {
  const [checked, setChecked] = useState(done);

  return (
    <div className={style.wrapper}>
      <label className={style.container}>
        <input
          type='checkbox'
          name='teste'
          checked={checked}
          onChange={() => setChecked(v => !v)}
        />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
}
