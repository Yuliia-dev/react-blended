import './App.css';
import Header from './components/header/Header';
import headerLinks from './headerLinks.json';
import Hero from './components/hero/Hero';
import Feature from './components/features/Features';
import Footer from './components/footer/Footer';
import Container from './components/container/Container';

function App() {
  return (
    <>
      <Container>
        <Header links={headerLinks} />
        <Hero />
        <Feature />
        <Footer />
      </Container>
    </>
  );
}

export default App;
