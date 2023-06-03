import React from 'react';
import WordListItem from './WordListItem';
import { useWordsContext } from 'hooks/useWordsContext';

export default function WordsList() {
  const { editWord, removeWord, filteredWords, handleCheck } =
    useWordsContext();
  return (
    <ul>
      {filteredWords.map((word, index) => (
        <WordListItem
          key={word.id}
          word={word}
          index={index}
          onCheck={handleCheck}
          onDelete={removeWord}
          onEdit={editWord}
        />
      ))}
    </ul>
  );
}
