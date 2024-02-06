import React from "react";
import styles from "./Detailpage.module.css";
export default function Detailpage({ data }) {
  return (
    <div className={styles.container}>
      <img src={`/images/${data.id}.jpeg`} />
      <h1>{data.introduction}</h1>
    </div>
  );
}
