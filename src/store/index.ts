import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';
import favoriteMovies from './slice/favoriteMovies';
import wishListMovies from './slice/wishListMovies';
import rating from './slice/rating';
import config from './slice/config';
import appState from './slice/appState';
import { movieApi } from './api';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		movieList,
		favoriteMovies,
		wishListMovies,
		rating,
		config,
		appState,
		[movieApi.reducerPath]: movieApi.reducer,
	})
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware),
});

export const persistor = persistStore(store);
