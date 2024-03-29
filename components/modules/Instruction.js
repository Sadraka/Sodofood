import React from "react";
import styles from "./Instruction.module.css";
export default function Instruction() {
  return (
    <div className={styles.container}>
      <h2>How to Order?</h2>
      <ul>
        <li>Sign in (or create an account) and set your delivery address.</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap “Add to Cart”.</li>
        <li>To place your order, select “View cart” or “Checkout”.</li>
        <li>Review your order and tap “Place Order”...</li>
        <li>Track your order progress.</li>
      </ul>
    </div>
  );
}
