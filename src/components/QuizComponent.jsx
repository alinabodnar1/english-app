import React, { useMemo, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedWords } from 'store/selectors';
import shuffle from 'lodash.shuffle';
import TextField from '@mui/material/TextField';
import { editWord } from 'store/operations';

export default function QuizComponent() {
  const checkedWords = useSelector(selectCheckedWords);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const dispatch = useDispatch();
  const randomWord = shuffle(checkedWords)[0];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const ref = useMemo(() => checkedWords.length, []);
  const ref = useRef(checkedWords.length);
  console.log(ref.current);

  const handleSubmit = e => {
    e.preventDefault();
    const inputWord = e.target.uaWord.value;
    if (inputWord === randomWord.enWord) {
      setCorrectAnswers(prev => prev + 1);
    }
    dispatch(editWord({ id: randomWord.id, isChecked: false }));
    e.target.reset();
  };
  if (!ref.current) {
    return <p>Check some words in your vocabulary</p>;
  }

  return (
    <div>
      {checkedWords.length && ref.current ? (
        <>
          <p>
            {correctAnswers}/{ref.current}
          </p>
          <p>{randomWord?.uaWord}</p>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Ukrainian"
              variant="outlined"
              name="uaWord"
            />
            <Button type="submit">Check answer</Button>
          </form>
        </>
      ) : (
        <p>
          Your result is {correctAnswers}/{ref.current}
        </p>
      )}
    </div>
  );
}
