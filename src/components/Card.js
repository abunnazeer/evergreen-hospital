import styles from './card.module.scss';

const Card = props => {
  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: props.bg,
        padding: props.p,
        boxShadow: props.bs,
        margin: props.m,
        width: props.width,
      }}
    >
      {props.children}
    </section>
  );
};

export default Card;
