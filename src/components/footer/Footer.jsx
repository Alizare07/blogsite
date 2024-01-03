import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AliZdev</div>
      <div className={styles.text}>
        AliZdev creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
}
