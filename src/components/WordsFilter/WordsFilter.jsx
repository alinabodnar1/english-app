import TextField from '@mui/material/TextField';
import { Container } from './WordFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'store/selectors';
import { setFilterValue } from 'store/filterSlice';

export default function WordsFilter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

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
