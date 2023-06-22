import React from 'react';

import styles from './Card.module.scss';

import favorite from './icons/favorito.png';
import open from './icons/open.png';

export default function Card({ image }) {
  return (
    <li className={styles.card}>
      <img
        src={image.imagem}
        alt={image.titulo}
        className={styles.card__imagem}
      />
      <p className={styles.card__descricao}>{image.titulo}</p>
      <div>
        <p>{image.creditos}</p>
        <span>
          <img src={favorite} alt="ícone coração de curtir" />
          <img src={open} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
}
