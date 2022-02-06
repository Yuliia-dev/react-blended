import { NavLink, Outlet } from "react-router-dom";
import Features from "../components/features/Features.jsx";

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
  return (
    <>
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
