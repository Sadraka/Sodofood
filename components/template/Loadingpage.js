import React from "react";
import styles from "./Loadingpage.module.css";

export default function Loadingpage() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div class={styles.ldsripple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
