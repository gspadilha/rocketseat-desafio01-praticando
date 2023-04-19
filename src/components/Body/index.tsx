import { Form } from '../Form';
import { List } from '../List';
import style from './style.module.css';

export function Body() {
  return (
    <main className={style.main}>
      <Form />
      <List />
    </main>
  );
}
