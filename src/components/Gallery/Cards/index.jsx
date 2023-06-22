import React from 'react';

import styles from './Cards.module.scss';

import Card from './Card';

export default function Cards({ data }) {
  return (
    <ul className={styles.cards}>
      {data.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </ul>
  );
}
