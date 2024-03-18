import { getMovieList } from 'store/slice/movieList/selectors';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery, usePrefetch } from 'store/api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appScreens, appStateActions } from 'store/slice/appState';
import { getFilter } from 'store/slice/appState/selectors';

export const useController = () => {
	const { items } = useSelector(getMovieList);
	const dispatch = useDispatch();
	const filters = useSelector(getFilter);
	usePrefetch('getMovies');
	// const [currentPage, setCurrentPage] = useState(1);
	useGetMoviesQuery({ page: 1, filter: filters });
	const handlePageChange = () => {
		console.log('called');
		// dispatch(movieApi.endpoints.getMovies.initiate({ page: 1, filter: filters }));
	};

	useEffect(() => {
		dispatch(appStateActions.updateScreen(appScreens.list));
		dispatch(appStateActions.resetFilter());
	}, []);

	return {
		values: {
			movieList: items.results,
			totalPage: items.total_pages,
			totalResult: items.total_results,
			page: items.page,
		},
		actions: {
			handlePageChange,
		},
	};
};
