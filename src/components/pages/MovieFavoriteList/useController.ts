import { useSelector } from 'react-redux';
import { getFavoriteMovies } from 'store/slice/favoriteMovies/selectors';

export const useController = () => {
	const { items } = useSelector(getFavoriteMovies);
	return {
		values: {
			movieList: items,
		},
	};
};
