import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  state } from "../model/state";
import { toggleItems } from "../helpers/toggleItems";

const initialState = { ...state };


const filtersSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
      state.page = 1;
    },
    setSpecialization: (state, action: PayloadAction<string>) => {
      state.specialization = action.payload;
      state.page = 1;
    },
    setRating: (state, action: PayloadAction<string[]>) => {
      state.rate = action.payload;;
      state.page = 1;
    },
    setComplexity: (state, action: PayloadAction<string[]>) => {
      state.complexity = action.payload;;
      state.page = 1;
    },
    setSkills: (state, action: PayloadAction<string[]>) => {
      state.skills = action.payload;
      state.page = 1;
    },
  },
});

export const {
  setSpecialization,
  setPage,
  setTitle,
  setRating,
  setComplexity,
  setSkills,
} = filtersSlice.actions;

export default filtersSlice.reducer;