import "./App.css";
import Header from "./components/header/Header";
import headerLinks from "./headerLinks.json";

function App() {
  return (
    <>
      <Header links={headerLinks} />
    </>
  );
}

export default App;
