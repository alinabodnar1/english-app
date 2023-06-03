import { Container } from 'components/App/App.styled';
import WordsFilter from 'components/WordsFilter/WordsFilter';
import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';

const Home = () => {
  return (
    <Container>
      <WordsForm />
      <WordsFilter />
      <WordsList />
    </Container>
  );
};

export default Home;
