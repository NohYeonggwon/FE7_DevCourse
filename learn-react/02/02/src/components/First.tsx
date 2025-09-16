import FirstChild from "./FirstChild";
import styles from "./First.module.css";

export default function First() {
  return (
    <>
      <h1 className={styles.red_c}>First Component</h1>
      <FirstChild />
    </>
  );
}
