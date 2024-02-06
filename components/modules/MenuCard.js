import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./MenuCard.module.css";

export default function MenuCard({ food }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {food.discount !== 0 && <p>{food.discount}%</p>}
        {food.discount !== 0 ? (
          <img
            className={styles.img}
            src={`/images/${food.id}.jpeg`}
            alt="food image"
          />
        ) : (
          <img src={`/images/${food.id}.jpeg`} alt="food image" />
        )}
      </div>
      <div className={styles.name}>
        <h3>{food.name}</h3>
        <div className={styles.country}>
          <Location />

          <p>{food.details[0].Cuisine}</p>
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {food.discount !== 0 ? (
          <p className={styles.discount}>
            <span className={styles.realprice}>{food.price}$</span>
            <span className={styles.line}></span>
            {(food.price * (1 - food.discount / 100)).toFixed(1)}$
          </p>
        ) : (
          <p>{food.price}$</p>
        )}
      </div>
      <Link href={`/menu/${food.id}`}>See Details</Link>
    </div>
  );
}
