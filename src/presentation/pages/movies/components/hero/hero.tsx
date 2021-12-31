import styles from './hero.module.css';

export default function Zephero(props: any) {
  return (<img className={styles.hero} alt="Main hero" {...props} />);
}