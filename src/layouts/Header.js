import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { ArrowRight } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <ul>
        <Link to="www.google.com" className={styles.menu}>
          <li>Home</li>
        </Link>
        <Link to="www.beenai.com" className={styles.menu}>
          <li>About</li>
        </Link>
        <Link to="www.memem.com" className={styles.menu}>
          <li>services</li>
        </Link>
        <Link to="www.gtmx.com" className={styles.menu}>
          <li>Contact us</li>
        </Link>
      </ul>
      <span className={styles.s__menu}>
        <Link to="www.loginme.com" className={styles.menu}>
          <li>Login</li>
        </Link>
        <Link to="www.hime.com" className={styles.join__us}>
          <li className={styles.j__icons}>
            Join us
            <ArrowRight className={styles.icon__size} />
          </li>
        </Link>
      </span>
    </section>
  );
};

export default Header;
