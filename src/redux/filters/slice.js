import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
  search: '',
  category: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    changeFilters(state, action) {
      state.search = action.payload.search;
      state.category = action.payload.category;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
