import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

export default class WordListItem extends Component {
  state = {
    isEdit: false,
    uaWord: this.props.word.uaWord,
    enWord: this.props.word.enWord,
  };
  handleEdit = () => {
    if (this.state.isEdit) {
      const updatedWord = {
        ...this.props.word,
        enWord: this.state.enWord,
        uaWord: this.state.uaWord,
      };
      this.props.onEdit(updatedWord);
    }
    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { index, word, onDelete } = this.props;
    const { isEdit } = this.state;
    return (
      <li key={word.id}>
        <Checkbox /> <span>{index + 1}</span>{' '}
        {isEdit ? (
          <TextField
            id="outlined-basic"
            label="English"
            variant="outlined"
            onChange={this.onChange}
            name="enWord"
            value={this.state.enWord}
          />
        ) : (
          <span>{word.enWord}</span>
        )}{' '}
        {isEdit ? (
          <TextField
            id="outlined-basic"
            label="Ukrainian"
            variant="outlined"
            name="uaWord"
            onChange={this.onChange}
            value={this.state.uaWord}
          />
        ) : (
          <span>{word.uaWord}</span>
        )}{' '}
        <button onClick={() => onDelete(word.id)} type="button">
          Delete
        </button>{' '}
        <button onClick={this.handleEdit} type="button">
          {isEdit ? 'Save' : 'Edit'}
        </button>
      </li>
    );
  }
}
