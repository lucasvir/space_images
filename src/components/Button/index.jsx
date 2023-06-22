import React from 'react'

import styles from './Button.module.scss';

export default function Button({title}) {
  return (
    <button className={styles.button}>{title}</button>
  )
}
