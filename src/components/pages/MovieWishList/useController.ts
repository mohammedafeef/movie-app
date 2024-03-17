import { getWishListMovies } from 'store/slice/wishListMovies/selectors';
import { useSelector } from 'react-redux';

export const useController = () => {
	const { items } = useSelector(getWishListMovies);
	return {
		values: {
			movieList: items,
		},
	};
};
