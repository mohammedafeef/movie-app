import { useDispatch, useSelector } from 'react-redux';
import { DetailedMovieCardProps } from './types';
import { checkMovieWishListed } from 'store/slice/wishListMovies/selectors';
import { wishListMoviesActions } from 'store/slice/wishListMovies';
import { checkMovieFavorite } from 'store/slice/favoriteMovies/selectors';
import { favoriteMoviesActions } from 'store/slice/favoriteMovies';

export const useController = (props: DetailedMovieCardProps) => {
	const dispatch = useDispatch();
	const isWishListed = useSelector(checkMovieWishListed)(props.id);
	const isFavorite = useSelector(checkMovieFavorite)(props.id);

	const handleWishListClick = () => {
		if (isWishListed) {
			dispatch(wishListMoviesActions.removeMovie(props));
		} else {
			dispatch(wishListMoviesActions.addMovie(props));
		}
	};
	const handleFavoriteClick = () => {
		if (isFavorite) {
			dispatch(favoriteMoviesActions.removeMovie(props));
		} else {
			dispatch(favoriteMoviesActions.addMovie(props));
		}
	};
	return {
		values: {
			isWishListed,
			isFavorite,
		},
		actions: {
			handleWishListClick,
			handleFavoriteClick,
		},
	};
};
