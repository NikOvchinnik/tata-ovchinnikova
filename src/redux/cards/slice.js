import { createSlice } from '@reduxjs/toolkit';

const initialCardsState = {
  cards: [],
  loading: false,
  error: null,
};

const isFulfilled = action =>
  typeof action.type === 'string' && action.type.endsWith('/fulfilled');
const isPending = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = action =>
  typeof action.type === 'string' && action.type.endsWith('/rejected');

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialCardsState,
  extraReducers: builder => {
    builder
      .addMatcher(isFulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addMatcher(isPending, state => {
        state.loading = true;
        state.cards = [];
        state.error = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const cardsReducer = cardsSlice.reducer;
