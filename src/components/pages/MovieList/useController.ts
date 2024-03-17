import { getMovieList } from 'store/slice/movieList/selectors';
import { useSelector } from 'react-redux';

export const useController = () => {
	const { items } = useSelector(getMovieList);
	return {
		values: {
			movieList: items,
		},
	};
};
