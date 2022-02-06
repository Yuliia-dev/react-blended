import { NavLink, Outlet } from "react-router-dom";
import Hero from "../components/hero/Hero";

export default function HomePage() {
  return (
    <>
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
