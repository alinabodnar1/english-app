import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648d96832de8d0ea11e802a7.mockapi.io';
export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/words');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (wordId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/words/${wordId}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async (word, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/words/${word.id}`, word);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'words/addWord',
  async (word, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/words`, word);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
