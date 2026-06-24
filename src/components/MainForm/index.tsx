import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';
import type { HomeProps } from '../../pages/Home';

export function MainForm({state}: HomeProps) {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          labelText='task'
          id='input'
          type='text'
          placeholder='placeholder'
        />
      </div>

      <div className={styles.formRow}>
        <p>Próximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
        <DefaultButton icon={<StopCircleIcon />} color='red' />
      </div>
    </form>
  );
}
