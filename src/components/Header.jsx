import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DarkThemeIcon from '../assets/vectors/DarkThemeIcon';
import LightThemeIcon from '../assets/vectors/LightThemeIcon';
import Logo from '../assets/vectors/Logo';

const Container = styled.header`
  width: 100%;
  display: flex;
  padding: var(--spacing-sm) var(--spacing);
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-light);
  border-bottom: 1px solid var(--border);
`;

const Button = styled.button`
  background: var(--gradient);
  padding: var(--spacing-sm) var(--spacing);
  border-radius: var(--radius-sharp);
  border: 0;
  font-size: 0.95em;
  color: var(--color-light-reverse);
  margin-left: 0.75em;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Options = styled.nav`
  display: flex;
  align-items: center;
`;

const Theme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-sharp);
  transition: var(--animate);
  padding: var(--spacing-sm);

  &:hover {
    background: var(--hover);
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header({ changeTheme, theme }) {
  return (
    <Container>
      <Logo />

      {/* <Nav>
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

      <Options>
        <Theme onClick={() => changeTheme()}>
          {theme !== 'true' ? <LightThemeIcon /> : <DarkThemeIcon />}
        </Theme>
        <Button>Na Kontaktoi</Button>
      </Options>
    </Container>
  );
}
