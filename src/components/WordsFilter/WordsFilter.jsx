import React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from './WordFilter.styled';

export default function WordsFilter({ value, onChange }) {
  return (
    <Container>
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}
