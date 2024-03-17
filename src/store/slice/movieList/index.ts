import { createSlice } from '@reduxjs/toolkit';
import { MoviesListStateType } from './types';

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
		{
			id: 3,
			title: 'The Conjuring',
			poster_path:
				'https://resizing.flixster.com/Nx5haL3dpkOg08QLYWQZ-3_z6BQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YWNlZDQxLWIyMDMtNDEzNS1iMjVjLTkzNmQxOTQzYTQ4ZC53ZWJw',
		},
	],
};

const movieListSlice = createSlice({
	name: 'moviesList',
	initialState,
	reducers: {},
});

export const movieListActions = movieListSlice.actions;

export default movieListSlice.reducer;
