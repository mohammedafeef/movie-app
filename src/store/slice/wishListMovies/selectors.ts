import { RootState } from '../../types';

export const getWishListMovies = (state: RootState) => state.wishListMovies;
export const checkMovieWishListed = (state: RootState) => (id: number) => {
	const movie = state.wishListMovies.items.find((movie) => movie.id === id);
	if (movie) {
		return true;
	} else {
		return false;
	}
};
