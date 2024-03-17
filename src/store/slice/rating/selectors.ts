import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types';
import { Rating } from './types';

export const getRatings = (state: RootState) => state.wishListMovies;
export const getRating = createSelector(
	(state: RootState) => state.rating.items,

	(rating: Rating[]) => (id: number) => {
		const movie = rating.find((movie) => movie.id === id);
		if (movie) {
			return movie.rating;
		} else {
			return 0;
		}
	}
);
