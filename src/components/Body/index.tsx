import { Formulario } from '../Formulario';
import { Resumo } from '../Resumo';
import { ListaVazia } from '../ListaVazia';
import { Lista } from '../Lista';

import { useToDo } from '../../hooks/useTodo';

import style from './style.module.css';

export function Body() {
  const {
    atividades,
    inserirAtividade,
    deletarAtividade,
    realizarAtividade,
    totalizador,
  } = useToDo();

  return (
    <div className={style.main}>
      <Formulario inserirAtividade={inserirAtividade} />

      <Resumo
        criadas={totalizador.criadas}
        concluidas={totalizador.concluidas}
      />

      <main className={style.tarefas}>
        {atividades.length === 0 ? (
          <ListaVazia />
        ) : (
          atividades.map(item => (
            <Lista
              key={item.id}
              atividade={item}
              realizarAtividade={realizarAtividade}
              deletarAtividade={deletarAtividade}
            />
          ))
        )}
      </main>
    </div>
  );
}
