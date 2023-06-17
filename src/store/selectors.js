import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;
export const selectFilter = state => state.filter;
export const selectFilteredWords = createSelector(
  [selectWords, selectFilter],
  (words, filter) => {
    return words.filter(word =>
      word.enWord
        .concat(word.uaWord)
        .toLowerCase()
        .includes(filter.toLowerCase().trim())
    );
  }
);
export const selectCheckedWords = createSelector([selectWords], words =>
  words.filter(({ isChecked }) => isChecked)
);
