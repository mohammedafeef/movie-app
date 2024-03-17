import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MoviesListStateType } from './types';
import { Movie } from '@store/types';

const initialState: MoviesListStateType = {
	filtering: false,
	items: [],
	filteredItems: [],
};

const movieListSlice = createSlice({
	name: 'moviesList',
	initialState,
	reducers: {
		loadData: (state, action: PayloadAction<Array<Movie>>) => {
			state.items = action.payload;
		},
		loadFilteredData: (state, action: PayloadAction<Array<Movie>>) => {
			state.filtering = true;
			state.filteredItems = action.payload;
		},
	},
});

export const movieListActions = movieListSlice.actions;

export default movieListSlice.reducer;
