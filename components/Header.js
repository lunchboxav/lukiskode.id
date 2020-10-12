import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <img src="/logo.svg"></img>
        </a>
      </Link>
    </div>
  );
}

export default Header;
