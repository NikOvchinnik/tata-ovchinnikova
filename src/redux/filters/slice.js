import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
  location: '',
  equipment: [],
  type: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    changeFilters(state, action) {
      state.location = action.payload.location;
      state.equipment = action.payload.equipment;
      state.type = action.payload.type;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
