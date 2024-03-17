import { configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';
import favoriteMovies from './slice/favoriteMovies';
import wishListMovies from './slice/wishListMovies';
import rating from './slice/rating';
import config from './slice/config';
import appState from './slice/appState';
import { movieApi } from './api';

export const store = configureStore({
	reducer: {
		movieList,
		favoriteMovies,
		wishListMovies,
		rating,
		config,
		appState,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware),
});
