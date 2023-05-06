import React from 'react';
import WordListItem from './WordListItem';

export default function WordsList({ words, onDelete, onEdit }) {
  return (
    <ul>
      {words.map((word, index) => (
        <WordListItem
          key={word.id}
          word={word}
          index={index}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
