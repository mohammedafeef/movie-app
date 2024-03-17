import { configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';
import favoriteMovies from './slice/favoriteMovies';
import wishListMovies from './slice/wishListMovies';

export const store = configureStore({
	reducer: {
		movieList,
		favoriteMovies,
		wishListMovies,
	},
});
