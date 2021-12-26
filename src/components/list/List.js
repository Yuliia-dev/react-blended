import { v4 as uuid } from "uuid";
import styles from "./List.module.css";

export function List({ array }) {
  return (
    <ul className={styles.list}>
      {array.map(({ id, content, link }) => {
        return (
          <li key={id}>
            <a className={styles.link} href={link}>
              {content}
            </a>
          </li>
        );
      })}
    </ul>
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
