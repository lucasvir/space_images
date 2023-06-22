import React from 'react';

import styles from './Populars.module.scss';
import popImgFromDb from './popularImgDb.json';

export default function Populars() {
  const images = popImgFromDb;

  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <img src={image.path} alt={image.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais</button>
    </aside>
  );
}
