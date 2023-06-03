import Layout from 'components/Layout/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';
import Home from 'pages/Home';
import Quiz from 'pages/Quiz';
import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

export const WordsContext = createContext();

const App = () => {
  const [words, setWords] = useLocalStorage('words', []);
  const [filter, setFilter] = useState('');
  const addWord = word => {
    setWords(prev => [...prev, word]);
  };
  const handleChange = e => {
    setFilter(e.target.value);
  };
  const removeWord = id => {
    setWords(prev => prev.filter(el => el.id !== id));
  };
  const handleCheck = id => {
    setWords(prev =>
      prev.map(el => {
        if (el.id === id) {
          return { ...el, isChecked: !el.isChecked };
        }
        return el;
      })
    );
  };
  const filterWords = () => {
    return words.filter(word => {
      return (
        word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.enWord.toLowerCase().includes(filter.toLowerCase().trim())
      );
    });
  };
  const editWord = word => {
    setWords(prev =>
      prev.map(el => {
        if (el.id === word.id) {
          return word;
        }
        return el;
      })
    );
  };
  return (
    <WordsContext.Provider
      value={{
        editWord,
        removeWord,
        filteredWords: filterWords(),
        handleChange,
        addWord,
        words,
        filter,
        handleCheck,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{' '}
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </WordsContext.Provider>
  );
};

export default App;
