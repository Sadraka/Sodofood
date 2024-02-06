import styles from "./Homepage.module.css";
import Banner from "../modules/Banner";
import Attribute from "../modules/Attribute";
import Defination from "../modules/Defination";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attribute />
      <Defination />
      <Instruction />
      <Restrictions />
    </div>
  );
}
