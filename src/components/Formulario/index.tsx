import { FormEvent, useEffect, useRef, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

import useToDo from '../../hooks/useTodo';

import style from './style.module.css';

export function Formulario() {
  const { inserirAtividade } = useToDo();

  const [tarefa, setTarefa] = useState('');

  const refTarefa = useRef<HTMLInputElement>(null);

  function inserirTarefa(event: FormEvent) {
    event.preventDefault();
    inserirAtividade(tarefa);
    setTarefa('');
    refTarefa?.current?.focus();
  }

  /* c8 ignore start */
  function validarTarefa(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity('Este campo deve ser informado!');
  }
  /* c8 ignore end */

  useEffect(() => {
    refTarefa?.current?.focus();
  }, []);

  return (
    <form
      aria-label='form'
      className={style.wrapperBody}
      onSubmit={e => inserirTarefa(e)}
    >
      <input
        type='text'
        id='todo'
        name='todo'
        aria-label='input'
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
