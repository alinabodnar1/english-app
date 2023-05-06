import WordsFilter from "./WordsFilter/WordsFilter";
import WordsForm from "./WordsForm/WordsForm";
import WordsList from "./WordsList/WordsList";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    words: [],
    filter: ''
}

  addWord = (word) => {
    this.setState((prevState) => {
      return {
        words: [...prevState.words, word],  
      }
    })
  }
    
  render() {
    return (
      <div>
        <WordsForm addWord={ this.addWord} />
        <WordsFilter />
        <WordsList words={this.state.words}/>
      </div>
    )
  }
}

