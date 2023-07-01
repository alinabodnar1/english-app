import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCheckedWords, selectWords } from 'store/selectors';
import { Button } from '@mui/material';
import shuffle from 'lodash.shuffle';
import {
  Container,
  ButtonContainer,
  ButtonVariant,
  UaWord,
  Title,
} from './Quiz.styled';

const Quiz = () => {
  const checkedWords = useSelector(selectCheckedWords);
  const words = useSelector(selectWords);
  const [quizWords, setQuizWords] = useState([]);
  const [randomWord, setRandomWord] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    setRandomWord(
      quizWords[getRandomIntegerFromInterval(0, quizWords.length - 1)]
    );
  }, [quizWords, setRandomWord]);

  const getRandomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function getVariants() {
    const variants = new Array(4).fill(null).reduce((acc, _, index) => {
      if (!index) {
        return [randomWord];
      }
      const random = words[getRandomIntegerFromInterval(0, words?.length - 1)];
      if (acc.every(item => item?.id !== random?.id)) {
        return [...acc, random];
      } else {
        let word = null;
        for (let item of words) {
          if (acc.every(word => word?.id !== item?.id)) {
            word = item;
            break;
          }
        }
        return [...acc, word];
      }
    }, []);
    return shuffle(variants);
  }
  const variants = getVariants();

  const handleStartQuiz = () => {
    setQuizWords(checkedWords);
  };

  function handleChooseVariant(id) {
    const undatedQuizWords = quizWords.filter(word => word.id !== id);
    if (randomWord.id === id) {
      setQuizWords(undatedQuizWords);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setQuizWords(undatedQuizWords);
    }
  }
  return (
    <Container>
      <Title>Quiz</Title>

      <ButtonContainer>
        <Button variant="contained" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      </ButtonContainer>

      {randomWord && (
        <div>
          <p>
            Correct answers:
            {correctAnswers}/{checkedWords.length}
          </p>
          <UaWord>{randomWord.uaWord}</UaWord>
          {!variants.includes(null) &&
            variants.map(variant => (
              <ButtonVariant>
                <Button
                  variant="contained"
                  key={variant.id}
                  onClick={() => handleChooseVariant(variant.id)}
                >
                  {variant.enWord}
                </Button>
              </ButtonVariant>
            ))}
        </div>
      )}
    </Container>
  );
};

export default Quiz;
