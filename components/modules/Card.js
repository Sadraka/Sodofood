import styles from "./Card.module.css";
export default function Card({ text, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.svg}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
