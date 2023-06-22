import React from 'react';

import styles from './Cards.module.scss';
import imagesFromServer from '../imagesDb.json';

import Card from './Card';

export default function Cards() {
  const images = imagesFromServer;

  return (
    <ul className={styles.cards}>
      {images.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </ul>
  );
}
