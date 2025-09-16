import styles from "./App.module.css";
import classNames from "classnames/bind";

export default function App() {
  const isCancel = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1 className={`${styles.red_c} ${isCancel ? styles.line_through : ""}`}>
        App Component
      </h1>
      <h1 className={cx("red_c", "line_through")}>App Component</h1>
      <h1 className={cx("red_c", { line_through: isCancel })}>App Component</h1>
    </>
  );
}
