import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockData from '../../data/allMovies.json';

const sortedMovies = mockData.TendingNow.sort((a, b) => b.Id - a.Id);

const sessionIds = JSON.parse(sessionStorage.getItem('lastSelectedIds')) || [];

const initialState = {
  allMovies: sortedMovies,
  selectedMovie: {
    Id: "1",
    Title: "The Irishman",
    CoverImage: "FeaturedCoverImage.png",
    TitleImage: "FeaturedTitleImage.png",
    Date: "2021-10-24T12:16:50.894556",
    ReleaseYear: "2021",
    MpaRating: "18+",
    Category: "Movie",
    Duration: "6000",
    Description: "Info About it",
    BackgroundImage: "FeaturedCoverImage.png"
  },
  sessionIds: sessionIds,
};



export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedMovie = action.payload
    },
    setInitialList: (state) => {
      const filteredAndOrdered = state.sessionIds
        .map(id => state.allMovies.find(movie => movie.Id === id))
        .filter(Boolean);

      const remainingMovies = state.allMovies.filter(movie => !state.sessionIds.includes(movie.Id));

      state.allMovies = [...filteredAndOrdered, ...remainingMovies];
    }
  },

  extraReducers: (builder) => {

  },
});

export const {
  setSelectedId,
  setInitialList
} = movieSlice.actions;

export const getAllMovie = (state) => state.movie.allMovies;
export const getSelectedMovie = (state) => state.movie.selectedMovie;


export default movieSlice.reducer;
