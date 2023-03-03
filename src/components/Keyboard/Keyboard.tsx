import styles from './Keyboard.module.scss';
import { keyboard } from '@utils';
import type { Word } from '@types';

interface Props {
  guessedWords: Word[][];
}
export default function Keyboard({ guessedWords }: Props) {
  return (
    <div className={styles.keyboard}>
      {keyboard.map((keys, i) => {
        return (
          <div className={styles.row} key={i}>
            {keys.map((key) => {
              let backgroundColor = '#efefef';
              for (const words of guessedWords) {
                for (const { letter, bg } of words) {
                  if (letter === key) {
                    backgroundColor = bg;
                  }
                }
              }
              return (
                <span key={key} className={styles.cell} style={{ backgroundColor }}>
                  {key}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
