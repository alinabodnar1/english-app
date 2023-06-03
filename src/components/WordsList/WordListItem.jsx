import React, { useReducer } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { StyledLi } from './WordList.styled';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'changeMode':
      return { ...state, isEdit: !state.isEdit };
    case 'enWord':
      return { ...state, enWord: payload };
    case 'uaWord':
      return { ...state, uaWord: payload };
    default:
      return state;
  }
}
const WordListItem = ({ word, onEdit, onDelete, index, onCheck }) => {
  const [state, dispatch] = useReducer(reducer, {
    isEdit: false,
    uaWord: word.uaWord,
    enWord: word.enWord,
  });
  const handleEdit = () => {
    if (state.isEdit) {
      const updatedWord = {
        ...word,
        enWord: state.enWord,
        uaWord: state.uaWord,
      };
      onEdit(updatedWord);
    }
    dispatch({
      type: 'changeMode',
    });
  };
  const onChange = e => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <StyledLi key={word.id}>
      <Checkbox onClick={() => onCheck(word.id)} checked={word.isChecked} />{' '}
      <span>{index + 1}</span>{' '}
      {state.isEdit ? (
        <TextField
          id="outlined-basic"
          label="English"
          variant="outlined"
          onChange={onChange}
          name="enWord"
          value={state.enWord}
        />
      ) : (
        <span>{word.enWord}</span>
      )}{' '}
      {state.isEdit ? (
        <TextField
          id="outlined-basic"
          label="Ukrainian"
          variant="outlined"
          name="uaWord"
          onChange={onChange}
          value={state.uaWord}
        />
      ) : (
        <span>{word.uaWord}</span>
      )}{' '}
      <button
        className="delete"
        onClick={() => onDelete(word.id)}
        type="button"
      >
        Delete
      </button>{' '}
      <button className="edit" onClick={handleEdit} type="button">
        {state.isEdit ? 'Save' : 'Edit'}
      </button>
    </StyledLi>
  );
};

export default WordListItem;
