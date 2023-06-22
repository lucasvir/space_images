import React from 'react';

import styles from './Footer.module.scss';

import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import twitter from './icons/twitter.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__social}>
        <a href="@">
          <img src={facebook} alt="" />
        </a>
        <a href="@">
          <img src={instagram} alt="" />
        </a>
        <a href="@">
          <img src={twitter} alt="" />
        </a>
      </div>
      <p>Desenvolvido por @lucasvir</p>
    </footer>
  );
}
