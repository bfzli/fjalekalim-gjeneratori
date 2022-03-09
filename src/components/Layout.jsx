import { useState, useEffect } from 'react';
import styled from '../constants/styles/Layout.module.scss';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const [lightmode, setLightmode] = useState(null);

  const checkTheme = () => {
    const currentTheme = localStorage.getItem('lightmode');

    switch (currentTheme) {
      case 'lightmode':
        setLightmode('true');
        break;
      default:
        setLightmode('false');
        break;
    }

    if (localStorage.getItem('lightmode') === null) {
      setLightmode('true');
      localStorage.setItem('lightmode', 'true');
    }
  };

  const changeTheme = () => {
    switch (lightmode) {
      case 'true':
        setLightmode('false');
        localStorage.setItem('lightmode', 'false');
        break;
      default:
        setLightmode('true');
        localStorage.setItem('lightmode', 'true');
        break;
    }
  };

  useEffect(() => checkTheme(), []);

  if (lightmode !== null) {
    return (
      <main
        className={styled.container}
        id={lightmode === 'true' ? 'lightmode' : 'darkmode'}>
        <Header theme={lightmode} changeTheme={changeTheme} />
        <section>{children}</section>
        <Footer />
      </main>
    );
  } else return 'loading';
}
