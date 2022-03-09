import styles from '../constants/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        {new Date().getFullYear()} &copy; Të gjitha të drejtat të rezervuara.
      </p>
    </footer>
  );
}
