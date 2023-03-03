import styles from './Grid.module.scss';
import { range, buildWord, NUM_OF_GUESSES_ALLOWED } from '@utils';
import React from 'react';
import Input from '@components/Input/Input';
import Keyboard from '@components/Keyboard/Keyboard';
import Banner from '@components/Banner/Banner';

import type { Word } from '@types';

interface Props {
  word: string;
}
export default function Grid({ word }: Props) {
  console.log('secretWord', word);
  const [words, setWords] = React.useState<Word[][]>([]);
  // const [guessedWords, setGuessedWords] = React.useState<string[]>([]);
  const [isWinner, setIsWinner] = React.useState<boolean>(false);
  const [gameEnd, setGameEnd] = React.useState<boolean>(false);

  function addWord(guessedWord: string) {
    // setGuessedWords([...guessedWords, guessedWord]);
    const { correctGuesses, newWord } = buildWord(guessedWord, word);
    if (words.length === 5) {
      setGameEnd(true);
    }
    if (correctGuesses === 5) {
      setIsWinner(true);
      setGameEnd(true);
    }
    setWords([...words, newWord]);
  }
  // React.useEffect(() => {
  //   console.log(guessedWords);
  // }, [guessedWords]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {range(NUM_OF_GUESSES_ALLOWED).map((row, i) => {
          return (
            <div className={styles.row} key={i}>
              {words?.[i]
                ? words[i].map(({ id, letter, bg }, j) => {
                    return (
                      <div className={styles.cell} key={id} style={{ backgroundColor: bg }}>
                        {letter}
                      </div>
                    );
                  })
                : range(5).map((col, j) => {
                    // no word to process.
                    return <div className={styles.cell} key={j}></div>;
                  })}
            </div>
          );
        })}
      </div>

      <Input addWord={addWord} gameEnd={gameEnd} />
      <Keyboard guessedWords={words} />
      {gameEnd && <Banner isWinner={isWinner} guesses={words.length} secretWord={word} />}
    </div>
  );
}
