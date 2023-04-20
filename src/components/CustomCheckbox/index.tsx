import { useState } from 'react';

import style from './style.module.css';

interface ICustomCheckboxProps {
  done: boolean;
  onDone: (checked: boolean) => void;
}

export function CustomCheckbox({ done, onDone }: ICustomCheckboxProps) {
  const [checked, setChecked] = useState(done);

  function handleOnChange(checked: boolean) {
    setChecked(v => !v);

    if (onDone) {
      onDone(checked);
    }
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
