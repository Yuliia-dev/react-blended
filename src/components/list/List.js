import { v4 as uuid } from "uuid";
import styles from "./List.module.css";
import { NavLink, Outlet } from "react-router-dom";

export function List({ array }) {
  return (
    <>
      <ul className={styles.list}>
        {array.map(({ id, content, link }) => {
          return (
            <li key={id}>
              <NavLink className={styles.link} to={link}>
                {content}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

export function FooterList({ array }) {
  return (
    <ul>
      {array.map((el) => {
        return <li key={uuid()}>{el}</li>;
      })}
    </ul>
  );
}
