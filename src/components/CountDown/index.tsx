import styles from './styles.module.css';

export function CountDown() {
  return <div className={`${styles.countdown} ${styles.purple}`}>00:00</div>;
}
