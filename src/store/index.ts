import { configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';
import favoriteMovies from './slice/favoriteMovies';
import wishListMovies from './slice/wishListMovies';
import rating from './slice/rating';
import config from './slice/config';
import { movieApi } from './api';

export const store = configureStore({
	reducer: {
		movieList,
		favoriteMovies,
		wishListMovies,
		rating,
		config,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware),
});
