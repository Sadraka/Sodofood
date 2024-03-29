import React from "react";
import styles from "./Restrictions.module.css";
export default function Restrictions() {
  return (
    <div className={styles.container}>
      <h2>Restrictions!</h2>
      <p>
        Prohibited items. Merchants may only offer to sell items expressly
        permitted by their agreement with Uber. A merchant cannot offer
        specially regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Uber Eats menu.
      </p>
    </div>
  );
}
