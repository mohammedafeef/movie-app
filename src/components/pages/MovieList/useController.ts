import { getMovieList } from 'store/slice/movieList/selectors';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from 'store/api';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieListActions } from 'store/slice/movieList';
import { appScreens, appStateActions } from 'store/slice/appState';
import { getFilter } from 'store/slice/appState/selectors';

export const useController = () => {
	const { items } = useSelector(getMovieList);
	const dispatch = useDispatch();
	const filters = useSelector(getFilter);
	const [currentPage, setCurrentPage] = useState(1);
	const prevResult = useGetMoviesQuery({
		page: currentPage - 1,
		filter: filters,
	});
	const currentResult = useGetMoviesQuery({
		page: currentPage,
		filter: filters,
	});
	const nextResult = useGetMoviesQuery({
		page: currentPage + 1,
		filter: filters,
	});
	const combined = useMemo(() => {
		return [
			...(prevResult.data?.results || []),
			...(currentResult.data?.results || []),
			...(nextResult.data?.results || []),
		];
	}, [prevResult, currentResult, nextResult, currentPage]);
	const handlePageChange = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (combined) {
			dispatch(movieListActions.loadData(combined));
		}
	}, [combined]);
	useEffect(() => {
		dispatch(appStateActions.updateScreen(appScreens.list));
		dispatch(appStateActions.resetFilter());
	}, []);

	return {
		values: {
			movieList: items,
		},
		actions: {
			handlePageChange,
		},
	};
};
