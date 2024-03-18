import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieListResponse, MoviesListStateType } from './types';

const initialState: MoviesListStateType = {
	filtering: false,
	items: {
		page: 0,
		results: [],
		total_results: 0,
		total_pages: 0,
	},
	filteredItems: {
		page: 0,
		results: [],
		total_results: 0,
		total_pages: 0,
	},
};

const movieListSlice = createSlice({
	name: 'moviesList',
	initialState,
	reducers: {
		loadData: (state, action: PayloadAction<MovieListResponse>) => {
			if (state.items.page < action.payload.page) {
				state.items = {
					...action.payload,
					results: [...state.items.results, ...action.payload.results],
				};
			}
			state.items = action.payload;
		},
		loadFilteredData: (state, action: PayloadAction<MovieListResponse>) => {
			state.filtering = true;
			state.filteredItems = action.payload;
		},
	},
});

export const movieListActions = movieListSlice.actions;

export default movieListSlice.reducer;
