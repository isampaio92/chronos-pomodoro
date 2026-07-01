import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Link } from 'react-router';

export function Logo() {
  return (
    <div className={`${styles.logo} ${styles.purple}`}>
      <Link className={styles.logoLink} to='/'>
        <TimerIcon />
        <span>Chronos</span>
      </Link>
    </div>
  );
}
