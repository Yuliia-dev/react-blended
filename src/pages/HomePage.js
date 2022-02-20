import { NavLink, Outlet } from "react-router-dom";
import Hero from "../components/hero/Hero";
import { useContext } from "react";
import FunctionContext from "../context/FunctionContext";
import { Button } from "../components/button.js";

export default function HomePage() {
  const { localize } = useContext(FunctionContext);
  return (
    <>
      <h1>{localize("homeTitle")}</h1>
      <Button content={"hello world"} styleType={"light"} shadow />
      {/* <Button content={"hello world"} styleType={"light"} /> */}

      <Hero />
      <ul>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
