import { Container } from './App.styled';
import WordsFilter from 'components/WordsFilter/WordsFilter';
import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  addWord = word => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, word],
      };
    });
  };
  handleChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  removeWord = id => {
    this.setState(prevState => ({
      words: prevState.words.filter(el => el.id !== id),
    }));
  };
  filterWords = () => {
    const { words, filter } = this.state;
    return words.filter(word => {
      return (
        word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.enWord.toLowerCase().includes(filter.toLowerCase().trim())
      );
    });
  };
  editWord = word => {
    this.setState(prevState => ({
      words: prevState.words.map(el => {
        if (el.id === word.id) {
          return word;
        }
        return el;
      }),
    }));
  };
  /* -------------------------------------------------------------------------- */
  render() {
    const filteredWords = this.filterWords();
    return (
      <Container>
        <WordsForm addWord={this.addWord} />
        <WordsFilter value={this.state.filter} onChange={this.handleChange} />
        <WordsList
          words={filteredWords}
          onDelete={this.removeWord}
          onEdit={this.editWord}
        />
      </Container>
    );
  }
}
