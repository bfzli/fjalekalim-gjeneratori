import Layout from '../components/Layout';
import styles from '../constants/styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.generator_wrapper}>
            <div className={styles.generator}>d</div>
            <div className={styles.info_wrapper}>
              <div className={styles.stats}></div>
              <div className={styles.ad}></div>
            </div>
          </div>
          <div className={styles.aside}></div>
        </div>
        <div></div>
        {/* <section className={styles.generator}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </section> */}
      </section>
    </Layout>
  );
}
