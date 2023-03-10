import styles from "./banner.module.scss";

const Banner = props => {
  return <section className={styles.container}>{props.children}</section>;
};

export default Banner;
