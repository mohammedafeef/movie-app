import { RootState } from '../../types';

export const getFavoriteMovies = (state: RootState) => state.favoriteMovies;
export const checkMovieFavorite = (state: RootState) => (id: number) => {
	const movie = state.favoriteMovies.items.find((movie) => movie.id === id);
	if (movie) {
		return true;
	} else {
		return false;
	}
};
