import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: var(--bg-dark);
`

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
      <Wrapper id={lightmode === 'true' ? 'lightmode' : 'darkmode'}>
        <Header theme={lightmode} changeTheme={changeTheme} />
        <section>{children}</section>
        <Footer />
      </Wrapper>
    );
  } else return 'loading';
}
