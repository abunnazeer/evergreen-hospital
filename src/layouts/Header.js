// import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { ArrowRight } from "react-bootstrap-icons";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <ul>
        <a href="#" className={styles.menu}>
          <li>Home</li>
        </a>
        <a href="#" className={styles.menu}>
          <li>About</li>
        </a>
        <a href="#" className={styles.menu}>
          <li>services</li>
        </a>
        <a href="#" className={styles.menu}>
          <li>Contact us</li>
        </a>
      </ul>
      <span className={styles.s__menu}>
        <a href="#" className={styles.menu}>
          <li>Login</li>
        </a>
        <a href="#" className={styles.join__us}>
          <li className={styles.j__icons}>
            Join us
            <ArrowRight className={styles.icon__size} />
          </li>
        </a>
      </span>
    </section>
  );
};

export default Header;
