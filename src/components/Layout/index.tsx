import { ReactNode } from "react";
import logo from "../../assets/logo.svg";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={logo} height={32} role="presentation" aria-label="logo" />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
