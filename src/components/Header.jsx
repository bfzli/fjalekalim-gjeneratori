import styles from '../constants/styles/Header.module.scss';
import DarkThemeIcon from '../assets/vectors/DarkThemeIcon';
import LightThemeIcon from '../assets/vectors/LightThemeIcon';
import Logo from '../assets/vectors/Logo';

export default function Header({ changeTheme, theme }) {
  return (
    <header className={styles.container}>
      <Logo />

      {/* <Nav className={styles.nav}>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/'>
          Home
        </Link>
      </Nav> */}

      <div className={styles.nav}>
        <div className={styles.theme} onClick={() => changeTheme()}>
          {theme !== 'true' ? <LightThemeIcon /> : <DarkThemeIcon />}
        </div>
        <button className={styles.button}>Na Kontaktoi</button>
      </div>
    </header>
  );
}
