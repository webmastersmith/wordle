import styles from './Banner.module.scss';

interface Props {
  isWinner: boolean;
  secretWord: string;
  guesses: number;
}
export default function Banner({ isWinner, secretWord, guesses }: Props) {
  const BGcolor = isWinner ? 'green' : 'red';

  return (
    <div className={`${styles.wrapper} ${styles[BGcolor]}`}>
      {isWinner ? (
        <p>
          <span className={styles.bold}>Congratulations!</span> Got it in{' '}
          <span className={styles.bold}>{guesses} guesses</span>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <span className={styles.bold}>{secretWord}</span>.
        </p>
      )}
    </div>
  );
}
