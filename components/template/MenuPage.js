import MenuCard from "../modules/MenuCard";
import styles from "./MenuPage.module.css";

export default function MenuPage({ array }) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.cards}>
        {array.map((item) => (
          <MenuCard food={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
