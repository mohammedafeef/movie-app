import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MoviesListStateType } from './types';
import { Movie } from '@store/types';

const initialState: MoviesListStateType = {
	items: [],
};

const movieListSlice = createSlice({
	name: 'moviesList',
	initialState,
	reducers: {
		loadData: (state, action: PayloadAction<Array<Movie>>) => {
			state.items = action.payload;
		},
	},
});

export const movieListActions = movieListSlice.actions;

export default movieListSlice.reducer;
