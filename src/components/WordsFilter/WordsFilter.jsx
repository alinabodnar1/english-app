import TextField from '@mui/material/TextField';
import { Container } from './WordFilter.styled';
import { useWordsContext } from 'hooks/useWordsContext';

export default function WordsFilter() {
  const { filter: value, handleChange } = useWordsContext();
  return (
    <Container>
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
