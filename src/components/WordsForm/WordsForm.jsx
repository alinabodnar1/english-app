import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

export default class WordsForm extends Component {
    state = {
        uaWord: '',
        enWord: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:  e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const word = {
            id: nanoid(5),
            isChecked: false,
            ...this.state
        }
        this.props.addWord(word);
        
        this.setState({
            uaWord: '',
            enWord: ''
        }) 
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <TextField
                id="outlined-basic"
                label="Ukrainian"
                variant="outlined"
                name="uaWord"
                value={this.state.uaWord}
                onChange={this.handleChange} />
            
            <TextField
                id="outlined-basic"
                label="English"
                variant="outlined"
                name="enWord"
                value={this.state.enWord}
                onChange={this.handleChange}
            />
            <Button variant="contained" type="submit">Add word</Button>
        </form>
    )
  }
}
