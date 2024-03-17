import { configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';
import favoriteMovies from './slice/favoriteMovies';
import wishListMovies from './slice/wishListMovies';
import rating from './slice/rating';

export const store = configureStore({
	reducer: {
		movieList,
		favoriteMovies,
		wishListMovies,
		rating,
	},
});
