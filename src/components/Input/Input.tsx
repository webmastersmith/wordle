import styles from './Input.module.scss';
import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '@utils';

interface Props {
  addWord: (w: string) => void;
  gameEnd: boolean;
}

export default function Input({ addWord, gameEnd }: Props) {
  const [word, setWord] = React.useState('');
  return (
    <form
      className={styles.input}
      onSubmit={(e) => {
        e.preventDefault();
        // if (word.length !== 5) {
        //   window.alert('Word must be 5 characters.');
        //   return;
        // }
        addWord(word);
        setWord('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameEnd}
        pattern="\w{5}"
        maxLength={5}
        id="guess-input"
        value={word}
        onChange={(e) => {
          // console.log(e.target.value);
          setWord(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
