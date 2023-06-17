import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'store/operations';
import { selectCheckedWords } from 'store/selectors';

const Quiz = () => {
  const checkedWords = useSelector(selectCheckedWords);
  const [quizWords, setQuizWords] = useState(checkedWords);
  const [randomWord, setRandomWord] = useState(
    checkedWords[getRandomIntegerFromInterval(0, checkedWords.length - 1)]
  );

  console.log(randomWord);
  console.log(quizWords);
  console.log(checkedWords);
  function getRandomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return <div>Quiz</div>;
};

export default Quiz;
