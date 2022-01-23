import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import headerLinks from "./headerLinks.json";
import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";

function App() {
  return (
    <>
      <Container>
        <Header links={headerLinks} />
        <Hero />
        <Footer />
      </Container>
    </>
  );
}

export default App;
