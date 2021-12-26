import styles from "./List.module.css";

export default function List({ array }) {
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
