import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './cards/slice';
import { filtersReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    filters: filtersReducer,
  },
});
