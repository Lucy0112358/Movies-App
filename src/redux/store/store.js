import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../slice/movieSlice'; 
import uiReducer from '../slice/uiSlice'; 

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    ui: uiReducer, 
  },
});
