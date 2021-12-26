import "./App.css";
import Header from "./components/header/Header";
import headerLinks from "./headerLinks.json";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header links={headerLinks} />
      <Footer />
    </>
  );
}

export default App;
