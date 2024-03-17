import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MoviesListStateType } from './types';
import { Movie } from 'store/types';

const initialState: MoviesListStateType = {
	items: [
		{
			id: 1,
			title: 'The Conjuring',
			poster_path:
				'https://resizing.flixster.com/Nx5haL3dpkOg08QLYWQZ-3_z6BQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YWNlZDQxLWIyMDMtNDEzNS1iMjVjLTkzNmQxOTQzYTQ4ZC53ZWJw',
		},
		{
			id: 2,
			title: 'The Conjuring',
			poster_path:
				'https://resizing.flixster.com/Nx5haL3dpkOg08QLYWQZ-3_z6BQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YWNlZDQxLWIyMDMtNDEzNS1iMjVjLTkzNmQxOTQzYTQ4ZC53ZWJw',
		},
	],
};

const favoriteMoviesSlice = createSlice({
	name: 'favoriteMovies',
	initialState,
	reducers: {
		addMovie: (state, action: PayloadAction<Movie>) => {
			const movie = state.items.find((movie) => movie.id === action.payload.id);
			if (!movie) {
				state.items = [...state.items, action.payload];
			}
		},
		removeMovie: (state, action: PayloadAction<Movie>) => {
			state.items = state.items.filter(
				(movie) => movie.id !== action.payload.id
			);
		},
	},
});

export const favoriteMoviesActions = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
