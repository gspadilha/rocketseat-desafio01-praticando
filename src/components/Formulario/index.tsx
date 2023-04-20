import { FormEvent, useEffect, useRef, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

import style from './style.module.css';

interface IFormularioProps {
  inserirAtividade: (tarefa: string) => void;
}

export function Formulario({ inserirAtividade }: IFormularioProps) {
  const [tarefa, setTarefa] = useState('');

  const refTarefa = useRef<HTMLInputElement>(null);

  function inserirTarefa(event: FormEvent) {
    event.preventDefault();
    inserirAtividade(tarefa);
    setTarefa('');
    refTarefa?.current?.focus();
  }

  function validarTarefa(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity('Este campo deve ser informado!');
  }

  useEffect(() => {
    refTarefa?.current?.focus();
  }, []);

  return (
    <form className={style.wrapperBody} onSubmit={e => inserirTarefa(e)}>
      <input
        type='text'
        name='todo'
        placeholder='Adicione uma nova tarefa'
        className={style.input}
        value={tarefa}
        onChange={e => {
          e.currentTarget.setCustomValidity('');
          setTarefa(e.currentTarget.value);
        }}
        ref={refTarefa}
        onInvalid={validarTarefa}
        required
      />

      <button type='submit' className={style.button}>
        Criar
        <IoMdAddCircleOutline size={16} />
      </button>
    </form>
  );
}
