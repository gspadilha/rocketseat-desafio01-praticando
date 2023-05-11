import style from './style.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <img src='/assets/images/logo.png' alt='Logo do Site' />
    </header>
  );
}
