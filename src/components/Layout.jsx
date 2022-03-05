import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const theme = 'darkmode';
  return (
    <main id={theme === 'lightmode' ? 'lightmode' : 'darkmode'}>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
