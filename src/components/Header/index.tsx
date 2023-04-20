import style from './style.module.css';

export function Header() {
  return (
    <header data-testid='header' className={style.header}>
      <img src='./src/assets/images/logo.png' />
    </header>
  );
}
