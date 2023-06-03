import { WordsContext } from 'components/App/App';
import { useContext } from 'react';

export const useWordsContext = () => {
  return useContext(WordsContext);
};
