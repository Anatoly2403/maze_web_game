import { createSlice } from "@reduxjs/toolkit";
import { IMazeState } from "../../types/interfaces";
import { generateCells, generateSteps } from "../../utils";
import { mazeReducers } from "./reducers";

const initialState: IMazeState = {
  cells: generateCells(),
  steps: generateSteps(),
};

const mazeSlice = createSlice({
  initialState,
  name: "maze",
  reducers: mazeReducers,
});

export const mazeActions = mazeSlice.actions;
export const mazeReducer = mazeSlice.reducer;
