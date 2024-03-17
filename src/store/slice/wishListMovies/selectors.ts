import { createSelector } from '@reduxjs/toolkit';
import { Movie, RootState } from '../../types';

export const getWishListMovies = (state: RootState) => state.wishListMovies;
export const checkMovieWishListed = createSelector(
	(state: RootState) => state.wishListMovies.items,

	(wishList: Movie[]) => (id: number) => {
		const movie = wishList.find((movie) => movie.id === id);
		if (movie) {
			return true;
		} else {
			return false;
		}
	}
);
