import { Formulario } from '../Formulario';
import { Resumo } from '../Resumo';
import { Lista } from '../Lista';

import style from './style.module.css';

export function Body() {
  return (
    <div className={style.main}>
      <Formulario />

      <Resumo />

      <main className={style.tarefas}>
        <Lista />
      </main>
    </div>
  );
}
