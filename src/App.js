import "./App.css";
import Header from "./components/header/Header";
import headerLinks from "./headerLinks.json";

// import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";
import { lazy, Suspense } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import AppContext from "./context/AppContext";
import StyleContext from "./context/StyleContext";
import { localize } from "./i18n.js";
import FunctionContext from "./context/FunctionContext";

import { layout } from "./layout/layout.js";
console.log("layout", layout);

const HomePage = lazy(() => import("./pages/HomePage"));
const Stories = lazy(() => import("./pages/Stories"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

// console.log(HomePage);
// console.log(Stories);
// console.log("AppContext", AppContext);

const myContext = { name: "Vlad", array: [] };
const myStyles = { layout };

function App() {
  return (
    <>
      <FunctionContext.Provider value={{ localize }}>
        <AppContext.Provider value={myContext}>
          <StyleContext.Provider value={myStyles}>
            <Container>
              <Header links={headerLinks} />
              <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                  <Route path="/" element={<HomePage />}>
                    <Route path="/users" element={<Users />} index={true} />
                    <Route path="/products" element={<Products />} />
                  </Route>
                  <Route path="about" element={<AboutPage />}>
                    <Route path=":id" element={<Feedback />} />
                  </Route>
                  <Route path="stories" element={<Stories />} />
                </Routes>
              </Suspense>

              {/* <Footer /> */}
            </Container>
          </StyleContext.Provider>
        </AppContext.Provider>
      </FunctionContext.Provider>
    </>
  );
}

export default App;

function Users() {
  return <h1>User</h1>;
}

function Products() {
  return <h1>Products</h1>;
}

function Feedback() {
  const { id } = useParams();
  console.log(id);
  return <h2>Feedback-{id}</h2>;
}
