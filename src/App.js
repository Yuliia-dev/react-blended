import "./App.css";
import Header from "./components/header/Header";
import headerLinks from "./headerLinks.json";

import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const Stories = lazy(() => import("./pages/Stories"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

console.log(HomePage);
console.log(Stories);

function App() {
  return (
    <>
      <Container>
        <Header links={headerLinks} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/users" element={<Users />} index={true} />
              <Route path="/products" element={<Products />} />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="stories" element={<Stories />} />
          </Routes>
        </Suspense>

        {/* <Footer /> */}
      </Container>
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
