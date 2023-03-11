import styles from './flex.module.scss';
const Flex = props => {
  return <section className={styles.container}>{props.children}</section>;
};
export default Flex;
