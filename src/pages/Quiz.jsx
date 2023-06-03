import { useWordsContext } from 'hooks/useWordsContext';

const Quiz = () => {
  const context = useWordsContext();
  console.log(context);
  return <div>Quiz</div>;
};

export default Quiz;
