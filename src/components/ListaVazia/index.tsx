import style from './style.module.css';

export function ListaVazia() {
  return (
    <section aria-label='lista-vazia' className={style.wrapperListaVazia}>
      <img src='./src/assets/images/clipboard.png' />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarifas e organize seus itens a fazer</span>
    </section>
  );
}
