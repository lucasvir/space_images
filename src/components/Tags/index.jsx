import React from 'react';

import styles from './Tags.module.scss';

import images from '../Gallery/imagesDb.json';

export default function Tags({ tags, filter, defaultFilter }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return <li key={tag} onClick={() => filter(tag)}>{tag}</li>;
        })}
        <li onClick={() => defaultFilter(images)}>Todas</li>
      </ul>
    </div>
  );
}
