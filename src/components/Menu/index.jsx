import React from 'react';

import styles from './Menu.module.scss';

import iconsFromServer from './icons.json';

const icons = iconsFromServer;

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icons.map((icon) => {
          return (
            <li key={icon.id} className={styles.menu__item}>
              <img src={icon.path} alt={icon.alt} />
              <a href={icon.link}>{icon.link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}