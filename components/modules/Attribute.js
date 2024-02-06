import Apple from "../icons/Apple";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import styles from "./Attribute.module.css";
import Card from "./Card";

export default function Attribute() {
  return (
    <div className={styles.container}>
      <h1>Why us?</h1>
      <div className={styles.cards}>
        <Card text="Fast" icon={<Fast />} />
        <Card text="Best Restaurants" icon={<Food />} />
        <Card text="Your Choice" icon={<Choice />} />
        <Card text="24-7" icon={<Clock />} />
      </div>
    </div>
  );
}
