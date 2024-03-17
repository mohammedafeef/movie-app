import { createSelector } from '@reduxjs/toolkit';
import { Movie, RootState } from '../../types';

export const getFavoriteMovies = (state: RootState) => state.favoriteMovies;
export const checkMovieFavorite = createSelector(
	(state: RootState) => state.favoriteMovies.items,

	(favoriteMovies: Movie[]) => (id: number) => {
		const movie = favoriteMovies.find((movie) => movie.id === id);
		if (movie) {
			return true;
		} else {
			return false;
		}
	}
);
