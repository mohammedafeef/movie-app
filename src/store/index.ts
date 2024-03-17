import { configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';
import favoriteMovies from './slice/favoriteMovies';

export const store = configureStore({
	reducer: {
		movieList,
		favoriteMovies,
	},
});
