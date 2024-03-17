import { configureStore } from '@reduxjs/toolkit';
import movieList from './slice/movieList';

export const store = configureStore({
	reducer: {
		movieList,
	},
});
