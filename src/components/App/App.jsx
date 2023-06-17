import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Quiz from 'pages/Quiz';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchWords } from 'store/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />{' '}
        <Route path="quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
};

export default App;
