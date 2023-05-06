import React from 'react';
import TextField from '@mui/material/TextField';

export default function WordsFilter({ value, onChange }) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
