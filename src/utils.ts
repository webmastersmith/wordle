import type { Word } from '@types';

// CONSTANTS
export const NUM_OF_GUESSES_ALLOWED = 6;
// colors
export const match = 'green';
export const close = 'yellow';
export const noMatch = 'grey';

// FUNCTIONS
export const range = (size: number, startAt: number = 1, step: number = 1) =>
  [...Array(size).keys()].reduce<number[]>(
    (a, b, i) => (i === 0 ? (a.push(startAt), a) : (a.push(a[i - 1] + step), a)),
    []
  );

export const buildWord = (guessedWord: string, word: string): { correctGuesses: number; newWord: Word[] } => {
  let correctGuesses = 0;
  const newWord = [...guessedWord].map((letter, i) => {
    const letterRegex = new RegExp(letter);
    const w = word.match(letterRegex); // null or regex array.
    // check background color
    let bg = noMatch;
    // regex found if true.
    if (w) {
      // letter match and in same index?
      w.index === i ? (correctGuesses++, (bg = match)) : (bg = close);
    }
    return { id: crypto.randomUUID(), letter, bg };
  });
  return { correctGuesses, newWord };
};

export const unBuildWord = (word: Word[]): string => {
  return word.map(({ id, letter }) => letter).join('');
};

export const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

export const WORDS = [
  'AGENT',
  'WORLD',
  'ABOUT',
  'HEART',
  'WATER',
  'SIXTY',
  'BOARD',
  'MONTH',
  'MUSIC',
  'PARTY',
  'PIANO',
  'MOUTH',
  'WOMAN',
  'SUGAR',
  'AMBER',
  'DREAM',
  'LAUGH',
  'TIGER',
  'EARTH',
  'MONEY',
  'WORDS',
  'SMILE',
  'LEMON',
  'SOUTH',
  'AFTER',
  'STONE',
  'THING',
  'LIGHT',
  'STORY',
  'POWER',
  'TODAY',
  'RANGE',
  'PEARL',
  'VENOM',
  'PROXY',
  'ROUND',
  'HOVER',
  'CANDY',
  'ABOVE',
  'PHONE',
  'OTHER',
  'SMART',
  'BLACK',
  'MAGIC',
  'FRUIT',
  'RADIO',
  'ROYAL',
  'HONEY',
  'FLAKE',
  'SOUND',
];

export const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];
