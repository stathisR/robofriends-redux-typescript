import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger/src";
import robotsReducer from '../features/robots/robotsSlice';
import searchReducer from '../features/search/searchSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
    search: searchReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;