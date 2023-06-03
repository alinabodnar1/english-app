import React, { useReducer } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import { StyledForm } from './WordsForm.styled';
import { useWordsContext } from 'hooks/useWordsContext';

const initialState = {
  uaWord: '',
  enWord: '',
};
function reducer(state, { type, payload }) {
  switch (type) {
    case 'enWord':
      return { ...state, enWord: payload };
    case 'uaWord':
      return { ...state, uaWord: payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
const WordsForm = () => {
  const { addWord } = useWordsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  /* -------------------------------------------------------------------------- */
  const handleChange = e => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };
  /* -------------------------------------------------------------------------- */
  const handleSubmit = e => {
    e.preventDefault();
    const { uaWord, enWord } = state;
    if (!uaWord || !enWord) {
      return alert('Please enter both Ukrainian and English words');
    }
    const word = {
      id: nanoid(5),
      isChecked: false,
      ...state,
    };
    addWord(word);
    dispatch({
      type: 'reset',
    });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Ukrainian"
        variant="outlined"
        name="uaWord"
        value={state.uaWord}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="English"
        variant="outlined"
        name="enWord"
        value={state.enWord}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Add word
      </Button>
    </StyledForm>
  );
};

export default WordsForm;
