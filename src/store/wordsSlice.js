import { createSlice } from '@reduxjs/toolkit';
import { addWord, deleteWord, editWord, fetchWords } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const wordsSlice = createSlice({
  name: 'words',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchWords.pending, handlePending)
      .addCase(fetchWords.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchWords.rejected, handleRejected)
      .addCase(deleteWord.pending, handlePending)
      .addCase(deleteWord.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(word => {
          return word.id === payload;
        });
        state.items.splice(index, 1);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteWord.rejected, handleRejected)
      .addCase(editWord.pending, handlePending)
      .addCase(editWord.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(word => word.id === payload.id);
        state.items.splice(index, 1, payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(editWord.rejected, handleRejected)
      .addCase(addWord.pending, handlePending)
      .addCase(addWord.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addWord.rejected, handleRejected);
  },
});

export const wordsReducer = wordsSlice.reducer;
