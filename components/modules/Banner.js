import Link from "next/link";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.lefts}>
        <h1>SodoFood</h1>
        <h2>Food Delivery and Takeout!</h2>
        <p>
          SodoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </p>
        <Link href="/menu">See ALl</Link>
      </div>
      <div className={styles.right}>
        <img src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
}
