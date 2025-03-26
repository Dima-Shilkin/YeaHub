import { questionsApi } from "@/entities/questions/api/questionsApi";
import filtersSlice from "@/entities/filters/slice/filtersSlice"
import { skillsApi } from "@/entities/skills/api/skillsApi";
import { specializationsApi } from "@/entities/specializations/api/specializations";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [questionsApi.reducerPath]: questionsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  [specializationsApi.reducerPath]: specializationsApi.reducer,
  filters: filtersSlice,
});

export default rootReducer;