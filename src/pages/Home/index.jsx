import styles from './Home.module.scss';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Populars from '../../components/Populars';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.principal__galeria}>
          <Gallery />
          <Populars />
        </div>
      </main>
      <Footer />
    </>
  );
}
