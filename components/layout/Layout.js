import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link href="/">SodoFood!</Link>
        </h1>
        <ul>
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/categoury">CATEGOURY</Link>
          </li>
        </ul>
      </header>

      <div className={styles.div}>{children}</div>

      <footer className={styles.footer}>
        <p>
          Create With <span>💕</span> & NExt.js{" "}
        </p>
      </footer>
    </>
  );
}
