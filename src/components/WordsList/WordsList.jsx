import React from 'react';
import WordListItem from './WordListItem';
import { useSelector } from 'react-redux';
import { selectFilteredWords } from 'store/selectors';

export default function WordsList() {
  const words = useSelector(selectFilteredWords);
  return (
    <ul>
      {words.map((word, index) => (
        <WordListItem key={word.id} word={word} index={index} />
      ))}
    </ul>
  );
}
