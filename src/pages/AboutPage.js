import { NavLink, Outlet } from "react-router-dom";
import Features from "../components/features/Features.jsx";
import { useContext } from "react";
import AppContext from "../context/AppContext.js";
import FunctionContext from "../context/FunctionContext.js";

const array = [
  {
    id: "1",
    title: "Oranges",
  },
  {
    id: "2",
    title: "Kiwi",
  },
  {
    id: "3",
    title: "Banana",
  },
  {
    id: "4",
    title: "Apple",
  },
];
export default function AboutPage() {
  const { name } = useContext(AppContext);
  const { localize } = useContext(FunctionContext);
  console.log(name);
  return (
    <>
      <h1>{localize("aboutTitle")}</h1>
      <Features />
      <ul>
        {array.map((el) => {
          return (
            <li key={el.id}>
              <NavLink to={el.id}>{el.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}
