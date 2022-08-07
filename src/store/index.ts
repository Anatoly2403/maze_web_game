import { configureStore } from "@reduxjs/toolkit";
import { mazeReducer } from "./slices";

export const rootStore = configureStore({
  reducer: {
    maze: mazeReducer,
  },
});

export type RootStore = ReturnType<typeof rootStore.getState>;
