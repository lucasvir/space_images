import styles from './Header.module.scss';

import logo from './img/logo.png';
import search from './img/search.png';

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo Alura Space" />
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  );
}
