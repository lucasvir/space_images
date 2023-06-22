import React, { useState } from 'react';

import styles from './Gallery.module.scss';
import Tags from '../Tags';
import Cards from './Cards';

import imagesFromServer from './imagesDb.json';

export default function Gallery() {
  const [itens, setItens] = useState(imagesFromServer);
  const tags = [...new Set(imagesFromServer.map((image) => image.tag))];

  const handleFilterByTags = (tag) => {
    const imgsFilteredTags = imagesFromServer.filter(image => {
      return image.tag === tag;
    })

    setItens(imgsFilteredTags);
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filter={handleFilterByTags} defaultFilter={setItens}/>
      <Cards data={itens} />
    </section>
  );
}
